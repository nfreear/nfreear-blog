/**
 * Add some useful filters from Liquid JS.
 *
 * @see https://liquidjs.com/filters/overview.html
 * @see https://github.com/harttle/liquidjs/tree/master/src/filters
 */

const { filters } = require('liquidjs');
const { strip_html, truncatewords } = filters;

module.exports = (eleventyConfig) => {

  eleventyConfig.addFilter('strip_html', (v) => strip_html(v));
  eleventyConfig.addFilter('truncatewords', (v, words = 15, o = '...') => truncatewords(v, words, o));

  // eleventyConfig.addFilter('truncatewords', eleventyConfig.getLiquidFilter('truncatewords'));
};
