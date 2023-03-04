/**
 * Site analytics.
 *
 * @see _components/site-analytics.webc
 */

// console.log('analytics.js:', process.env, this, global);

module.exports = {
  "enable": true,
	"gcId": "ndf812",
	"host": process.env.CI ? "nfreear.github.io" : "localhost:8080"
};
