/**
 * Functions to be used in the `tag-list` WebC component.
 *
 * @copyright Nick Freear, 05-Mar-2023.
 */

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('getAllTags', (collection) => getAllTags(collection));

  eleventyConfig.addFilter('filterTagList', (tags) => filterTagList(tags));
};

/**
 * @see https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js#L66-L76
 */
function getAllTags (collection) {
  const TAGS = [];
  // let tagSet = new Set();
  for(let item of collection) {
    splitTags(item.data.tags).forEach((tag) => {
      const found = TAGS.find(el => el.tag === tag);
      if (found) {
        found.count++;
      } else {
        TAGS.push({ tag, count: 1 });
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

// module.exports = { Math, getAllTags, filterTagList };
