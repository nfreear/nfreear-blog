import { DateTime } from 'luxon';

/**
 * Backwards compatibility for Jekyll.
 * @author NDF.
 */
export default function compatPlugin (eleventyConfig) {
  /**
   * Layout aliases.
   */
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/base.njk');

  /**
   * Fix date parsing.
   */
  eleventyConfig.addDateParsing((dateValue) => {
    if (typeof dateValue === 'string') {
      return DateTime.fromFormat(dateValue, 'yyyy-MM-dd hh:mm:ss z');
    }
  });

  /**
   * Shortcodes.
   */
  eleventyConfig.addPairedShortcode('highlight', (content) => {
    return content;
  });

  eleventyConfig.addPairedShortcode('comment', (content) => {
    return '<!-- comment -->';
  });

  eleventyConfig.addShortcode('gist', (gistId) => {
    return gistId;
  });

  eleventyConfig.addShortcode('post_url', (path) => {
    return path;
  });
}
