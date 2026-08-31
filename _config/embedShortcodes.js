/**
 * Embed Vimeo video player, etc.
 *
 * @TODO Integrate with client-side JS - progressive enhancement!
 *
 * @see https://github.com/vimeo/player.js
 * @see https://github.com/nfreear/elements/blob/main/src/components/MyVimeoEmbedElement.js
 */

const elementName = 'x-my-vimeo-embed';
const embedRegex = /(vimeo)\.com\/(\d+).+>(.+)<\/a/;

export default function embedShortcodes (eleventyConfig) {
  eleventyConfig.addPairedShortcode('myembed', (content) => {
    const M = content.match(embedRegex);
    if (M) {
      // const mediaProvider = M[1];
      const mediaId = parseInt(M[2]);
      const mediaTitle = M[3];
      return `<${elementName}>
    <template shadowrootmode="open">
      <style eleventy:ignore>
        div { padding: 56.25% 0 0 0; position: relative; }
        iframe { position:absolute; top:0; left:0; width:100%; height:100%; border:none; border-radius:.3rem; }
      </style>
      <div>
        <iframe src="https://player.vimeo.com/video/${mediaId}?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin"
          title="${mediaTitle}"
        ></iframe>
      </div>
    </template>
  </${elementName}>`;
    } else {
      throw new Error(`Unrecognised media URL: ${content}`);
    }
  });
}
