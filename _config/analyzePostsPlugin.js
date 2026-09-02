import * as FS from 'node:fs/promises';

/**
 * Analyze blog posts - find the number of times each tag is used.
 */
export default function analyzePostsPlugin (eleventyConfig) {
  let tagStat;

  eleventyConfig.addShortcode('tagstat', () => {
    // await sleep(500);

    return JSON.stringify({ tags: tagStat });
  });

  eleventyConfig.addCollection('myPosts', async (collectionsApi) => {
    const allPosts = collectionsApi.getAllSorted().filter(it => isPost(it)); // getFilteredByGlob("_posts/*.md");

    const tagData = getTagsFromPosts(allPosts);

    const orphans = tagData.filter(it => it.posts.length === 1);

    await writeJsonFile('tags-orphans.BAK.json', { length: orphans.length, orphans });

    tagData.forEach((it) => { it.length = it.posts.length; });

    tagStat = tagData.map(({ tag, length }) => { return { tag, count: length }; });

    await writeJsonFile('tags.BAK.json', tagData);

    await writeJsonFile('tag-stat.BAK.json', { length: tagStat.length, tags: tagStat });

    return allPosts;
  });

  /**
   * @see https://www.11ty.dev/docs/events/#eleventy-after
   */
  // Async-friendly in 1.0+
  // Arguments added in 2.0+
  eleventyConfig.on('eleventy.after', async (CFG /* { directories, results, runMode, outputMode } */) => {
    // Run me after the build ends
    /* console.log('outputMode:', outputMode);
      console.log('runMode:', runMode);
      console.log('directories:', directories); */
  }
  );
}

export function getTagsFromPosts (postArray) {
  const tagData = [];

  postArray.forEach((it) => {
    const { tags } = it.data;
    const path = it.inputPath;
    if (tags) {
      tags.forEach((tag) => {
        const entry = tagData.find((it) => it.tag === tag);

        if (entry) {
          entry.posts.push({ path });
        } else {
          tagData.push({ tag, posts: [{ path }] });
        }
      });
    }
  });

  return tagData;
}

export function isPost (entry) {
  const path = entry.inputPath;
  return path && path.includes('_posts') && path.includes('.md');
}

export async function writeJsonFile (fileName, data) {
  const filePath = import.meta.resolve('../' + fileName).replace('file://', '');
  return await FS.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}

export async function writeJsFile (fileName, data, key = '_myTagData') {
  const filePath = import.meta.resolve('../' + fileName).replace('file://', '');
  const jsonData = JSON.stringify(data, null, 2);
  const jsData = `/*
  Auto-generated | ${new Date().toISOString()}
*/
export default ${jsonData};
`;
  return await FS.writeFile(filePath, jsData, 'utf8');
}

export async function sleep (timeoutMS = 1000) {
  return new Promise((resolve) => setTimeout(() => resolve(), timeoutMS));
}
