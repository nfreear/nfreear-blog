import FS from 'node:fs/promises';

/**
 * Fix tag-lists accepted by Jekyll front-matter parser.
 */

const POSTS = '../_posts/'; // Was: '../_postsTest/'
const postsPath = resolve(POSTS);
const TAGS_REGEX = /tags:\s+([\w #-]+)/;

export async function rewriteTags (postsPath, tagsRegex) {
  console.debug('Input path:', postsPath);

  const postFiles = await FS.readdir(postsPath);

  for (const postFile of postFiles) {
    if (isMarkdownFile(postFile)) {
      const filePath = resolve(POSTS + postFile);
      const outPath = filePath; // + '_EDIT.md';

      const content = await FS.readFile(filePath, 'utf8');

      if (!/tags:\s+\[/.test(content)) {
        const newContent = content.replace(tagsRegex, (match, p1) => tagReformat(match, p1));

        await FS.writeFile(outPath, newContent, 'utf8');
      }
    }
  }

  console.debug('Posts:', postFiles.length);
}

function tagReformat (match, p1) {
  const tags = p1.split(/\s+/);
  return `tags:   [ ${tags.join(', ')} ]`;
}

function isMarkdownFile (file) {
  return /\.md$/.test(file);
}

function resolve (path) {
  return import.meta.resolve(path).replace('file://', '');
}

rewriteTags(postsPath, TAGS_REGEX);

// End.
