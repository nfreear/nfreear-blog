---
layout: post
title:  Track OER and CaPRéT, one year on
date:   2013-11-19 22:02:00
categories:
tags:   [ analytics, OU, project, TrackOER ]
x-source: http://freear.org.uk/content/track-oer-and-capret-one-year
---


Its just over a year ago (19 October 2012), that the JISC/HEFCE-funded
[Track OER rapid innovation project][trackoer] finished.
You can [view the grand finale videos on the project blog][view].

We've recently had some fresh interest in the project, so I thought I'd take a look at the recent data.


## Background

We used and extended [CaPRéT][] as one of two strands of work in the Track OER project.
We experimented with [Piwik][] and Google Analytics as alternative analytics back-ends,
in place of the custom Node.js/ MongoDB/ Hummingbird one originally developed for CaPReT.
This was because:

1. The Open University staff who needed and wanted access to the analytics data were (are) already more familiar with Google Analytics;
2. Piwik, written in PHP with MySQL is easier to install and maintain by developers at The OU (including myself) –- this was important given the short time-frame of the project;
3. Piwik and Google Analytics are more flexible –- we could use them for the CaPReT strand, and the other strand in Track OER – tracking downloads;

You can see the CaPReT-Google Analytics side-block on the bottom-left in the Bridge to Success OER content on The Open University's LabSpace site.

We use Google Analytics event tracking, and GA custom reports –- see “Useful links”

![CaPReT-GA "copy" events versus countries][img-1]


## Analytics data

One year on, Google Analytics is still busily collecting data…

* 294 “_copy_” events across the [Bridge to Success content on LabSpace][b2s] this month
  (_19 October to 18 November 2013_);
* 1,937 “copy” events across B2S during the past 15 months (1 September 2012 to 18 November 2013);
* In the past month, there have been copy events from the Argentina, Armenia and Australia, through Ethiopia, India and Indonesia, to the United Arab Emirates, the UK, USA, Vietnam and Zimbabwe –- every continent appears to be represented, except Antarctica(!);
* We/ Google Analytics can’t always identify the institution that “copy” events came from,
but some that we can identify are: “_abu dhabi company for onshore oil operations_”,
“Adithya Inst. of Technology”, “_cape peninsula university of technology_”,
“new brunswick department of education”, “_rutgers university_” and “university of durham”.

Additional [screenshots are in this Google Doc][gdoc] (_temporary measure -- should be in Flickr or similar..._).

You can find more background information on the [Track OER project blog, on Cloudworks][trackoer].

Developers can [browse and fork the open source code on GitHub][github].

By the way, much of the development occurred in the [Institute of Educational Technology][iet]
with input from colleagues in Learning and Teaching Systems (now IT) and the [Open Media Unit (OMU)][].

---

## Funding

> Funding has been received from JISC for a new project, TRACK OER.
> This is a rapid innovation project with £25,000 of funding over 6 months starting 19 March 2012.
> The project will extend ways to track resources as they are transferred to other systems such as VLEs or repositories, or if they are cut-and-paste copied.
> Two separate prototypes are being extended, one developed in partnership with OLnet fellow, Scott Leslie of BCCampus in Canada, and the other by Brandon Muramatsu of MIT under an earlier JISC grant.
> The development work will be carried out by Nick Freear, Will Woods and Patrick McAndrew (PI) will also be involved.

* Source:  [IET-OU Wiki: IET March 2012][wiki] ([Search][]).


[img-1]: https://lh4.googleusercontent.com/iUMpMF6gW0y2nYxH1GmzukuUxRd40ypoooOAajfD_zhdj8zUY_QCPcpIDq4rm7z9boMZmSMW-KrP7JW1YOD8gFGQ540kNYTB8ZeCgtv605-lUD2K1jHdMQHuoA

[trackoer]: http://cloudworks.ac.uk/cloudscape/view/2399
[view]: http://cloudworks.ac.uk/cloud/view/6568
[CaPRéT]: http://capret.mitoeit.org/ "CaPRéT: Cut and Paste Reuse Tracking"
[Piwik]: http://piwik.org/
[b2s]: http://labspace.open.ac.uk/b2s
[gdoc]: https://docs.google.com/document/d/1BW50XT16J9LVhKveYRxfJ3bYnO4DXW2mNdiZ5KXtS7I/edit#
[github]: https://github.com/IET-OU/trackoer-core
[iet]: http://iet.open.ac.uk/
[Open Media Unit (OMU)]: http://www.open.ac.uk/blogs/OpenMedia/

[wiki]: http://www.open.ac.uk/wikis/iet/IET_March_2012#New_Initiatives
[search]: https://google.co.uk/search?q=q=site:open.ac.uk/wikis/iet/+freear

[End]: end
