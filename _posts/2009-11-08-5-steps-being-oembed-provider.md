---
layout: post
title:  5 steps to being an oEmbed provider
date:   2009-11-08 02:14:00
categories:
tags:   oEmbed
x-source: http://freear.org.uk/content/5-steps-being-oembed-provider
---


In the words of [the specification][oembed],

> “oEmbed is a format for allowing an embedded representation of a URL on third party sites.
> The simple API allows a website to display embedded content (such as photos or videos) when
> a user posts a link to that resource, without having to parse the resource directly.”

oEmbed is now provided by or for many web 2.0 and multimedia sites including YouTube, Flickr, Slideshare, Revion3, Vimeo, Viddler, nfb.ca, Wordpress.com...

I've recently been implementing experimental oEmbed servers or "providers" for a number of
[projects][] I'm [associated][] with.


[![Sweet Heaven, by Jacqui Mould - on Flicker][img-2]][flic-2]

> "oEmbed is like a [box of chocolates][box]."


So here are my five suggestions for becoming a provider:

1. Read the specification at oembed.com, experiment with the services at [oohembed.com][]
and/or using jquery-oembed (or modules/extensions for Drupal, Django...)

2. Plan and implement your oEmbed service, for example,

    ```
    http://example.com/oembed?format=json&url=http%3A//example.com/video/UnIqUe_Id
    ```

3. Test, for example using jquery-oembed. Ensure that you follow accessibility best
practice – [don't use][] `<param name="wmode" value="opaque"/>` (or transparent)
in any Flash embed code (this hides the Flash object entirely from screen readers) and provide a meaningful title.

4. Add 2 lines to the `<head>` element of your HTML pages, for example, for the page, `http://example.com/video/UnIqUe_Id`, add:

{% highlight 'html' %}
<link rel="alternate" type="application/json+oembed" title="My example"
  href="http://example.com/oembed?format=json&url=http%3A//example.com/video/UnIqUe_Id" />
<link rel="alternate" type="application/xml+oembed" title="My example"
  href="http://example.com/oembed?format=xml&url=http%3A//example.com/video/UnIqUe_Id" />
{% endhighlight %}

5. Spread the word and blog about it, with documentation and examples. In time, you may be listed at oohembed.com!

I'd love to hear your experiences with oEmbed.


> Updated with a pretty photo -- 16 October 2015.


[oembed]: http://oembed.com/
[oohembed.com]: http://oohembed.com/
[jquery-oembed]: http://code.google.com/p/jquery-oembed/
[projects]: http://cohere.open.ac.uk/
[associated]: http://maltwiki.org/#!__BROKEN_LINK__ "Broken link :(."
[box]: https://en.wiktionary.org/wiki/life_is_like_a_box_of_chocolates
    '" Life is like a box of chocolates " on Wiktionary'
[don't use]: /2009/09/07/flash-mode-considered-harmful.html
[was:don't use]: http://freear.org.uk/node/22
[future]: http://jeffreydonenfeld.com/blog/2011/09/using-oembed-for-dynamic-futureproof-embedded-videos-and-photos/

[flic-1]: https://flickr.com/photos/trombone65/14190899015/
    '"132/365 – sweet passion / süße Leidenschaft" – by trombone65 (PhotoArt Laatzen) – Flicker (CC-by-nd)'
[img-1]: https://c2.staticflickr.com/6/5508/14190899015_524ba73a9e_z.jpg
[flic-2]: https://flickr.com/photos/jacqui_newton/7124835767/
    '" Sweet Heaven ", by Jacqui Mould - on Flicker (CC-by-nd)'
[img-2]: https://c2.staticflickr.com/8/7210/7124835767_f99c03eaf9_z.jpg


[End]: end
