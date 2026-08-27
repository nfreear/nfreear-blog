---
layout: post
title:  iSpot February 2015
date:   2015-02-23 15:30:00
categories:
tags:   [ drupal, ispot, OU, IET-OU ]
x-source: http://freear.org.uk/content/ispot-february-2015
x-gdoc: https://docs.google.com/document/d/1N61tN0pEssA-QOLkvR1uDojVZzRPf26-iXApXXQXq0U#
---


<!-- # iSpot blog post, 19 Feb 2015 -->

Greetings iSpotters! (This is a [similar post on our team blog][ltt-blog].)

I'm happy to say that this morning we made a number of significant bug fixes live on the iSpot web site.

Here's a roundup of what's changed...

First up, we've added a "Please wait" spinner to the add/ edit observation wizard. This disables buttons on the form while slow operations like uploading photos occur. We hope this will reduce or eliminate the incidence of duplicate observations. This is a situation where we're eliminating a probable cause of the bug (duplicate observations), which may reveal further causes. In which case it will require further fixes. Time will tell.

![][img-1]

([Embedded image courtesy of Chester Zoo](https://flickr.com/photos/chesterzoo/2385234830/))

Bear in mind that slowness in the add observation wizard can be caused by slow networks and low bandwidth. Something that is outside our control.

We've tested the spinner across a range of devices. In the Chrome browser on iOS (iPads, iPhones), the spinner will not appear, but the text "Please wait" will. A known issue. All other device/ browser combinations appear to work as expected.

Next, we fixed the peculiar "1970" date that was appearing if the first photograph used in the add observation wizard contained no [EXIF data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format). (For those of you who are interested, [you can read](https://en.wikipedia.org/wiki/Unix_time) why the erroneous date was the 1st January 1970...)

There was another date-related bug, namely dates "disappearing" when you went back to edit an observation or project. This was a puzzler, however in the end the fix involved updating [the third-party date module](https://drupal.org/project/date) that iSpot employs. Job done!

Some strange text was appearing at the bottom of the add interaction wizard - on the location step. This turned out to be "debug" text (stuff added by developers to help them solve a problem). It took a little while to find where the text was being introduced. A fairly straightforward fix once we'd found the cause.

Hopefully, all this will help us make the most of Richard Greenwood's work on the add-observation wizard.

We updated the Twitter link in the page footer, to use [@iSpotnature](http://www.twitter.com/iSpotnature).

Finally, we've removed extraneous and commented-out HTML markup from Richard Lovelock's excellent Bootstrap-based theme. This shaves some kilobytes off each page request, and should provide a small performance boost, particularly on slow connections.

So, what do we have to look forward to?

Our performance guru, Greg, is still ironing out issues with the planned upgrade of the iSpot database to [MySQL 5.7](http://dev.mysql.com/doc/relnotes/mysql/5.7/en/). This will provide us with a significant feature called "row-level locking" (in place of current table-level locks), which will significantly reduce a bottle-neck and improve performance. Our challenge is to maintain the geo-spatial database capabilities that iSpot requires, while making the most of feature improvements.

We've worked out the cause of the "missing" location title auto-complete options for our southern African cousins. The problem stems from significant differences between the global and ZA iSpot sites. There are data and even tables that aren't present in the legacy ZA site, because it only contained one community and species dictionary. We think we'll need significant down-time to fix this issue (a number of hours), so we're discussing how best to tackle this while minimizing disruption.

That's all for now. I hope that these fixes help you enjoy iSpot and reduce the frustrations.

Thank you for your patience. And for your enthusiasm -- it's what makes the iSpot community tick!

Yours,

Nick

(The [iSpot](http://www.ispotnature.org/) team)

(This is a [similar post on our team blog][ltt-blog]).



[ltt-blog]: http://www.open.ac.uk/blogs/LTT_IET/?p=62
[img-1]: https://lh3.googleusercontent.com/wewpQU0Qys_pc959az4b0HBLZTLM8eYctwIjqUqdNGcyZuj2HyxRQd-R1Hcb5sb_cqadNf4JfyirrXZWMT0F855wQ7f9f308l1H1gfvq-rUchBSJjJavRAotxcOIKxC_qFY0ie4

[End]: end
