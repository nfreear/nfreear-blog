---
layout: post
title:  Sign-machine rebooted
date:   2017-05-22 17:23:00Z
tags:   NPM  accessibility  javascript  e-learning
## permalink: /sm/
x-footer-script: https://unpkg.com/sign-machine@2.1.0-beta/src/sign-machine.js
x-footer-script-01: https://unpkg.com/sign-machine@2.1.0-beta#._.js
og-desc: A Javascript to embed sign-language animations — finger spell your text. Currently it supports British Sign Language.
og-image: https://c1.staticflickr.com/5/4202/33989105994_cf11c09d5d_n.jpg
og-image-alt: The sign-machine widget embedded on a web-page.
---


Way back in 2008, I had a new baby daughter, and I'd just joined the
[Institute of Educational Technology][iet], after a couple of rewarding years in
the VLE team at The Open University (_Learning and Teaching Solutions, LTS_).

I can't remember more context ... Suffice to say, I came across some animated GIFs
illustrating how to finger-spell using British Sign Language (_BSL_).
Some sites I looked at are [ian.barnsley][ar-jas-a] and [BritishSignLanguage.com][ar-brit-a].

I put together some PHP and Javascript code to use these GIF images to do finger-spelling _on demand_.
You can see the result at [`freear.org.uk/sign`][php].
As well as the core, there was a Javascript bookmarklet, and Greasemonkey user script.

I moved on to other projects, and the idea languished.
To preserve the code, I put it into [Bitbucket][] in 2011.

Press `Sign` to get started:

<div
  id="id-sign-machine"
  data-sign-machine='{ "initial": "Hi. I&apos;m sign-machine.", "dev": 0 }'
  >[ sign-machine requires Javascript. Is it disabled in your browser? ]</div>


I'm happy to say that I've revived the [`sign-machine` project on GitHub][gh].
Version 2.x is a complete re-write, without PHP, and with fresh Javascript.
It uses the same animated GIF images, and currently supports British Sign Language.

It can be embedded on a site with just three lines of HTML — the snippet uses jQuery 2.2.4:


```html
<div id="id-sign-machine"> Javascript is required. </div>

<script src="https://unpkg.com/jquery@2.2.4/dist/jquery.min.js"></script>
<script src="{{ page.x-footer-script }}"></script>
```

There are more [usage examples][usage].
You can also try with a [`sign` parameter in the URL][query].

I'd love some feedback on this idea.
Is it sane, and can you think of potential uses?
Would you like to see it in your language?
American/ French/ Swedish ... Sign Language?
Would you like it extended beyond finger-spelling?


Please feedback via the [comments](#comments), to [@nfreear on Twitter][], and [on Facebook][].


[query]: ./sign-machine.html?sign=Good%20evening.

[iet]: http://iet.open.ac.uk "Institute of Educational Technology, The Open University."
[php]: http://freear.org.uk/sign/?text=Hello%21
[gh]: https://github.com/nfreear/sign-machine
[usage]: https://github.com/nfreear/sign-machine#usage
[legacy]: https://github.com/nfreear/sign-machine/tree/master
[Bitbucket]: https://bitbucket.org/nfreear/sign-machine
[@nfreear on Twitter]: https://twitter.com/nfreear
[on Facebook]: https://facebook.com/nickfreear

[jas-email-1]: jbarnsley_uk@hotmail.com
[jas-email-2]: Jas@foot-print.demon.co.uk
[ar-jas-ind]: http://web.archive.org/web/20081026154327/http://homepage.ntlworld.com:80/ian.barnsley/bslsite/bslindex.html
[ar-jas-a]: http://web.archive.org/web/20081026154317/http://homepage.ntlworld.com/ian.barnsley/bslsite/a.html
  "Animated GIF, BSL signed 'A', Ian Barnsley, c.2008."
[ar-brit-ind]: http://web.archive.org/web/20081204101007/http://britishsignlanguage.com/
[ar-brit-a]: http://web.archive.org/web/20081226024433/http://www.britishsignlanguage.com:80/words/index.php?id=3
  "BSL signed 'A', BritishSignLanguage.com, c.2008."

[End]: //
