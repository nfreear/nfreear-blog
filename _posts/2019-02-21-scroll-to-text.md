---
x-csp-disable: true
layout: post
title:  Scroll-to-text
date:   2019-02-21 17:37:00Z
tags:   [ 'open source', bookmark, javascript ]
# og-desc:
# og-image:
# og-image-alt:
# x-style: ''
# x-image-width: 480

last_updated: 2019-02-21
changefreq: daily
priority: 1.0
---

Are you active on social media?
And, do you share and bookmark lots of links from the Web?
I certainly do.
One of the frustrations that I sometimes experience, is wanting to share a specific
phrase or paragraph part way down a long article or page, and not being able to.
(_As there isn't a convenient `id` nearby in the HTML_.)

This frustration led me to look at different ways of '_saving a place_' on a page.

Note, although what I'm talking about shares some similarities with [web annotation][search],
and social bookmarking, there are clear differences.

 1. I'd prefer something that you don't have to sign up to;
 2. Lightweight, without a server-based backend and database;
 3. Not reliant on a browser plugin or bookmarklet;
 4. Shareable and open-access;
 5. An approach that _fully acknowledges_ and doesn't distract from the source page **

The idea I've come up with encodes the URL of the source page, and the text to highlight like so,

```
https://scrolltotext.github.io/?url=http://example.org/page.html&text={Interesting+text}
```

And, you can optionally scroll to the _Nth_ occurrence of the text,

```
https://scrolltotext.github.io/?url=http://example.org/page.html&text={Interesting+text}&occurrence=2
```

It makes use of some recent HTML5 and DOM/JS innovations, including:

 * The [`Fetch API`][fetch api];
 * The [`srcdoc`][srcdoc] attribute;
 * [`scrollIntoView`][js-scroll]

The result uses pure HTML `+` Javascript (_no server-side scripting_), and acts as a _filtering_ [Web proxy][].

The main Javascript fetches the page at the given `URL`, searches for the `text`,
and injects some markup wrapping the text in the HTML (`<mark .. > ... </mark>`).
The HTML page is placed in a `srcdoc` attribute on an `<iframe>`,
with injection of a minimal quantity of CSS and Javascript (_approx. 28 lines of JS_).

The original page, plus highlighting is displayed in most modern browsers.
The browser smoothly scrolls to the highlighted text, and there are links to view the original page,
and to a disclaimer.

## Examples

Here are some examples which hopefully demonstrate the utility of the '_scroll-to-text_ prototype':

 * ['_To die, to sleep_', quote from Hamlet][hamlet]
 * ['_catch sight …_', quote from an OU News article][wels-tips]
 * [The 2nd occurrence of '_très_' in Descartes '_Les Principes de la Philosophie_' (French)][fr]

I envisage general use, plus application to things like e-learning.
I'd love feedback on this prototype, and I'm sure people out there have great use-cases.

You can visit the site at :~ [scrolltotext.github.io][].

And, view and contribute to [the source code][gh] ([MIT License][mit]).

## Update

_24 February_: I gather that Chrome is testing a ['Scroll to text'][ch-stt] [feature][ch-stt-gh].

[gh]: https://github.com/scrolltotext/scrolltotext.github.io
[gh-orig]: https://github.com/nfreear/scroll-to-text
[scrolltotext.github.io]: https://scrolltotext.github.io/
[mit]: https://nfreear.mit-license.org/#!-2019-scroll-to-text "MIT License"

[search]: https://google.com/search?q=Annotate+a+page "Search: annotate a page"
[an-js]: http://annotatorjs.org/showcase.html
[an-rev]: https://hongkiat.com/blog/top-web-annotation-and-markup-tools/
  "7 Free Web Annotation and Markup Tools You Should Know, By Ashutosh KS. Updated on January 3, 2019"
[an-rev-2]: https://educatorstechnology.com/2018/02/7-great-web-tools-to-help-teachers.html
  "7 Great Web Tools to Help Teachers Annotate Web Pages, Tuesday, February 06, 2018"

[web proxy]: https://en.wikipedia.org/wiki/Proxy_server
[fetch api]: https://developer.mozilla.org/docs/Web/API/Fetch_API "The Fetch API provides an interface …"
[can-srdoc]: https://caniuse.com/#feat=iframe-srcdoc
[srcdoc]: https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-srcdoc
  "The 'srcdoc' attribute on an <iframe>"
[js-scroll]: https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView
  "The 'Element.scrollIntoView()' method scrolls the element on …"

[sh-quotes]: https://goodreads.com/quotes/tag/shakespeare
[hamlet]: https://scrolltotext.github.io/?url=http://shakespeare.mit.edu/hamlet/hamlet.3.1.html&text=To%20die,%20to%20sleep
  "To die, to sleep; To sleep: perchance to dream (Hamlet, Act III, scene 1)"
[ham-2]: https://opensourceshakespeare.org/views/plays/play_view.php?WorkID=hamlet&Act=3&Scene=1&Scope=scene
[fr]:  https://scrolltotext.github.io/?url=https://scrolltotext.github.io/test/descartes.fr.html&text=tr%C3%A8s&occurrence=2
  "Les Principes de la Philosophie by Descartes (Français/French) (text: très)"
[mdn]: https://scrolltotext.github.io/?url=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe&text=srcdoc
  "'srcdoc' attribute, on Mozilla Developer Network"
[aus-quotes]: https://goodreads.com/work/quotes/3060926-pride-and-prejudice
[austen-0]: https://scrolltotext.github.io/?url=http://literaturepage.com/read/prideandprejudice-242.html&text=angry%20people%20are%20not%20always%20wise;
[austen]: https://scrolltotext.github.io/?url=https://ebooks.adelaide.edu.au/a/austen/jane/a93pr/chap45.html&text=angry%20people%20are%20not%20always%20wise
  "“Angry people are not always wise.” ― Jane Austen, Pride and Prejudice, Chapter 45."
[wels-tips]: https://scrolltotext.github.io/?url=https://ounews.co/education-languages-health/health/wellbeing-tips-for-2019/&text=catch%20sight%20of%20the%20beautiful
  "'catch sight of the beautiful', Wellbeing tips for 2019 By Hannah Grimmette - January 15, 2019, OU News."

[ch-stt]: https://chromeunboxed.com/chromes-scroll-to-text-looks-to-anchor-tag-the-web/
  "Chrome's “SCROLL TO TEXT” looks to anchor tag the web, February 16, 2019 By GABRIEL BRANGERS"
[ch-stt-gh]: https://github.com/bokand/ScrollToTextFragment
  "Proposal: Scroll-To-Text using a URL fragment"
[ch-stt-news]: https://m.dailyhunt.in/news/india/english/91mobiles-epaper-mobiles/google+chrome+testing+scroll+to+text+feature+to+allow+users+to+share+link+to+specific+section+on+a+page-newsid-108928476
  "Google Chrome testing 'Scroll to Text' feature to allow users to share link to specific section on a page, 16 Feb 2019, by 91 Mobiles."

[End]: //.
