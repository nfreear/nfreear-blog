
import customImport from 'https://nfreear.github.io/elements/custom.js';

await customImport('my-analytics, my-feed, my-search');

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

console.debug('app.mjs');
