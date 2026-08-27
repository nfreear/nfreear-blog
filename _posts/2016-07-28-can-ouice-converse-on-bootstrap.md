---
layout: post
title:  Please can OUICE converge on Bootstrap, soon?
date:   2016-07-28 11:45:00
x-created: 11:45
x-published: about 12:30(!)
tags:   [ OU, IET-OU, design, webdev ]
---


Some years ago (I should research when), bright people at The Open University
created a CSS-based design for OU-branded sites (public sites, and our
virtual learning environment/VLE). And, they named it "_OUICE_".

And, they saw that it was good… And, milk and honey flowed … And… (_you get the gist_)

[![OUICE screen shot][ouice-img-1]][ouice]

Fast forward to 2016, and one of my colleagues, [Sam Leicester][], is working
hard on OUICE version 4, which is being used on The Open University's new
super-faculty web sites (as part of our latest re-structure, _sigh_).
Sam, and his design and developer colleagues are hard-working and good at their jobs
– the result will undoubtedly be a powerful, responsive, mobile-friendly system.
He said, "_you should give it a try_", and "_it's got lots of powerful features_".
I'm afraid I wouldn't have come across as very enthusiastic (_sorry Sam!_).
Why?

Well, my current Web development project is [Applaud][].
Its OU-branded, an internal strategic project. _Seems to tick all the boxes…_
The problem from my standpoint is that [OUICE][] isn't [Bootstrap][].
My approach for this project has been to use the OU's page-header, and its
associated CSS stylesheets and Javascripts, and then to use Bootstrap for the
other 80% of the page (editing the responsive "_break-points_" for Bootstrap,
to match the OU header's mobile/tablet break-points).
(_I can imagine design purists gasping in horror!_)

I'm doing this because I know Bootstrap (fairly well), I know I'll be using it
on future projects (OU branded or not), my colleagues use it on their projects
(so we all have more chance of understanding each other's code_!_),
solid documentation, steady, incremental development …
(lot's of pluses).

Unfortunately, given our time-poor working environment, I don't have time to invest in learning about OUICE 3, or 4 or …
I'll learn the minimum I can, to solve my problems.
I have to use my time learning and developing October plugins, Laravel libraries,
learning Angular (another project), using Travis-CI to improve our QA … (_a long list_).
And, actually solving the problems of each individual project.
If I have any spare time, I would follow-up on the merge request I put in for
open-source library 'X', re-kindle my own projects, write more blog posts,
research new technologies, or a new language, or that course I've been meaning to …
(_another long list_).

[!['Time poor'][deviant-time-poor-img]][deviant-time-poor]

In short, and whether we like it or not, Bootstrap has become a _de-facto_ standard, much as jQuery has.

So, OUICE will continue to be used thoroughly by the small group of our developer
and designer colleagues working on the OU's core public web sites, it will be used
by our VLE developers (…?), but I suggest it will be used at a much more superficial
level by us developers/designers (quite a number of us), working on a wide variety
of strategic and externally funded (mostly not OU-branded) Web projects.

I'd like to suggest to colleagues that we work to _make OUICE 4.1 or OUICE 5 converge_,
so that it is built on Bootstrap. Put our efforts into a seamless experience
(for end-users and developers/designers) across the OUICE-Bootstrap boundary,
work out how to cope with the Bootstrap release cycle,
and concentrate on components that can sit on top of Bootstrap that are unique for the OU's needs.

_Now, tell me why I'm wrong!_


[Sam Leicester]: https://webhappens.co.uk/
[Applaud]: https://twitter.com/OUApplaud
    "Accrediting & Promoting Professional Learning & Academic Development – APPLAuD! A flexible route to HEA professional recognition by reflecting on teaching."
[Bootstrap]: http://getbootstrap.com/
    "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web."
[OUICE]: http://www2.open.ac.uk/about/ouice/v3.0/
    "The Open University has a set of online design patterns, components and templates so we can provide our users with a consistent user experience. We call this OU ICE. (v3)"
[Google 'time-poor' Labeled for noncommercial use]: https://www.google.co.uk/search?as_st=y&tbm=isch&hl=en&as_q=&as_epq=time+poor&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&tbs=sur:f
[deviant-time-poor]: http://dannichangirl.deviantart.com/art/Adventure-Time-Seven-Deadly-Sinsters-317198912
    "Time poor? 'Adventure Time: Finn and Jake shocked (Vector) by 100latino'. © Dannichangirl, on DeviantArt. [CC:by-nc]"
[deviant-time-poor-img]: http://img12.deviantart.net/724c/i/2013/270/3/9/adventure_time__finn_and_jake_shocked__vector__by_100latino-d6nlq2c.png#!_MEDIUM_
[ouice-img-1]: http://www2.open.ac.uk/about/ouice/v3.0/img/qa-chrome.png
    "OUICE screen shot. ©The Open University."
[ouice-img-not-used]: data:image/jpeg;base64,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

[End]: //end.
