---
x-csp-disable: true
layout: post
title:  Accessify Wiki
date:   2018-11-18 10:51:00Z
tags:   [ "open source", bookmark, javascript, jekyll, accessibility ]
og-desc: Working together to fix accessibility on the Web, one site at a time.
og-image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gnome-preferences-desktop-accessibility2.svg/240px-Gnome-preferences-desktop-accessibility2.svg.png
og-image-alt: Accessibility icon 2 (Gnome)

last_updated: 2018-11-18
changefreq: daily
priority: 1.0
---


_I should have written [this][p1] a while [ago][p2] ... I have now. Yay!_

## What is Accessify Wiki?

_Accessify Wiki_ is a machine and human readable way of describing specific
accessibility fixes for an arbitrary HTML web page,
and a means of delivering those fixes to the user in their browser,
without being the owner or publisher of the web page.

[![Accessibility icon 2][svg-2]][gnome] [![Accessibility icon 1][svg-1]][c-1]

## Why Accessify Wiki?

_Accessify Wiki_ envisages a world where you really need to achieve something on a web page,
book train tickets, read some content, or whatever,
and there's an accessibility problem which prevents you from completing your task.

The owner of the page(s) can't make the fix in a timely fashion[* *][note-1],
so you reach out to ask if the community can help you crowd-source the solution, using Accessify Wiki.

And, the community pulls through.

In due course, the owner of the page(s), will hopefully incorporate the accessibility fix or fixes, completing a _virtuous circle_.

_Note, the web-site owner/publisher remains ultimately responsible for fixing accessibility issues.
Accessify Wiki merely aims to facilitate a pragmatic stop-gap._

## Where did it come from?

_Accessify Wiki_ grew out of my experience with the [Greasemonkey][] user-Javascript
manager for Firefox, and contributions to [accessifyhtml5.js][].

Initial experimentation happened in [ScraperWiki][], and the [legacy Wiki][], is hosted on Wikia.
The legacy [API][json], [bookmarklet][] and [user Javascript][] were [developed][gh-old] between April 2013 and June 2014.
In 2016, I started a [new Wiki][] written in Markdown, powered by [Jekyll][] and hosted on GitHub Pages.

[Accessify Wiki introduction, on SlideShare][embed]

## Describing a fix

The specification of accessibility fixes comprises two parts.

### Config

There is a `CONFIG` object defining which URLs/ pages the fixes apply to (expressed in [YAML][] format) ...

```yaml
include:
  - 'https://*.google.de/*'
  - 'https://*.google.co.uk/*'
  - 'http://www.google.com/*'
test_urls:
  - 'https://google.co.uk/search?q=Accessify+Wiki'
  # ...
default_locale: en-GB
authors:
  - Nick @nfreear
created: '2013-04-03T19:34+01:00'
```

### Fixes

...And, a set of [selectors][], with HTML attribute-value pairs, that define the fixes.

```yaml
# ...
.gb_o:
  aria-label: Popup
'.gb_o > a.gb_wa':
  role: button
  title: Close
  aria-label: "Close 'New feature' popup"
```

## Is it secure?

The Javascript uses a [whitelist][] to define which HTML attributes can be added or amended.
So, attributes including `alt`, `aria-label` and `role` are allowed,
but Javascript event handlers including `onclick` would not be allowed.
The accessibility fixes are currently exposed via a [JSON][] and [JSONP][] API.

A new API would deprecate `JSON-P` in favour of [CORS][] headers.

Note, that current implementations of _Accessify Wiki_ may be blocked on
some sites by a [Content Security Policy][csp].

## Continuous integration

The system can use the `test_urls` listed in the `config` object to
periodically test the number of selectors and attribute-value pairs that successfully match.
When the _hit/miss_ ratio goes below a threshold, this can be flagged to the _Wiki_ maintainers/editors.

This provides an automated way to continuously test and monitor quality.

## How are fixes applied?

There is currently an [Accessify][bm] bookmarklet, and a [user Javascript][].

```js
javascript:(
  function (D, AC5U) {
    var s = D.createElement('script'); // var%20s= ...
    s.src = 'https://accessifywiki.appspot.com/browser/js/accessifyhtml5-marklet.js?x=' + Math.random();
    s.onerror = function (e) { console.error('JS onload error. Probably CSP?', e.target.src, e) };
    D.body.appendChild(s)
  }
)(document, {})
```

In the future, I envision these being used as the basis for browser add-ons/extensions.

## What next?

The initial phase of _Accessify Wiki_ was a frenetic period of development and testing.
Since then I've had conversations, but never moved on to the next stages.

I would love to conduct a pilot study to test the efficacy of the prototype system(s) with real users,
and with assistive technologies.

A colleague has suggested the use of _Accessify Wiki_ for teaching and learning,
which is an interesting idea that I'd love to explore further.

And, I need to do some outreach work within the accessibility, _dis-ability_ and possibly open-source communities.

Here's [some new code][gist].


