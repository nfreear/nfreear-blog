/**
 * Plugin to add ignores, filters and legacy shortcodes.
 */

const { DateTime } = require('luxon');
const PKG = require('../package');

module.exports = (eleventyConfig) => {
	/** Ignores.
  */
  eleventyConfig.ignores.add('_drafts');
  // eleventyConfig.ignores.add('_posts/2020-07-12-experimenting-with-code-dictation-and-lipsurf-during-lockdown.md');
  eleventyConfig.ignores.add('_posts/2009-07-16-improving-the-accessibility-of-uservoice.md');
  // eleventyConfig.ignores.add('_posts/2017-11-05-a11y-on-twitter.md');

  eleventyConfig.ignores.add('(LICENSE|README).md');
  eleventyConfig.ignores.add('_posts/_blog.md');

  /** Filters.
  */
  eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(format || 'dd LLLL yyyy');
  });

  eleventyConfig.addFilter('sourceUrl', () => PKG.repository.url);

  eleventyConfig.addFilter('_enc', (p) => encodeURIComponent(p));
  eleventyConfig.addFilter('cgi_escape', (p) => encodeURIComponent(p));

  eleventyConfig.addJavaScriptFunction('copyright', () => {
    const now = new Date();

    return `&copy; ${now.getFullYear()}`; // ` Yours Truly.`;
  });

  /** @legacy Jekyll shortcodes.
  */
  eleventyConfig.addPairedLiquidShortcode('highlight', (codeContent, lang = 'xml') => codeContent);

  eleventyConfig.addLiquidShortcode('post_url', (path) => path); // 5 occurences.
};
