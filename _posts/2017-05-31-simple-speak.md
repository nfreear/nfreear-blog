---
layout: post
title:  Simple-speak, voiceFamily
date:   2017-06-13 21:00:00Z
x-created:   2017-05-31 19:00
tags:   NPM  accessibility  javascript  e-learning
og-desc: With the evolution of HTML5 and the Web Speech API, it's the ideal time to develop an easy to integrate Javascript library - enter 'simple-speak'.
og-image: https://c1.staticflickr.com/5/4012/34870007024_e189009037_b.jpg
og-image-00: https://unpkg.com/simple-speak@1.2.0-beta/style/simple-speak.png
og-image-alt: simple-speak widget embedded on a web-page.
x-footer-script: https://unpkg.com/simple-speak@1.3.0-beta#._.js
x-embed-url:  https://cdn.rawgit.com/nfreear/simple-speak/1.3.0-beta/embed/?
x-get-voices: https://cdn.rawgit.com/nfreear/simple-speak/1.3.0-beta/test/get-voices.html

last_updated: 2017-07-01
changefreq: daily
priority: 0.9
---


I've been continuing with the burst of activity that led to the [gaad-widget][],
and a re-booted [sign-machine][].
_(In the case of `sign-machine`, it was desirable to produce a quick prototype, then judge the reaction, if any.)_

Ever since I worked for a speech technology company ([Aurix][]), then
discovered screen readers, I've been interested in and fascinated by speech synthesisers.

When [I wrote a book on Moodle][book], one of the plugins I developed
[enabled speech synthesis in Moodle][mdl-p].
Unfortunately, the web services that it relies on seem to no longer be avilable,
and it has languished. <!-- .. I haven't had the time to maintain that plugin -->

I'm happy to say that the Web has moved on since then.
With the evolution of HTML5, we now have the [Web Speech API][w3c],
implemented in [most modern browsers][caniuse].
So, it's the ideal time to develop an easy to integrate Javascript wrapper
around the API — enter [simple-speak][npm].


<div class="demo">

<label>Speech input <input id="id-simple-speak" value="Hello. I'm simple-speak!"></label>

<div data-simple-speak='{ "voiceFamily": "Google UK English Female, Microsoft Anna - English (US), Kathy" }'></div>

</div>

It can be embedded on a page with 3 lines of HTML — including jQuery
(thanks to [unpkg][] and [RawGit][]):

```html
<div id="id-simple-speak"> Hello. I'm simple-speak. </div>

<script src="https://unpkg.com/jquery@2.2.4/dist/jquery.min.js"></script>
<script src="{{ page.x-footer-script }}"></script>
```

