import compat from './compatibilityPlugin.js';
import filters from './filters.js';
import shortcodes from './shortcodes.js';
import myFeedPlugin from './myFeedPlugin.js';
import embedShortcodes from './embedShortcodes.js';
import analyzePostsPlugin from './analyzePostsPlugin.js';

import abbreviations from '../_data/abbreviations.js';

export default function blogPluginCollection (eleventyConfig) {
  eleventyConfig.addPlugin(compat);
  eleventyConfig.addPlugin(filters);
  eleventyConfig.addPlugin(shortcodes, { abbreviations });
  eleventyConfig.addPlugin(embedShortcodes);
  eleventyConfig.addPlugin(analyzePostsPlugin);
}

export {
  compat, filters, shortcodes, embedShortcodes, myFeedPlugin
};
