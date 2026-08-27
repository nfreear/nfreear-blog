import FS from 'node:fs/promises';
import ENV from '../.env.js';

/**
 * Search posts using a Regular Expression, defined in ".env.js"
 */

// const regex = /tags:.+oEmbed[, ]/i;
const POSTS = '../_posts/';
const postsPath = resolve(POSTS);
let count = 0;

export default async function grepPosts (postsPath, regex) {
  console.log('RegExp:', regex);

  const postFiles = await FS.readdir(postsPath);

  for (const postFile of postFiles) {
    if (isMarkdownFile(postFile)) {
      const filePath = resolve(POSTS + postFile);

      const content = await FS.readFile(filePath, 'utf8');
      const M = content.match(regex);
      if (M) {
        console.log(postFile, ':', M[0]);
        count++;
      }
    }
  }

  console.debug('Count:', count);
}

function isMarkdownFile (file) {
  return /\.md$/.test(file);
}

function resolve (path) {
  return import.meta.resolve(path).replace('file://', '');
}

grepPosts(postsPath, ENV.regex);

// End.
