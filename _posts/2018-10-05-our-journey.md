---
x-csp-disable: true
layout: post
title:  our-journey
date:   2018-10-05 13:32:00Z
tags:   [ "open source", OU, javascript, accessibility, IET-OU, project ]
og-desc: Our Journey is an interactive online tool to chart the highs and lows of student journeys.
og-image: https://github.com/IET-OU/our-journey/raw/master/assets/screenshot-1.png
og-image-alt: our-journey — screenshot of the online tool.

last_updated: 2018-10-05
changefreq: daily
priority: 1.0
---

I'm happy to say that a week ago, my colleague [Tim Coughlan][tim] flicked the switch,
to publish the code for [our-journey][] as an open-source project.

_our-journey_ started off as a [paper-based game][download], to be used in workshops,
and developed by Tim, [Kate Lister][kate] ([IET][]) and Glen Darby (_LTI Translation_).
(_You may be surprised at our track-record as a distance university, in using paper-based tools!_)

It allows a student to describe their journey through education, in terms of the highs and lows,
happiness, frustrations, stress and so on.
The student can chart not only the learning-related steps — writing essays, revising, group tutorials etc.,
but also _administrative_ steps like applying to university, and completing a _Disabled Students' Allowance (DSA)_ assessment, for example.

This can assist the student, tutors and support staff to work out where a problem might be,
and how to intervene to ensure success.
It has a firm [research][oro]-[based][oro-2] foundation.
<!--([Coughlan & Lister, 2018][oro]; [Coughlan, Ullmann & Lister, 2017][oro-2])-->

[![Screenshot of the online tool][image]][our-journey]

The paper-based game has been turned into [an online activity][tool], by Tim (_with help from me_).

We've worked to make the code straightforward to understand, and maintainable.
Also to make it portable.
We've also started providing options for students to share their journeys.

There is a lot still to do, and we'd love your feedback and contributions.

[Fork][gh] the [GPL][]-licensed code [on GitHub][gh].

### Update

_14 & 24 October 2018_: Added `<iframe>` embed, (uses `?zoom=65` URL parameter added in [v1.4.0][log]).
Version 1.4.0 contains many enhancements & fixes.

Note, colleagues have undertaken accessibility testing, and Tim (_and to some extent myself_) are fixing issues.

See: [Changelog][log].

<iframe src="https://iet-ou.github.io/our-journey/tool/?zoom=65&embed=1&demo=1" allowfullscreen ></iframe>

<!-- [yt][] -->

[tim]: https://iet.open.ac.uk/people/tim.coughlan
[kate]: https://twitter.com/KateMarburg
[iet]: https://iet.open.ac.uk/
  "Institute of Educational Technology (IET), at The Open University."
[our-journey]: https://iet-ou.github.io/our-journey/ "our-journey"
[download]: https://iet-ou.github.io/our-journey/download.html "PDF downloads"
[tool]: https://iet-ou.github.io/our-journey/tool/?demo=1
[gh]: https://github.com/IET-OU/our-journey "'our-journey' on GitHub"
[gpl]: https://github.com/IET-OU/our-journey/blob/master/LICENSE.txt
  "GNU General Public License v3.0 [GPL-3.0+]"
[log]: https://github.com/IET-OU/our-journey/blob/master/docs/CHANGELOG.md
  "Changelog / release notes"

[oro]: https://oro.open.ac.uk/54760/
  "Paper: The accessibility of administrative processes: Assessing the impacts on students in higher education. Coughlan & Lister, 2018."
[oro-2]: https://oro.open.ac.uk/48991/
  "Paper: Understanding Accessibility as a Process through the Analysis of Feedback from Disabled Students. Coughlan, Ullmann & Lister, 2017."
[image]: https://github.com/IET-OU/our-journey/raw/master/assets/screenshot-1.png
[yt]: https://youtu.be/nbIWjdsZmm0?t=15643&t_end=17278&_EMBED_X_ME_ "OpenTEL Show & TEL Event - 6 Oct 2018 Day One (unlisted)"

[End]: //.
