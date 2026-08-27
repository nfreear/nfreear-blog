---
layout: post
title:  MALT Wiki player with personalization mockup
date:   2009-10-12 13:04:00
categories:
tags:   [ accessibility, Flash, maltwiki, multimedia, oEmbed ]
x-source:  http://freear.org.uk/content/malt-wiki-player-personalization-mockup
x-comment-cnt: 0
---


[Wendy Porch][] and I presented an evaluation version of the
new [MALT Wiki player][] at Techshare, in [September][] ([arch][]).
Since then I've been busy with [other projects][], but I've now had time to produce a
mockup demonstrating personalization options and how I hope to get people to contribute.
This is based on my own thoughts and some interesting points raised by people
including [Jonathan Hassell][] during our presentation.

The screenshot below shows the player with a panel below starting "_About Learn about Moodle_".
The player works, while the [meta-data and personalization panel][meta] is mostly just a mockup.
This panel would be hidden initially, with a "show/hide" button.
And the thinking is that the panel would always be available, including when a
video is embedded in a third-party site like a blog, a virtual learning
environment or video sites like [YouTube][].

[MALT Wiki player, with mockup meta-data and personalization panel][demo]

[MALT Wiki player with personalization and meta-data mockup, on Flickr.][img-1]

Working from the top of the screen shot, down:

1. The page is designed to be contained in an `<iframe>`, however we still provide a meaningful title.
2. The player uses Flash and is built on [Flow player][].
I [evaluated various Flash players][eval], and Flow player is currently the best,
in terms of license ([GPL][]), the scripting and styling potential, the Flash and
Javascript plug-ins already available, and the "attractiveness" of the player.
3. Captions are displayed using Flow player's caption and content Flash plug-ins.
Captions can be individually styled (eg. colour, alignment), which is not possible in a number of other players, eg YouTube's.
4. The player controls are a HTML/Javascript plug-in for Flow player, created specifically for MALT Wiki.
They are inspired by Chris Heilmann's [Easy YouTube][] player.
The HTML consists of a list of buttons (`<li><input type="image"...>`), with a hidden volume edit box for screen readers -- this is fully keyboard accessible.
(Note, the user-interface is incomplete - a volume 'meter' and progress bar are missing.)
5. The start of the new panel. There are 4 links allowing people to contribute --
they can give feedback, create/edit alternative content (captions, audio description),
request alternatives (vote) and view comments.
6. Meta-data including attribution, copyright, license and disclaimer.
This makes people's contributions visible, and hopefully indicates that the owner of the
video is not necessarily responsible for the quality of captions, audio description etc.
7. A personalization form, allowing the user to set their preference for captions,
audio description etc., the 'theme' for the player and controls, and their language.
(The language control is the only one that works, and Simplified Chinese is chosen in the screen shot).

Obviously the mockup panel adds complexity, which is a concern.
The straightforward, uncluttered interface of the Easy YouTube player [has been shown][has]
to be usable by those with learning disabilities, as well as screen reader users and others.
Giving users the ability to drive the creation of accessible alternatives is a key focus of our project, so I am keen to test the work so far, to find out how usable the player is for a wider range of users.

I'll keep you posted!

[Learn about Moodle, on YouTube][Learn].

* [MALT Wiki, on Archive.org][arch]
* [MALT Wiki, code on GitHub][code]


[Wendy Porch]: https://twitter.com/wendyporch
[MALT Wiki player]: http://maltwiki.org/#!__BROKEN_LINK__ "Link no longer valid :(."
[arch]: https://web.archive.org/web/20101028101013/http://maltwiki.org/ "On Archive.org"
[code]: https://github.com/nfreear/maltwiki-org
    "@nfreear/maltwiki-org on GitHub. Multimedia Alternatives Wiki, including MALT Wiki media player"
[September]: https://slideshare.net/nfreear/malt-wiki-techshare2009#18 "MALT Wiki Techshare 2009, on SlideShare"
[other projects]: http://cloudworks.ac.uk/cloud/view/816 "Digital scholarship, by Patrick M."
[Jonathan Hassell]: http://www.hassellinclusion.com/
[wbbc]: http://wbbc.co.uk/blogs/bbcinternet/2009/10/bbc_iplayer_gets_more_audio_de.html#!_BROKEN_LINK_
    "BBC iPlayer gets more audio description, 2009 (by J. Hassell?)"
[meta]: http://maltwiki.org/frame?demo=1&url=http%3A%2F%2Fyoutube.com%2Fwatch%3Fv%3Dgrqt3HoLOIA#!_BROKEN_
     "Link no longer valid :(."
[YouTube]: https://flickr.com/photos/nfreear/4002168923/ "MALT Wiki player 'in-situ' on YouTube, on Flickr"
[demo]: http://maltwiki.org/frame?demo=1&url=http%3A%2F%2Fyoutube.com%2Fwatch%3Fv%3Dgrqt3HoLOIA#!_BROKEN_
    "This was an embedded demo - link no longer valid :(."
[img-1]: https://flickr.com/photos/nfreear/4002168957/#!__EMBED_ME__

[Flow player]: http://flowplayer.org/
[eval]: https://slideshare.net/nfreear/malt-wiki-techshare2009/18 "Slide 18, MALT Wiki Techshare 2009, on Slideshare"
[GPL]: https://gnu.org/licenses/gpl.html "GNU General Public License, free software"
[Easy YouTube]: http://icant.co.uk/easy-youtube/
[has]: https://youtu.be/CwsDKaalgq8 "YouTube and Easy YouTube player, by @hiantonia, on YouTube"
[Learn]: https://youtu.be/grqt3HoLOIA "Elevator pitch for Moodle, by Nick Freear, on YouTube"


[End]: end
