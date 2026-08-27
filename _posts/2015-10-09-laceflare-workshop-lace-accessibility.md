---
layout: post
title:  SoLAR Flare workshop – LACE evidence hub accessibility
date:   2015-10-09 15:57:00
categories:
tags:   [ accessibility, analytics, IET-OU, LACE, event, workshop ]
x-type: event
x-event-start: 2015-10-09 09:30 +0100
x-note: Friday, 9 October 2015 from 09:30 to 16:30 (BST)
x-event-url: https://eventbrite.co.uk/e/lace-solar-flare-2015-research-into-practice-tickets-17367324134
---


[Extended talk, on YouTube.][]

I've been working with Doug (Clow) and Rebecca (Ferguson) on the
_LACE Evidence Hub_ over the past 18 months.
It has not been continuous development --
just this week, we're completing the third phase of software development.

<!--more-->

This talk is an extended version of a lightning talk I'll be giving on Friday 9 October
(it should last 2 minutes -- a challenge!)

First, a bit of background – LACE is the Learning Analytics Community Exchange - an EU funded project.
Some of the main functionality of the LACE Evidence Hub, uses Martin Hawksey's WordPress plugins for the OER Evidence Hub.
I've worked to improve, debug, reverse engineer, source and create functionality that complements this plugin.
The site is built on WordPress – which provides a flexible, hackable platform for this sort of project.

We had a colleague do an "expert evaluation" of the Evidence Hub, testing for accessibility to those with disabilities.
He used a variety of assistive technology – screen readers (used by blind/ partially sighted), screen magnifier (partially sighted), Read&Write (dyslexia), Windows high-contrast mode, and so on.
And, he found a lot of issues, which he reported via a spreadsheet ...


Here is a quick commentary specifically on the two screen-shots in the slide(s):

1. Screen-shot 1 shows an Evidence Hub page in Windows High Contrast mode (in Internet Explorer), before and after fixes.
The main point: before the fixes the Sankey diagram is almost invisible; after the fix, it is highlighted in green
(techie point: Javascript is used to detect high contrast/ignore colour modes; "CSS System Color Keywords" are used to effect the fix (for example, "ButtonFace").

2. Screen-shot 2 shows the Hub's home-page, containing a video, in browser "ignore colours" mode (in Firefox, on Windows 7).
On the left, the YouTube embed, including controls, is invisible before the video is played; on the right the YouTube video embedded with Open Media Player is visible.
The borders of form-fields are also visible, and there are a few other fixes.


Take-away messages:

* You should aim to make your Web and mobile apps. that are for, or are part of, research projects accessible to those with disabilities;
* This is for many of the same reasons that general web technologies should be accessible – not excluding people (exclusion can hurt your research); legal obligations; general societal access to research; etc.
* Assume that what you develop for a research project will end up as a widely released "product" – and there won't be enough time down the line to fix accessibility issues;
* So, don't be defeatist – "it's research – accessibility isn't important";
  (I've heard it said  – "it's research – we don't have time for security." Unrealistic in today's security-conscious world.)
* Even when you're doing innovative things, for example, complex geographical visualizations, visual representations, there are still pragmatic steps and fixes that you can make – examples are in the screenshots;
* So, don't be defeatist – for example, "it's built around maps – how can it ever be accessible?"
  You (almost) certainly won't have enough time to fix all the issues – prioritize, be pragmatic, be realistic;



That's all from me today. Thanks for listening!

[Visit: _evidence.laceproject.eu_][visit]

[Slide 10](http://slideshare.net/laceproject/learning-analytics-lace-solar-flare-2015/10#!__EMBED_ME__)

[LACE SoLAR Flare 2015 Delegate Pack][pack]


[Extended talk, on YouTube.]: https://youtu.be/YC7NBEuCVUo#!__EMBED_ME__
[visit]: http://evidence.laceproject.eu#!__BIG_ME__
[pack]: http://www.laceproject.eu/blog/lace-solar-flare-2015-pack/
