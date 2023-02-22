---
published: true
layout: post
title:  My Elements
date:   2023-02-19 12:30:00
tags:   javascript HTML
og-desc: A short description
# og-image-00: https://c1.staticflickr.com/5/4076/35671915106_62be509598_z.jpg
og-image-alt: ALT text.

last_updated: 2023-02-19
changefreq: daily
priority: 1.0
---

For a while I've been working on a suite of custom elements. [Custom elements][] are a standards-based way to extend HTML. A `<custom-element>` could encapsulate a user-interface component or custom form-field like `<my-star-rating>`, it could purely encapsulate a behaviour like `<my-keyboard-control>`. The possibilities are endless!

So I'm getting my ass in gear, and explaining the what and the why ...

## Why?

A colleague asked me "why?" recently, which got me thinking … I'm motivated by a few different factors. In no particular order:

* Curiosity … wanting to play and experiment,
* Develop things useful for other projects, for example this blog!
* Push boundaries,
* Explore the possibilities and limitations, for example in relation to accessibility,
* Tied in with other experiments, for example, relating to readable fonts.

## Where?

If you're impatient to get started:

* [GitHub: @nfreear/elements][repo],
* [Demo site][] and full list,
* [Codepen collection][].

## What?

* You've got the experimental — `<my-star-rating>`, `<my-font>`, `<my-page>`,
* Things that are useful on my blog — `<my-analytics>`, `<my-busy-spinner>`, `<my-feed>`, `<my-font>`, `<my-gaad-widget>`, `<my-skip-link>`,
* Some overtly accessibility-focussed elements — `<my-skip-link>` and `<my-keyboard-control>`,

And, some are just because — `<my-map>` anyone?

<iframe height="550" style="width: 100%;" scrolling="no" title="my-map demo #2" src="https://codepen.io/nfreear/embed/jOpEXmv?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nfreear/pen/jOpEXmv">
  my-map demo #2</a>.
</iframe>

## How?

To load all elements, purely in the HTML page, simply:

```html
<my-skip-link></my-skip-link>

<my-options template-host="github.io"></my-options>

<script src="https://nfreear.github.io/elements/index.js" type="module"></script>
```

Or to import just a handful of elements:

```js
import customImport from 'https://nfreear.github.io/elements/custom.js';

await customImport('my-skip-link, my-map');
```

Then:
```html
<my-skip-link></my-skip-link>

<my-map
  lat="51.505"
  long="-0.09"
  zoom="13"
  geojson="path/to/landmarks.geo.json"
>A map showing some landmarks in London, UK</my-map>
```

The code uses ES modules throughout, with `semistandard` linting. It should play well with build tools and other custom element libraries.

## What's next?

It's high time I published another version on [npmjs.com][]. Tidying and tweaking. I don't have big plans at present — I'd love to hear what you think.

I'm [@ndf@mastodon.social][mast].


[custom elements]: https://web.dev/custom-elements-v1/
[demo site]: https://nfreear.github.io/elements/demo/
[codepen collection]: https://codepen.io/collection/mrpzOQ
[repo]: https://github.com/nfreear/elements.git
[npmjs.com]: https://www.npmjs.com/package/ndf-elements
[import]: https://github.com/nfreear/nfreear-blog/blob/master/js/main.js#L7
[mast]: https://mastodon.social/@ndf
