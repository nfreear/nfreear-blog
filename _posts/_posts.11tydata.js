export default {
  tags: [
    'posts'
  ],
  layout: 'layouts/post.njk',

  // NDF: Drafts / Not published.
  eleventyComputed: {
    eleventyExcludeFromCollections: ({ published }) =>
      typeof published !== 'undefined' && !published ? true : undefined,
    ignore: ({ published }) =>
      typeof published !== 'undefined' && !published ? true : undefined,
  },
};