The synthesiser can also be embedded via an `<iframe>`, and depending on
the capabilities of the browser, can speak in different languages.
(I haven't yet started to internationalize the user-interface.)
Here's an example in Spanish:

<div class="demo">

<iframe class="simple-speak-ifr" title="simple-speak" src=
  "{{ page.x-embed-url }}lang=es-ES;q={{ 'Buenos días. ¿cómo estás?' | cgi_escape | replace: '+', '%20' }}"
></iframe>

</div>

And, the source code for the above example:

```html
<iframe class="simple-speak-ifr" width="100%" height="75" src=
  "{{ page.x-embed-url }}lang=es-ES;q={{ 'Buenos días. ¿cómo estás?' | cgi_escape | replace: '+', '%20'  }}"
></iframe>
```

Here's a Mandarin Chinese synthesiser, in an `<iframe>`:

<iframe class="simple-speak-ifr" title="simple-speak" src=
  "{{ page.x-embed-url }}lang=zh-CN;q={{ '你好阿姨' | cgi_escape | replace: '+', '%20' }}"
></iframe>

### voiceFamily

A useful feature of `simple-speak` is the `voiceFamily` configuration property.
This property behaves a bit like [`font-family`][] in CSS, allowing an ordered,
comma-separated cross-platform list of synthesis voices to be listed.

In the following example, the synthesiser uses a Google voice on the Chrome browser,
falls back to a Microsoft voice on various browsers on Windows,
then falls back to a generic `female` voice if the first two options aren't available.

```html
<div data-simple-speak=
  '{ "voiceFamily": "Google UK English Female, Microsoft Anna - English (US), female" }'
></div>
```

So, in the same way as a designer lists a range of fonts available across different platforms,
you can list your preferred and fall-back voices.

```css
body {
  font-family: Helmet, Freesans, Helvetica, Arial, sans-serif;  /* CSS style: BBC */
}
```

View and contribute to this [spreadsheet of available voices][compat] ([get-voices][]).

### Use cases?

I'd love your ideas for how to harness the power of speech.
Some possible use cases for `simple-speak`:

1. As a component of online learning tools. For example, a re-boot of the [Moodle SimpleSpeak][mdl-p] [filter plugin][gh-mdl],
2. A site widget (a bit like [Google's translate your site service][gtrans]),
3. A browser extension,
4. An updated synthesiser for an '_in-browser_' screen-reader, such as [WebAnywhere][].
  ([GitHub][gh-wa])
  _(Currently the screen-reader appears to be broken — a real pity.)_


`simple-speak` is available via the [NPM registry][npm] and [GitHub][].

Go play!
And, please feedback via the [comments](#comments), to [@nfreear on Twitter][], and [on Facebook][].

## Update

### Spell me

15 June 2017 ~ I'm working on a spelling mode &hellip; <!-- It's not yet released, but here's a cheeky preview: -->

1 July 2017 ~ version [1.3.0 (beta) is released][rel].
It features a spelling mode, and triggers a custom message each time it starts to speak a phrase:

<iframe class="simple-speak-ifr" aria-label="Speech synthesis" src=
  "{{ page.x-embed-url }}mode=spell;rate=0.9&q=Spell%20me!"
></iframe>

Here's the HTML `<iframe>` source for the above spelling widget (`mode=spell`):

```html
<iframe class="simple-speak-ifr" aria-label="Speech synthesis" src=
  "{{ page.x-embed-url }}mode=spell;rate=0.9&q=Spell%20me!"
></iframe>
```


<!--
<style> img[ src *= svg ] { border: 1px solid #ccc; width: 160px; } </style>

![Test SVG][tts-icon]
-->

[@nfreear on Twitter]: https://twitter.com/nfreear
[on Facebook]: https://facebook.com/nickfreear

[npm]: https://npmjs.com/package/simple-speak
[GitHub]: https://github.com/nfreear/simple-speak
[rel]: http://github.com/nfreear/simple-speak/releases "Release notes / changelog"
[gh-mdl]: https://github.com/nfreear/moodle-filter_simplespeak "GitHub"
[mdl-p]: https://moodle.org/plugins/view.php?plugin=filter_simplespeak "Moodle plugins page"
[RawGit]: https://rawgit.com/
  "Content delivery network (CDN); serves Git files with the correct mime-type."
[unpkg]: https://unpkg.com/ "unpkg is a fast content delivery network for everything on npm."
[WebAnywhere]: http://webinsight.cs.washington.edu/papers/webanywhere-html/
  "'WebAnywhere: A Screen Reader On-the-Go' (2008) Bigham, Prince and Ladner, University of Washington."
[gs-wa]: https://scholar.google.com/scholar?q=WebAnywhere%3A+A+Screen+Reader+On-the-Go&
[gh-wa]: https://github.com/CMUBigLab/webanywhere
[wa]: http://webanywhere.cs.washington.edu/beta/
[gtrans]: https://translate.google.com/manager/website/
[aurix]: http://oaisys.com/aurix.aspx "Aurix, formerly '20/20 Speech', now part of OAISYS."
[ar-2020]: http://web.archive.org/web/20030207005542/http://www.2020speech.com:80/
[`font-family`]: https://developer.mozilla.org/en/docs/Web/CSS/font-family
[w3c]: https://dvcs.w3.org/hg/speech-api/raw-file/tip/webspeechapi.html
  "Web Speech API Specification (W3C). Editor's Draft: 6 June 2014."

[book]: https://amazon.co.uk/Moodle-Teaching-Year-Beginners-Guide/dp/1849513287
  "Moodle 2 for Teaching 4-9 Year Olds Beginner's Guide, by N Freear (Packt)"
[caniuse]: https://caniuse.com/#feat=speech-synthesis "Check browser compatibility (caniuse)"
[compat]: https://docs.google.com/spreadsheets/d/1i3Czp0nGnI-a5gSJbLv3RLLoK0JWZBvr0L4XVna8OZU/#gid=0
  "Browser compatibility tests; count of available voices (Google Docs)"
[stats-wp]: https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables
[stats-3c]: https://www.w3counter.com/globalstats.php#!-April-2017
[trend-3c]: https://www.w3counter.com/trends

[x-github]: https://github.com/nfreear/simple-speak/blob/master/build/simple-speak.js

[tts-icon]: https://cdn.rawgit.com/nfreear/simple-speak/1.2-beta/style/text-to-speech-icon.svg
[icon-tts-src]: https://thenounproject.com/search/?q=speech%20synthesis&i=357035 "tts"
[icon-mic]: https://thenounproject.com/search/?q=speech%20synthesize&i=727681 "microphone"

[get-voices]: {{ page.x-get-voices }} "Get voices test page"
[gaad-widget]: {% post_url 2017-05-14-gaad-widget %} "'Global Accessibility Awareness Day' — Javascript widget."
[sign-machine]: {% post_url 2017-05-21-sign-machine %} "Sign language Javascript widget."

[End]: //
