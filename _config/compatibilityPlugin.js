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
   * Permalinks: /2026/08/26/file-slug.html
   */
  eleventyConfig.addGlobalData('permalink', () => {
    return (data) => {
      const { date, fileSlug, inputPath, outputFileExtension } = data.page;

      if (inputPath.includes('_posts')) {
        const M = inputPath.match(/.+\/((19|20)\d{2}-\d{2}-\d{2})-.+/);
        const strDate = M ? M[1] : null;
        // console.debug('Post:', strDate, inputPath);

        const jsDate = DateTime.fromJSDate(date) ?? DateTime.fromFormat('yyyy-MM-dd', strDate);

        return `${jsDate.toFormat('yyyy/MM/dd')}/${fileSlug}.${outputFileExtension}`;
      }
    };
  });

  /**
   * Shortcodes.
   */
  eleventyConfig.addPairedShortcode('highlight', (content, lang, linenos = null) => {
    return '```' + lang + content + '\n```\n';
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
