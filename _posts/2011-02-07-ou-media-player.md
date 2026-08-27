---
layout: post
title:  OU media player project
date:   2011-02-07 14:09:00
x-created: 2015-12-03 19:23
tags:   accessibility  Flash  HTML5  maltwiki  multimedia  oembed  ou  video
x-source:  http://freear.org.uk/content/ou-media-player-project
x-comment-cnt: 5
x-comments:
  - id: x
    by: html5 (not verified) | Mon, 26/03/2012 - 08:39
    text: Great stuff - and a brilliant blog….. just one thing, did you notice how the Google logo reacted when you ‘shook’ the window?
  - id: y
    by: Steve Lee (not verified) | Thu, 10/02/2011 - 09:16
    text: >
      No problem Nick - I should have emailed you to point it out.

      Hmm, Silvia Pfeiffer points out that while we wait for full WebVTT support, ...
---


Tony [Hirst has just blogged][hirst] about the Office for Disability Issues new
accessible media player AKA the "Most Accessible Media Player on the Web".
Both he and [Will Woods][] have alluded to work that The Open University is undertaking.
I thought I'd fill in the gaps.

The OU is at the start of a 6 month development to create a multimedia player that (we hope):

1. Will be an "attractive" player that the average designer/ blogger would be happy to use on their site.
2. Can be used in a variety of contexts -- our Moodle-based virtual learning
  environment, OpenLearn, OU-Drupal sites, blogs, Cloudworks...
3. Will deliver content mostly from the OU podcast site in the contexts mentioned above.
4. Will be accessible to users with disabilities - both in terms of control,
  and display of alternatives like transcripts and captions.
5. Usable on a variety of devices, including mobiles and tablets.
6. Will be delivered in a maintainable way.

Taking points 1 and 2 together, my personal mantra is "_If its accessible,
but not attractive then we haven't succeeded_".
So we are talking unobtrusive accessibility.

Taking the final point regarding delivery. The main method for embedding the player,
will be using a REST-ful web service, based on the [oEmbed specification][].
This service is available for many providers, including YouTube, Flickr, Slideshare, Vimeo...
See the [oohEmbed][] and [Embedly][] sites.
This will be transparent to the end-user and the author of content.
An author on a Wordpress blog will merely type something like:


{% highlight 'xml' %}
[embed] http://podcast.open.ac.uk/pod/mst209-fun-of-the-fair#079b8e506c [/embed]
{% endhighlight %}


The blog software will handle the rest. oEmbed is used or consumed by various
software/sites, including [Wordpress 2.9 onwards][], the [new Twitter][],
Ars Technica, StatusNet, and our own Cloudworks/ [CloudEngine][].
Many multimedia providers can be plugged in with little effort, a great benefit, so
authors will be able to embed from YouTube, Flickr and OU-podcast in the same way.
The promotion of a service-based approach does not preclude bloggers from using conventional embed codes/snippets.

The player itself will probably be Flash-based on desktops, and will fallback to HTML5 for tablets and mobiles. This is dictated by the encoding infrastructure on the podcast site, and the current state of the various video and audio codecs.

The controls/ buttons for the player will be HTML and Javascript-based, not Flash-based.
This follows examples like Chris Heilmann's [Easy YouTube player][], and builds
on my own [MALT Wiki prototype][] (_MALT Wiki is used by Cloudworks, and is oEmbed-based_).

We will be using third-party Flash and Javascript components where possible, and implementing the player and web service.

As to the evaluations that we have done. Back in March 2009, I evaluated players
including YouTube, Easy YouTube, jwPlayer, NCAM's ccPlayer and Flowplayer.
See [slide 18 of this presentation][slide 18] and [this spreadsheet][].
I tested with screen readers (JAWS, and [NVDA][]), and also compared APIs
for the players (_how "scriptable" they were_), licenses and so on.

As part of the current player project I wrote a design brief with screen shots of various existing players outside and inside the OU.
This included YouTube, EasyYouTube and the ODI media player -- a late addition.
It was not an evaluation per se.
It instead presented what was out there -- we may want to use some features, we may not.

In the current project plan, we have built in accessibility testing, using expert evaluation.
And we hope to do testing with real users too, using the [Jennie Lee laboratories][].

I'll conclude by saying that we hope the player will be accessible and will meet the needs of authors/ bloggers and end users.
I don't think we will claim to be "_the most accessible player on the Web_".
After all that sets you up for a world of criticism!

Feedback and ideas are as ever welcome.


[Hirst]: http://blog.ouseful.info/2011/02/06/the-most-accessible-media-player-on-the-web/
[Will Woods]: http://technocrapy.wordpress.com/2011/02/06/are-waterfalls-agile/
[oEmbed specification]: http://oembed.com/
[oohEmbed]: http://oohembed.com/
[Embedly]: http://api.embed.ly/
[Wordpress 2.9 onwards]: http://codex.wordpress.org/Embeds
[new Twitter]: https://twitter.com/noradio/status/24790949420
    "'@anildash many of them do use OEmbed, yes.' by Marcel Molina, 9:52 PM - 17 Sep 2010 (CA, USA)"
[CloudEngine]: http://getcloudengine.org//wiki/oEmbed
[Easy YouTube player]: http://icant.co.uk/easy-youtube/?http://youtube.com/watch?v=uBdwM7oQivk
[MALT Wiki prototype]: http://maltwiki.org/
[slide 18]: http://slideshare.net/nfreear/malt-wiki-techshare2009/18
[this spreadsheet]: http://spreadsheets.google.com/pub?key=0AgJMkdi3MO4HdFNDdElzUUhMejAzaWZoMFJ0emw3a0E&hl=en_GB&single=true&gid=1&output=html
[NVDA]: http://nvda-project.org/
[ODI media player]: http://www.officefordisability.gov.uk/inclusive-communications/channels/odi-accessible-media-player.php
[Jennie Lee laboratories]: http://jennielee.open.ac.uk/labs/


[End]: end
