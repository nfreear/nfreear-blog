/**
 * Filters to be used in the `tag-list` WebC component.
 *
 * Add the "myTags" custom collection.
 *
 * @copyright Nick Freear, 05-Mar-2023.
 */

module.exports = (eleventyConfig) => {
  /**
   * The "myTags" custom collection.
   */
  eleventyConfig.addCollection('myTags', (collectionApi) => {
    const POSTS = collectionApi.getFilteredByTag('posts');
    const TAGS = sortTags(filterTagList(getAllTags(POSTS)));
    // console.debug('>> addCollection - myTags:', Array.isArray(TAGS), TAGS.length, TAGS);
    return TAGS;
  });

  /** Filters.
   */
  // Was: eleventyConfig.addFilter('getAllTags', (collection) => getAllTags(collection));

  // eleventyConfig.addFilter('filterTagList', (tags) => filterTagList(tags));

  eleventyConfig.addFilter('sortGetTags', (collection) => {
    return sortTags(filterTagList(getAllTags(collection)));
  });

  eleventyConfig.addFilter('fontSizeVar', (count) => {
    count = parseInt(count);
    return `--tc-log:${Math.log(count + 1)};--tc-log10:${Math.log10(count + 1)};`; // --tc-n:${count};
    // return `--tc-font-size:${Math.log10(count + 1)}rem;`;
  });
};

function sortTags (TAGS) {
  return TAGS.sort((A, B) => A.tag < B.tag ? -1 : 1);
}

/**
 * @see https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js#L66-L76
 */
function getAllTags (collection) {
  const TAGS = [];
  // let tagSet = new Set();
  for (let item of collection) {
    splitTags(item.data.tags).forEach((tag) => {
      const found = TAGS.find(el => el.tag === tag);
      if (found) {
        found.count++;
        found.posts.push(item);
      } else {
        TAGS.push({ tag, count: 1, posts: [ item ] });
      }
      // tagSet.add(tag)
    });
  }
  // return Array.from(tagSet);
  return TAGS;
}

function filterTagList (tags) {
  return (tags || []).filter(tag => ['all', 'nav', 'post', 'posts', ''].indexOf(tag.tag) === -1);
}

/** @legacy Jekyll - space-separated tags.
 */
function splitTags (tagArray) {
  const TAGS = [];
  (tagArray || []).forEach(tagStr => {
    tagStr.split(' ').forEach(tag => TAGS.push(tag));
  });
  return TAGS;
}
