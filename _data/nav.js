/**
 * Site navigation data.
 *
 * @see _components/site-nav.webc
 */

module.exports = {
	/** Site subdirectory.
	 * @see eleventy.config.js
	 */
	pathPrefix: '/11ty-webc-blog',
	baseurl: '/11ty-webc-blog',

  // Home | About | Links & Bookmarks | Tags | Profiles | Search
	main: [
    "./_pages/index.html",
    "./_pages/about.md",
		"./_pages/links.html",
		"./_pages/tag.html",
		"./_pages/profile.md",
		"./_pages/search.html"
  ]
};
