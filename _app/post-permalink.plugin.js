/**
 * Plugin to generate permalinks for blog posts based on date.
 *
 * @example `/2023/02/19/my-elements.html`
 *
 * @copyright Nick Freear, 25-Feb-2023.
 * @see https://github.com/11ty/eleventy-base-blog/eleventy.config.drafts.js
 */

function isBlogPost (data) {
	return data.page && /_posts/.test(data.page.inputPath);
}

function eleventyComputedPostPermalink () {
	// When using `addGlobalData` and you *want* to return a function, you must nest functions like this.
	// `addGlobalData` acts like a global data file and runs the top level function it receives.
	return (data) => {
		if (isBlogPost(data)) {
			const { fileSlug, outputFileExtension } = data.page;
			const slashDate = data.date.toISOString().replace(/T.+/, '').replace(/-/g, '/');
			// const title = data.title;

			data.permalink = `/${slashDate}/${fileSlug}.${outputFileExtension}`;

			// console.debug('>>> CPP:', data.title, PERMALINK, data.page);
		}

		return data.permalink;
	}
};

module.exports.eleventyComputedPermalink = eleventyComputedPostPermalink;

module.exports = (eleventyConfig) => {
	eleventyConfig.addGlobalData('eleventyComputed.permalink', eleventyComputedPostPermalink);
};
