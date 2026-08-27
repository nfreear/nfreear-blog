---
layout: post
title:  Flash wmode considered harmful
date:   2009-09-07 08:21:00
categories:
tags:   accessibility  embed  Flash
x-source: http://freear.org.uk/content/flash-wmode-considered-harmful
x-comment-count: 6
x-comments:
  - id: 9
    by: antrix (not verified) | Wed, 21/10/2009 - 03:35
    subject: Regarding oohEmbed
    text: >
      Hi.

      Just found your post while looking through the referral logs of oohembed.com!
      I am no accessibility expert so I am definitely looking forward to your patches to oohembed regarding this wmode issue.

      Would the patch just amount to stripping the wmode parameter out of the embed code?
      If so, I can apply the patch myself one of these days.
  - id: 12
    by: nick | Mon, 01/02/2010 - 11:57
    subject: 1 line patch for Moodle etc.
    text: >
      Hi antricx,

      First, thanks for popping by, and apologies for not responding sooner.

      Yes to your question, the patch just involves removing the "wmode" parameter - I haven't yet created patches for oohembed etc.

      However, I've just created one for Moodle (a project I'm more familiar with).
      And I've been spreading the word where possible ;)

      Yours,

      Nick
---


Despite the emergence of the [`<video>`][video] element in HTML 5, Shockwave Flash
is still the _de-facto_ standard for publishing multimedia on the Web. Macromedia, and
now Adobe have improved the support for assistive technologies and software
interfaces like _Microsoft Active Accessibility (MSAA)_ within the Flash browser
plug-ins.  <!--more-->
And, it is now possible to create a video player in which all the controls
and status information are perceivable by screen reader users. So all the
challenges to do with Flash have been overcome, no problems? Wrong.


I [and others][] have uncovered what appears to be a [little publicised][] or
little known flaw that renders some of the "embed codes" displayed at sites like YouTube, Vimeo et al completely inaccessible.

![Screen shot, wmode = window - default, OK][img-1]

Recently I've been [evaluating Flash media players][eval] and I noticed that while
many players were fairly accessible, one was not at all. Initially I blamed the
media player itself, but then I noticed that the `wmode` parameter in it's embed
code was set to __opaque__. Further tests have revealed that anything but the default
value __window__ completely hides the Flash player from MSAA and therefore
screen readers. [Web Accessibility in Mind note this][webaim-1] as a technique to
hide decorative Flash. [Stephanie Sullivan has also written][sullivan] ([archive][arch-sull]) about this
(2nd to last paragraph), however I think the advice in these articles leaves
something to be desired. The Flash content of a page, for example when you embed
a movie in a blog post, is often not eye candy, it's the whole focus of the page.
And providing '_text-only_' alternatives in the blanket fashion suggested at
'_lessfussdesign_' is [often a bad idea][often] ([Archive][arch-tech]).

OK:

{% highlight 'html' %}
<object data="player.swf">
    <param name="wmode" value="window" />
    ...
{% endhighlight %}

Inaccessible:

{% highlight 'html' %}
    <param name="wmode" value="opaque" />
{% endhighlight %}
{% highlight 'html' %}
    <param name="wmode" value="transparent" />
{% endhighlight %}


My tips are to avoid setting the `wmode` parameter unless you absolutely have to
(that is, stick with the default value), and if you must, then provide a full
HTML/Javascript user-interface (that is, all buttons and status/progress
information). An example is Christian Heilmann's excellent [Easy YouTube][]
(`wmode` is not set to opaque/transparent in this case, I hasten to add).

![Screen shot, wmode = opaque - inaccessible][img-2]

I tested with [Inspect32][], part of the [Microsoft Active Accessibility kit][kit]
and the [NVDA screen reader][].

I'm currently working on fixes for the [oohEmbed][] [code][] ([also here][]) and
the Drupal [video filter][] [module][]. The premise for these fixes is that in at
least 90% of the cases where this code is used the default for `wmode` is acceptable.

> Feel free to comment on any other embed code or software which needs fixing –
and volunteer to submit fixes! (23 September 2009.)

Background: [Web Accessibility in Mind (WebAIM) – Flash techniques][webaim-2].



[video]: http://whatwg.org/specs/web-apps/current-work/multipage/video.html#video
[and others]: http://lessfussdesign.com/blog/2009/03/wmode-accessibility/ "lessfussdesign"
[little publicised]: http://google.com/search?q=wmode+accessibility
[eval]: http://slideshare.net/nfreear/malt-wiki-techshare2009/18#notesList
[sullivan]: http://communitymx.com/content/article.cfm?cid=e5141#!__BROKEN_LINK__ "Broken link"
[arch-sull]: http://web.archive.org/web/20150406194907/http://www.communitymx.com/content/article.cfm?cid=E5141
[often]: http://www.techdis.ac.uk/?p=3_8_9#!__BROKEN_LINK__ "Broken link :(."
[arch-tech]: http://web.archive.org/web/20060924084714/http://www.techdis.ac.uk/index.php?p=3_8_9
[Easy YouTube]: http://icant.co.uk/easy-youtube/?http://youtube.com/watch?v=QiuT0y0KR6I
[Inspect32]: http://theaccesspond.com/2009/03/26/using-inspect32-to-inspect-links-and-images-on-web-sites/
[kit]: http://microsoft.com/downloads/details.aspx?familyid=3755582A-A707-460A-BF21-1373316E13F0&displaylang=en
[NVDA screen reader]: http://nvda-project.org/
[oohEmbed]: http://oohembed.com/
[code]: http://code.google.com/p/oohembed/source/browse/app/provider/videoprovider.py#57 "oohEmbed source code"
[also here]: http://code.google.com/p/php-oembed/source/browse/trunk/YouTubeProvider.class.php "php-oembed code"
[video filter]: http://drupal.org/project/video_filter
[module]: http://cvs.drupal.org/viewvc.py/drupal/contributions/modules/video_filter/video_filter.module?revision=1.14&view=markup

[webaim-1]: http://webaim.org/techniques/flash/techniques.php#hiding
[webaim-2]: http://webaim.org/techniques/flash/

[img-1]: http://lh3.ggpht.com/_jU8d1WdVVKA/SpvKwXJWvlI/AAAAAAAAAxQ/szLhMnHSIu0/s512/WMODE_13.png
[img-2]: http://lh4.ggpht.com/_jU8d1WdVVKA/SpvKwuA-HlI/AAAAAAAAAxU/EEqGE6ic41U/s512/WMODE_22.png
