/**
 * Configuration for my Eleventy WebC-based blog.
 *
 * @copyright Nick Freear, 25-Feb-2023.
 */

const pluginWebc = require('@11ty/eleventy-plugin-webc');

const APP_PLUGINS = [ 'app-filters', 'exclude-drafts', 'post-permalink' ];
const layoutAlias = [ 'base', 'default', 'home', 'page', 'post' ];
const components = '_components/**/*.webc';

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginWebc, { components });

  APP_PLUGINS.forEach((plugin) => {
    eleventyConfig.addPlugin(require(`./_app/${plugin}.plugin`));
  });

  // eleventyConfig.addPlugin(syntaxHighlight);
  // eleventyConfig.addPlugin(pluginRss);
  // eleventyConfig.addPassthroughCopy('assets/fonts');

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('favicon.ico');

  layoutAlias.forEach(alias => {
    // Aliases relative to `_includes` directory.
    eleventyConfig.addLayoutAlias(alias, `layouts/${alias}.webc`);
  });

  eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
    // console.debug('> 11ty.CFG:', eleventyConfig);
    console.debug('> 11ty.After:', dir, runMode, outputMode); // Not: results;
  });

  return {
    // Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			'md',
      'webc',
      'html'
			// "njk",
			// "liquid"
		],

    // Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: 'liquid', // 'webc',

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: 'liquid', // 'webc',

    // These are all optional:
		/* dir: {
			input: '.',         // default: "."
			includes: "_includes",  // default: "_includes"
			data: "_data",          // default: "_data"
			output: "_site"
		}, */

    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix
    pathPrefix: '/11ty-webc-blog/'
  };
};
