---
layout: post
title:  oEmbed isn't dead – here's OU Embed!
date:   2013-04-23 11:22:00
categories:
tags:   [ oEmbed, OU, ouplayer, IET-OU ]
x-source: http://freear.org.uk/content/oembed-isnt-dead-heres-ou-embed

x-slug: 2013-04-23-oembed-isnt-dead-heres-ou-embed
---


Despite appearances, I argue that oEmbed is alive and kicking.

Brian Mearns has put together a [document describing some concerns around the oEmbed standard][doc],
partly around security. It's generally very useful.
The discussion on the [oEmbed Google Group][grp] goes onto whether [oEmbed][] is dead, and what the alternatives are.

I welcome the discussion, particularly the notes on alternatives.
However, I'll add my voice to that of Sean Creeley, CEO of Embed.ly, and say that yes the specification has languished (though it is on Github – this should help keep it alive). But oEmbed isn't dead!

I concur that the benefits of oEmbed include:

* Simplicity,
* Wide adoption,
* Maleability,
* The ability for site X to provide a "proxy" oEmbed service on behalf of site Y,… for embedding in site Z.

I also second Sean's wish list.

I should also probably apologize and pick up on Ross' point that
"_Though there are some large implementations, new ones aren't really appearing…_".
So, I'm standing up to be counted…


### OU Embed

We've been developing an [oEmbed service here at The Open University][ou-embed] for several years.
We are using it as the vehicle to ease deployment of our [OU Media Player][], which is accessible (to those with disabilities), easy to embed (largely because of oEmbed), and OU branded.

OU Embed is also a vehicle to:

* Embed from and for research-based projects, for example [Cloudworks][], [CompendiumLD][] and [iSpot][];
* Quickly deploy embedding services, for example, for [visualizations on Scraperwiki][viz];
* Provide accessible alternatives;
* Experiment with HTML5, RDFa and so on.

OU Embed is written in PHP, based on CodeIgniter, and I hope to release (most of) it open-source in due course.


### Conclusion

Having thought some more, I suggest that precisely because the oEmbed specification is simple, it is already widely deployed, it works "under the hood", and people can do what they want with it (it just works), there is perhaps the ''perception'' by stakeholders that we don't need to refresh the specification and deal with issues.

As the Google Group discussion reveals though, we need to both nurture oEmbed and ensure that it is seen to be alive.

### Useful links:

* [The oEmbed specification][oEmbed]
* [Specification source on Github][git]
* [Discussion on oEmbed Google Groups][grp]
* [Brian Mearns' document][doc]
* [oohEmbed.com ''proxy'' – merged with Embed.ly in 2011][oohEmbed]
* [Noembed.com proxy – very useful][noembed]
* [Embed.ly proxy – good service, large][embedly]
* [Iframely proxy – a new player, v. interesting][iframely]
* [OU Embed proxy / Embed.open.ac.uk – small, research-based][ou-embed]

* <http://benalman.com/projects/jquery-postmessage-plugin>

> Update: [Open Media Player][] has been released as an open source project -- October 2015.


[doc]: https://sites.google.com/site/embedlink/home
[grp]: https://groups.google.com/forum/?fromgroups=#!topic/oembed/fBpSdT-R_14
[oEmbed]: http://oembed.com/
[git]: https://github.com/iamcal/oembed
[oohEmbed]: http://oohembed.com/
[noembed]: http://noembed.com/demo
[embedly]: http://embed.ly/providers
[iframely]: http://iframe.ly/pageinfo?url=http%3A%2F%2Fvimeo.com%2F53156464

[ou-embed]: http://embed.open.ac.uk/demo/ouldi
[OU Media Player]: http://mediaplayer.open.edu/ 'Now: " Open Media Player "'
[Open Media Player]: http://iet-ou.github.io/open-media-player/
[Cloudworks]: http://cloudworks.ac.uk/tag/view/oEmbed
[CompendiuLD]: http://compendiumld.open.ac.uk/
[iSpot]: http://ispot.org.uk/
[viz]: http://embed.open.ac.uk/demo/ouldi?url=https%3A//views.scraperwiki.com/run/cloudworks_mindmap


[End]: end
