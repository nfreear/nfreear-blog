/**
 * Shortcodes for abbreviations, "quick links" and SVG icons.
 *
 * @copyright Nick Freear, 29-August-2026.
 */

let count = 0;

export default function (eleventyConfig, { abbreviations }) {
  eleventyConfig.addPairedShortcode('abbr', (key) => {
    const { abbr, definition, htmlId, style } = getAbbreviation(key, abbreviations);
    return `<my-abbr>
    ${abbr}
    <template shadowrootmode="open">
      <a href="#" interestfor="${htmlId}" aria-roledescription="abbreviation" aria-describedby="${htmlId}" part="a"><slot></slot></a>
      <span popover id="${htmlId}" style="${style}" part="popover">${definition}</span>
    </template>
  </my-abbr>`;
  });

  eleventyConfig.addPairedShortcode('qlink', (key) => {
    const { abbr, definition, url, htmlId, style } = getAbbreviation(key, abbreviations);
    return `<q-link>
    ${abbr}
    <template shadowrootmode="open">
      <a href="${url}" interestfor="${htmlId}" aria-describedby="${htmlId}" part="a"><slot></slot></a>
      <span popover id="${htmlId}" style="${style}" part="popover">${definition}</span>
    </template>
  </q-link>`;
  });

  eleventyConfig.addShortcode('icon', (id) => {
    return `<x-icon>
    <svg class="icon-${id}" aria-label="${id}">
      <use href="/assets/sprite.svg#${id}"/>
    </svg>
  </x-icon>`;
  });

  eleventyConfig.addShortcode('iconlink', (id) => {
    const { abbr, definition, url, htmlId, spriteId, style } = getAbbreviation(id, abbreviations);
    return `<icon-link class="${spriteId}">
    ${abbr}
    <template shadowrootmode="open">
      <a href="${url}" interestfor="${htmlId}" aria-label="${abbr}" aria-describedby="${htmlId}" part="a">
        <svg part="svg ${spriteId}">
          <use href="/assets/sprite.svg#${spriteId}"/>
        </svg>
      </a>
      <span popover id="${htmlId}" style="${style}" part="popover">${definition}</span>
    </template>
  </icon-link>`;
  });
}

export function getAbbreviation (key, abbreviations) {
  count++;
  key = key.toLowerCase();
  const htmlId = `id_${count}`;
  const style = 'position-area:var(--abbr-pos, bottom center)';
  const entry = abbreviations[key] ?? { abbr: key, definition: '[definition not found]', url: '#' };
  return { ...entry, htmlId, style, count, key };
}
