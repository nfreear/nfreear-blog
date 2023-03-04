---
layout: post
title:  GAAD-widget
date:   2017-05-14 07:55:00Z
tags:   [ NPM, accessibility, "open source", event, javascript ]
og-desc: To help promote and celebrate Global Accessibility Awareness Day (GAAD), I’ve come up with an Javascripted banner-link.
og-image: https://c1.staticflickr.com/5/4076/35671915106_62be509598_z.jpg
og-image-00: https://unpkg.com/gaad-widget@3.1.0-beta/style/gaad-widget.png
og-image-alt: GAAD-widget embedded on a web-page.

last_updated: 2017-07-01
changefreq: daily
priority: 0.9
---


This Thursday, [Global Accessibility Awareness Day (GAAD)][gaad], is a great
opportunity to talk to your colleagues about digital access and inclusion,
and to learn about how to help those with different disabilities and needs.

To help promote and celebrate the day,
I've come up with the automated banner-link you see above.

Please [give it a try][try], and [give me feedback][bug]!

Global Accessibility Awareness Day happens on the third Thursday of May each year.
The widget automatically appears 10 days before, and disappears 5 days after (_configurable_).
It shows the correct date each year — all thanks to [Datejs][].

The widget requires zero configuration by default.
Here are the _two lines_ to include on your site (thanks [unpkg][] and [RawGit][]):

```html
<div id="id-gaad-widget"></div>

<script src="https://unpkg.com/gaad-widget@3.1.0-beta#._.js"></script>
```

It can be [configured][usage], and already features basic [translation][].
Do give it a try, and vote for new features via the [wishlist][].

It is compatible with [all modern browsers, and with Internet Explorer 9-11][ie].

And, it's [open source][MIT].

Happy [GAAD][]!

---

### Update

9th June ~ `gaad-widget` is now available via the [NPM registry][npm].
[Version 2.1 Beta][rel] features a different after-event message,
a French translation, and an iCal calendar file ;). ([Force display][force].)

1st July 2017 ~ [Version 3.1.0 Beta][rel] ~ adopted [Browserify][], and switched
from a `Datejs` include, to a lookup of JSON embedded in the Javascript.
This reduces the non-minified Javascript size from 55 to 8 kilobytes (yay!) 💓

<!--
~ 💓🇫🇷⌚️📅
-->

[GAAD]: http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget
[@gbla11yday]: https://twitter.com/gbla11yday
[@nfreear]: https://twitter.com/nfreear "Twitter: @nfreear"
[blog]: http://nick.freear.org.uk/2017/05/14/gaad-widget.html
[try]: https://github.com/nfreear/gaad-widget "Try 'gaad-widget'"
[bug]: https://github.com/nfreear/gaad-widget/issues "Give feedback and report issues"
[usage]: https://github.com/nfreear/gaad-widget#usage "Usage"
[translation]: https://github.com/nfreear/gaad-widget#translation "Translation"
[wishlist]: https://github.com/nfreear/gaad-widget/issues/2#!-Wishlist "Wishlist"
[ie]: https://github.com/nfreear/gaad-widget/issues/3#!-MSIE-9-11 "Browser compatibility"
[Datejs]: https://github.com/datejs/Datejs
[RawGit]: https://rawgit.com/
    "Content delivery network (CDN); serves Git files with the correct mime-type."
[unpkg]: https://unpkg.com/ "unpkg is a fast content delivery network for everything on npm."
[MIT]: https://github.com/nfreear/gaad-widget#license "MIT License"

[npm]: https://npmjs.com/package/gaad-widget
[rel]: https://github.com/nfreear/gaad-widget/releases
[browserify]: http://browserify.org/
    "Browserify lets you require('modules') in the browser by bundling up your dependencies."
[force]: /2017/05/14/gaad-widget.html?gaadwidget=force#id-gaad "Force display of the GAAD-widget"
