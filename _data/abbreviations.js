/**
 * Dictionary of abbreviations related to accessibility and web development.
 */
const year = new Date().getFullYear();

export default {
  aria: {
    abbr: 'ARIA 1.2',
    definition: 'Accessible Rich Internet Applications (WAI-ARIA) 1.2 (2023)',
    url: 'https://www.w3.org/TR/wai-aria-1.2/'
  },
  aria13: {
    abbr: 'ARIA 1.3',
    definition: 'Accessible Rich Internet Applications (WAI-ARIA) 1.3 (Editor’s Draft)',
    url: 'https://w3c.github.io/aria/'
  },
  html5: {
    abbr: 'HTML5',
    definition: 'HyperText Markup Language 5',
    url: 'https://html.spec.whatwg.org/'
  },
  wcag: {
    abbr: 'WCAG 2.2',
    definition: 'Web Content Accessibility Guidelines (WCAG) 2.2 (2024)',
    url: 'https://www.w3.org/TR/WCAG22/'
  },
  wcag3: {
    abbr: 'WCAG 3.0',
    definition: 'W3C Accessibility Guidelines (WCAG) 3.0 (Working Draft)',
    url: 'https://www.w3.org/TR/wcag3/'
  },
  wcag3ed: {
    abbr: 'WCAG 3.0 (ed)',
    definition: 'W3C Accessibility Guidelines (WCAG) 3.0 (Editor’s Draft)',
    url: 'https://w3c.github.io/wcag3/guidelines/'
  },
  w3c: {
    abbr: 'W3C',
    definition: 'Worldwide Web Consortium (W3C)',
    url: 'https://www.w3.org/'
  },
  pas: {
    abbr: 'PAS 901:2025',
    definition: 'PAS 901:2025 Vocal accessibility in system design (BSI)(2025)',
    url: 'https://knowledge.bsigroup.com/products/vocal-accessibility-in-system-design-code-of-practice'
  },

  // Entries specific to my blog.
  mitb: {
    abbr: 'MIT',
    definition: 'Code: snippets are released under an MIT License.',
    url: `https://nfreear.mit-license.org/2009-${year}#!-blog`,
    img: 'https://nick.freear.org.uk/assets/shields-io-license-MIT.svg',
    spriteId: 'mit'
  },
  ccbysa: {
    abbr: 'CC:BY-SA 4.0',
    definition: 'Content: released under a Creative Commons Attribution-ShareAlike 4.0 License.',
    url: 'https://creativecommons.org/licenses/by-sa/4.0/',
    img: 'https://nick.freear.org.uk/assets/license-cc-by-sa-88x31.svg'
  },
  ndfc: {
    abbr: '©Nick Freear',
    definition: `Copyright © 2009-${year} Nick Freear.`,
    url: '#'
  }
};
