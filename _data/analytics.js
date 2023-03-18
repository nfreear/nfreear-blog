/**
 * Site analytics settings.
 *
 * @see _components/site-analytics.webc
 */

// console.log('analytics.js:', process.env, this, global);

module.exports = {
  "enableGoatCounter": true,
  "gcId": "ndf812",
  "enableGoogleAnalytics": true,
  "googleAID": "UA-8330079-6",
  "host": process.env.CI ? "nfreear.github.io" : "localhost:8080"
};
