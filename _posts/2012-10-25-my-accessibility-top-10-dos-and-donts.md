---
layout: post
title:  My accessibility top 10 do’s and don’ts
date:   2012-10-25 14:34:00
categories:
tags:   [ accessibility ]
x-source:  http://freear.org.uk/content/my-accessibility-top-10-dos-and-donts
x-comment-count: 1
x-comments:
  - id: 1152
    by: Mbah Solikun (not verified) | Fri, 21/12/2012 - 07:23
    text: Hello, I truly enjoyed reading your post. I found your site from Bing. Will bookmark to return later. Thanks! jasa social media
---



Quoting from a recent blog post by [Marco Zehe][marco],

> There are those days when you watch a discussion unfold on Twitter, and a point is
> reached where a statement is made that leaves you more or less speechless for a while.

Like Marco, I'm a little dismayed by what the discussions on Twitter and his blog seem to reveal.

And, to quote from [Molily’s comment][molily],

> The majority does not consider accessibility as a crucial part of HTML5 (as an umbrella term).
> People are building huge apps and interactive experiences with HTML5.
> Accessibility isn’t necessarily a built-in feature.
> When people talk about HTML5, accessibility isn’t naturally included.

Quoting from [And’s comment][ands],

> So what are the top 5 or 10 pragmatic dos and don’ts?

I'm always one for a challenge, so here are my top 10 dos and don'ts:


1. Do install/ experiment with some tools and techniques -- [NVDA screen reader][nvda] on Windows;
  [VoiceOver][] on Mac OS X; [Windows high contrast][win]; navigating with the keyboard (TAB, shift+TAB);
  the [HTML CodeSniffer][cs] -- but don't expect validator/lint tools to find all the problems,
2. Don't take HTML(5) markup for granted -- whether you're generating it via Javascript in a big Web application, or directly on a small Web site.
  Use of headings `<h1>`, form labels `<label>`, `<button>` … is important,
3. Do markup things like buttons, well.. as buttons!
  Either directly `<button title="Play video"></button>` (ideal)
  OR `<img role=button tabindex=0 title="Play video" />` (a [WAI-ARIA][] hack),
4. Don't assume that just because you are using a framework/ library/ whatever, then you have accessibility covered. There are some examples of active accessibility/usability movements within development communities, eg. [Drupal UI standards][drupal], [Drupal group][], but there are plenty that need help,
5. However, do use abstractions, for example a form library; oEmbed or `<iframe>`s for embedding… --
  this way accessibility/ usability bugs can (hopefully) be fixed in many places simultaneously,
6. Do think about the process - require accessibility and usability standards in specifications/ tenders, build in training, build in testing, build in bug fixing [BS 8878][],
7. Do use standards -- they aren't always scary, and [WCAG 2.0][] has a "top four" --
  _perceivable, operable, understandable, robust ([POUR][])_ --
  An example of perceivable would be adding the `title` attribute to the previous `<button>` example;
  an example of operable would be adding `role` and `tabindex` to the WAI-ARIA hack above… --
  be aware that while standards and technologies change, general principles don't,
8. Do talk about what you're doing -- not to show off, but to raise awareness;
  do contribute to the community -- fixing problems, testing, encouraging…,
9. Do read, attend courses -- [EHRC course][ehrc], [H807 on OpenLearn][H807],
  [H810 at The OU][H810], [Web Platform Docs][web], [Dive into Accessibility][dive], [search][]…,
10. Do take small steps, make small improvements -- even if accessibility isn't built in from the start there is usually something that can improve the experience of end-users.


I'm aware that the above list mixes big picture and nitty-gritty points, and possible

Plenty of [other][] [people][] have their [own][] [takes][] on this.

What is your top tip?




[marco]: http://www.marcozehe.de/2012/10/22/accessibility-what-is-it-good-for/
    "Accessibility – what is it good for? by Marco Zehe 2012-10-22"
[molily]: http://www.marcozehe.de/2012/10/22/accessibility-what-is-it-good-for/#comment-368792
    "Comment on Zehe post, by Mathias/Molily (Molily.de) 2012-10-22"
[ands-was]: http://www.marcozehe.de/2012/10/22/accessibility-what-is-it-good-for/#comment-368806
[ands]: https://www.marcozehe.de/2012/10/22/accessibility-what-is-it-good-for/#comment-1389
    "Comment # 15 – 'And' says: 10/22/2012 at 22:15"


[wai-aria]: http://w3.org/TR/wai-aria/
    "Accessible Rich Internet Applications (WAI-ARIA) 1.0 / W3C Recommendation 20 March 2014"
[WCAG 2.0]: http://www.w3.org/TR/WCAG20/
    "Web Content Accessibility Guidelines (WCAG) 2.0 / W3C Recommendation 11 December 2008"
[POUR]: http://w3.org/TR/WCAG20/#contents "&#039;POUR&#039; in contents of WCAG 2.0"


[NVDA]: http://nvda-project.org/ "NVDA is a free/open source screen reader for Windows"
[voiceover]: http://www.apple.com/accessibility/voiceover/
    "VoiceOver is a screen reader built into Mac OS X and recent iOS"
[win]: http://windows.microsoft.com/en-US/windows7/Turn-on-High-Contrast "Windows high contrast"
[cs]: http://squizlabs.github.com/HTML_CodeSniffer/ "HTML CodeSniffer"
[drupal]: http://drupal.org/ui-standards "Drupal UI standards"
[Drupal group]: http://groups.drupal.org/usability "Drupal group"
[BS 8878]: http://www.access8878.co.uk/ "BS 8878 Web Accessibility Code of Practice"


[ehrc]: http://www.equalityhumanrights.com/news/2012/june/first-digital-accessibility-course-announced/
    "Web Essentials” course - &#039;The Equality and Human Rights Commission has partnered with AbilityNet and BCS…&#039;, 2012-06-29"
[H807]: http://openlearn.open.ac.uk/H807_1
    "Accessibility of eLearning, H807_1 free module on OpenLearn"
[H810]: http://www3.open.ac.uk/study/postgraduate/course/h810.htm "supporting disabled students, H810 at The Open University"
[web]: http://docs.webplatform.org/wiki/Main_Page
    "Your Web, documented. An open community supported by the W3C, Facebook, Mozilla, Google, Opera, Microsoft…"
[dive]: http://diveintoaccessibility.info/ "30 days to a more accessible web site, by Mark Pilgrim 2002"
[search]: http://google.com/search?q=accessibility+course "Accessibility courses -- Google search"


[other]: http://www.sean.co.uk/a/webdesign/17_accessibility_tips.shtm
    "17 steps to a more accessible website, by Sean McManus 2004-10 -- &#039;People with disabilities have an annual spending power of £50 billion according to the Disability Rights Commission (DRC)…&#039;"
[people]: http://www.conferences.uiuc.edu/FSI/PresenterMaterials2011/Offenstein_WebAccessibility.pdf
    "Offenstein, Web Accessibility, 2011 conference paper, UIUC.edu [PDF]"
[own]: http://google.com/search?q=accessibility+dos+and+don&#039;ts "Dos and don&#039;ts -- 1.27 million results on Google"
[takes]: http://google.com/search?q=%22more+accessible%22+web "&#039;More accessible&#039; web -- 10 million results on Google"


[End]: end
