/**
 * General site settings.
 */

const frontendJavascript = () => process.env.JS === '1';

module.exports = {
  frontendJavascript: frontendJavascript(),
  googSearchId: '001222343498871500969:-u73i2qfu2s',

  /** @legacy Carried from Jekyll. */
  date_format: "%-d %B %Y",
  excerpt_truncate: 28
};

console.debug('[11ty]', 'Javascript (env):', frontendJavascript()); // typeof process.env.JS;
