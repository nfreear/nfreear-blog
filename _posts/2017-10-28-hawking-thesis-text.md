---
# x-csp-disable: true
layout: post
title:  Can we have a text version of Hawking thesis?
date:   2017-10-24 12:00:00Z
tags:   [ accessibility, "open access", thesis ]
og-desc: Congratulations ... I'm a little disappointed that alongside the PDF of the scanned thesis, there isn't a text version.
og-image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/220px-Stephen_Hawking.StarChild.jpg
og-image-alt: Stephen Hawking.

last_updated: 2017-11-03
changefreq: daily
priority: 1.0
---

Dear University of Cambridge,

Congratulations on publishing [Stephen Hawkings' PhD thesis, "_Properties of expanding universes_" online][search].
I along with many others salute your commitment to [open access][oa]!

However, I'm a little disappointed that alongside the [PDF of the scanned thesis][pdf],
there isn't a text version available.

There are some important reasons to create a text version:

 1. [Accessibility to those with dis-abilities][a11y],
 2. Searchability,
 3. Access by those on low-bandwidth connections (_the scanned PDF is ~20 MB_).

I believe the above points relate to Cambridge University's adoption of
the [FAIR principles][fair], as mentioned in the [terms of use][].
Note that while the use of "_accessible_" in the FAIR principles does not
directly relate to the term used in relation to dis-abilities,
the FAIR principles particularly "_findable_" and "_interoparable_"
correlate to some extent with the [POUR principles within WCAG 2.1][wcag21].

I think my point is particularly appropriate, given that Stephen Hawking
himself relies on a wheel-chair and other assistive technologies.

A useful first step would be to publish the abstract, table of contents,
and extended meta-data (including license) in HTML/ text format.

Note, if you're publishing a research output or similar work as a text-based PDF,
then you should look at [tagged PDF][t-pdf] (for accessibility),
and [PDF/A][] (archive) for long-term preservation.

Here is Hawking's _thesis abstract_ (via Google Scholar and the [British Library][bl]):

> Some implications and consequences of the expansion of the universe are examined.
> In Chapter 1 it is shown that this expansion creates grave difficulties for the Hoyle-Narlikar theory of gravitation.
> Chapter 2 deals with perturbations of an expanding homogeneous and isotropic universe.
> The conclusion is reached that galaxies cannot be formed as a result of the growth of perturbations that were initially small.
> The propagation and absorption of gravitational radiation is also investigated in this approximation.
> In Chapter 3 gravitational radiation in an expanding universe is examined by a method of asymptotic expansions.
> The 'peeling off' behaviour and the asymptotic group are derived.
> Chapter 4 deals with the occurrence of singularities in cosmological models.
> It is shown that a singularity is inevitable provided that certain very general conditions are satisfied.

[![Stephen Hawking, on Wikipedia.][h-img]][hawking]

And, here's a [tweet][] on the subject.

Yours,

Nick

---

_P.S._ Full disclosure. I write this fully accepting that my own
[PhD thesis][ndf-thesis] is currently only available as a scanned PDF.
I need to change this!
(However, my thesis has negligible or zero scientific or cultural importance,
when compared with the work of Stephen Hawking ;).)

---

### Update

03 November 2017:
The [main url now points to a HTML page with extended meta-data][PDF] - progress!
Examining the [Wayback Machine][wayback], it seems that the URL originally
pointed to a HTML page, then changed so that it redirected (302) to the PDF.
It has now been changed to serve a HTML page.

Cambridge University's [CUDL contains a table of contents][CUDL]:

> * Abstract (image 9, page 2)
> * Introduction (image 10, page 3)
> * Acknowledgements (image 14, page 7)
> * Chapter 1: The Hoyle-Narlikar theory of gravitation (image 15, page 8)
> * Chapter 2: Perturbations (image 31, page 24)
> * Chapter 3: Gravitational radiation in an expanding universe (image 54, page 47)
> * Chapter 4: Singularities (image 101, page 94)


[wayback]: http://web.archive.org/web/*/https://www.repository.cam.ac.uk/handle/1810/251038
  "Internet Archive: 23 October 2017 onwards."
[art]: http://cam.ac.uk/research/news/step-inside-the-mind-of-the-young-stephen-hawking-as-his-phd-thesis-goes-online-for-first-time
  "Step inside the mind of the young Stephen Hawking as his PhD thesis goes online for first time"
[PDF]: https://www.repository.cam.ac.uk/handle/1810/251038
  "'Properties of expanding universes', Stephen Hawking, 1966 (was PDF)."
[CUDL]: https://cudl.lib.cam.ac.uk/view/MS-PHD-05437
[search]: https://www.repository.cam.ac.uk/discover?query=%22Properties+of+expanding+universes%22
  "'Properties of expanding universes', Stephen Hawking, 1966."
[terms of use]: https://osc.cam.ac.uk/repository/repository-terms-use
  "Cambridge University repository - terms of use."
[BL]: http://ethos.bl.uk/OrderDetails.do?uin=uk.bl.ethos.601153 "British Library"
[oa]: https://en.wikipedia.org/wiki/Open_access "Open access"
[oa-hefce]: http://www.hefce.ac.uk/rsrch/oa/whatis/
[fair]: https://www.force11.org/group/fairgroup/fairprinciples
  "To be: findable, accessible, interoperable, re-usable (FAIR)."
[nature]: https://www.nature.com/articles/sdata201618
  "The FAIR Guiding Principles for scientific data management and stewardship, Wilkinson et al. Nature, 2016. [doi:10.1038/sdata.2016.18]"
[esq]: http://esquire.com/lifestyle/a13082404/stephen-hawkings-expanding-universes-phd-thesis-available/
  "Stephen Hawking Released His Ph.D. Thesis for Free and It Crashed Cambridge's Website"
[a11y]: https://en.wikipedia.org/wiki/Accessibility
[wcag21]: https://w3.org/TR/WCAG21/#toc
  "Percievable, operable, usable, robust (POUR). Web Content Accessibility Guidelines (WCAG) 2.1."
[tweet]: https://twitter.com/nfreear/status/924248109168910337
  "Can the web have a text version of @StephenHawking8 thesis @cambridge_uni https://www.repository … #accessibility … (missing '?')"
[hawking]: https://en.wikipedia.org/wiki/Stephen_Hawking "Stephen Hawking, on Wikipedia."
[h-img]: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/220px-Stephen_Hawking.StarChild.jpg
[ndf-thesis]: http://etheses.bham.ac.uk/890/
  "'Automated visual inspection for the quality control of pad printing'"
[t-pdf]: http://www.planetpdf.com/enterprise/article.asp?ContentID=6067 "What is tagged PDF?"
[PDF/A]: https://en.wikipedia.org/wiki/PDF/A

[End]: //.