[p1]: https://github.com/nfreear/nfreear.github.io/blob/master/_posts/2015-11-14-accessify-wiki.md
  "Draft blog post, 2015"
[p2]: https://github.com/nfreear/nfreear.github.io/blob/master/_posts/2016-03-19-accessify-wiki-proposal.md
  "Draft blog post 2 — proposal, 2016"

[scraperwiki]: https://classic.scraperwiki.com/tags/accessify-wiki.html "Browse by tag / accessify-wiki"
[scraperwiki-0]: https://classic.scraperwiki.com/views/accessify-wiki/ "Created: 2013-04-27 07:32:44"
[legacy Wiki]: http://accessify.wikia.com/wiki/Accessify_Wiki
[new Wiki]: https://accessifywiki.github.io/ "January-February 2016"
[fix]: https://accessifywiki.github.io/fix/google-search.html "Fix:Google search"
[bookmarklet]: https://accessifywiki.appspot.com/browser/js/accessifyhtml5-marklet.js
  "Bookmarklet. 14 April 2013 - June 2014"
[user Javascript]: https://accessifywiki.appspot.com/browser/userjs/accessify.user.js
[json]: https://accessifywiki--1.appspot.com/fix?url=https://google.co.uk/search%3Fq=Accessify-wiki "JSON API, with CORS headers"
[jsonp]: https://accessifywiki--1.appspot.com/fix?callback=_FN&url=https://google.co.uk/search%3Fq=Accessify-wiki
  "JSON with padding API"
[gh-old]: https://github.com/nfreear/accessify-wiki "Legacy webapp2-based API. 14 April 2013 - June 2014"
[gh-api]: https://github.com/accessifywiki/accessifywiki-api
[selectors]: https://w3.org/TR/selectors-3/
  "Selectors Level 3: W3C Recommendation 06 November 2018"
[whitelist]: https://github.com/yatil/accessifyhtml5.js/blob/master/accessifyhtml5.js#L23-L24
  "`ATTR_SECURE` whitelist in the `yatil/accessifyhtml5.js` Javascript"
[cors]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS "Cross-Origin Resource Sharing (CORS) headers"
[csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP "Content Security Policy (CSP)"
[yaml]: https://en.wikipedia.org/wiki/YAML
  "YAML (YAML Ain't Markup Language) is a human-readable data serialization language. It is commonly used for configuration ..."
[yaml-1.2-ex]: http://yaml.org/spec/1.2/spec.html#id2761803
  "YAML Ain’t Markup Language (YAML™) Version 1.2. 3rd Edition, Patched at 2009-10-01"
[jekyll]: https://jekyllrb.com/docs/github-pages/
[greasemonkey]: https://www.greasespot.net/
[accessifyhtml5.js]: https://github.com/yatil/accessifyhtml5.js "yatil/accessifyhtml5.js on GitHub"
[gnome]: https://commons.wikimedia.org/wiki/File:Gnome-preferences-desktop-accessibility2.svg
[svg-2]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gnome-preferences-desktop-accessibility2.svg/240px-Gnome-preferences-desktop-accessibility2.svg.png
[svg-1]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Gnome-preferences-desktop-accessibility.svg/240px-Gnome-preferences-desktop-accessibility.svg.png
[c-1]: https://commons.wikimedia.org/wiki/File:Gnome-preferences-desktop-accessibility.svg
[need]: https://image.slidesharecdn.com/accessify-wiki-intro-v1-131030184907-phpapp02/95/accessify-wiki-introduction-v12-13-1024.jpg?cb=1383160055
  "Accessify Wiki Needs you — Fixing accessibility on the web one site at a time."

[bm]: javascript:(function(D,AC5U){var%20s=D.createElement('script');s.src='https://accessifywiki.appspot.com/browser/js/accessifyhtml5-marklet.js?x='+Math.random();D.body.appendChild(s)})(document,{})
  "Javascript bookmarklet :— drag to the bookmark bar in your browser."

[i]: https://web.archive.org/web/20170113173533/https://elevator.jisc.ac.uk/e/accessiblebydesign/idea/open-media-player
  "Accessible by Design idea: Open Media Player 3.0"
[embed]: https://slideshare.net/nfreear/accessify-wikiintrov12?_EMBED_ME_
  "Accessify Wiki introduction v1.2 — SlideShare"
[ss-2]: https://slideshare.net/nfreear/accessify-wiki-a5-leaflets-v1
[video]: http://youtu.be/KsUTiasR4F0?_EMBED_ME_
[twitter]: https://twitter.com/accessifywiki

[gist]: https://gist.github.com/nfreear/afd3b2119ed3d633e608f52a1cbc0f2f
  "New Accessify wiki Javascript"

[note-1]: #p-8 "Note 1."

<!-- <iframe
  src="https://slideshare.net/slideshow/embed_code/key/9zsi2K174uSDx0" allowfullscreen
  width="595" height="485" x-scrolling="no" style="border:1px solid #CCC; max-width: 100%;"
></iframe> ... -->

[End]: //.
