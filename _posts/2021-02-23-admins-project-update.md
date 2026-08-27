---
x-csp-disable: true
layout: post
title:  ADMINS project — update
date:   2021-02-23 16:30:00
tags:   [ IET-OU, OpenUniversity, OU, project ]
og-desc: A short description
# og-image-00: https://c1.staticflickr.com/5/4076/35671915106_62be509598_z.jpg
og-image-alt: ALT text.

last_updated: 2021-02-23
changefreq: daily
priority: 1.0
---

After a busy, rewarding and challenging year,
[Paco][] launched the main trial for [ADMINS][] on the 18th November 2020.
It was closed on the 10th January 2021, with 134 student respondents completing all parts of the trial.

A key takeaway from the research was that respondents preferred the ADMINS Chat-bot they trialled
over the existing online form, when disclosing their disabilities and needs to us.
(_Links to research papers to follow_.)

![ADMINS Chat-bot "I have a prosthetic leg …" (screenshot)][cb-1]

[Chetz Colwell][chetz] undertook accessibility testing before our main trial, and
I've followed up by contributing [accessibility bug reports][bug] and [fixes][pr]
to the Microsoft _WebChat_ Javascript library.

Below I've summarised some of our technical achievements and some challenges we faced.

## Technical achievements

* [Richard][rich] developed a structured data-format to load the conversation into the Chat-bot.
  This gives us flexibility to customize the conversation-flow, without changing the code;

We developed …:

* A custom "_patient_", adaptive speech recognizer for the Chat-bot,
  built on [MS Speech][] Cognitive Services (_live-demoed_!);

* And, a [LUIS model][] to classify multiple disabilities and health conditions
  from a potentially long, multi-sentence disclosure by a student.

## Challenges

* Incomplete documentation; documentation only dealing with simpler use-cases; out-of-date documentation;

* Issues encountered with speech-to-text accuracy when using low bandwidth phone calls ([Paul][])

…

Read more in [various][ms-2021] blog [posts][five] from early February 2021.

_I'm very proud of what we achieved throughout 2019-2020, and the COVID crisis!_

Thanks to :~ [Tim][], [Kate][], [Paco][], [Wayne][], [Jo][],
[Kevin][], [Peter][], [Rich][], [Paul][] and our consultant students.

[chatbot-img-1]: https://photos.app.goo.gl/Dx8nmr48TZpgRpoZA
[cb-1]: https://lh3.googleusercontent.com/pw/ACtC-3ca8AG0J8Zwqz_j6sChUENIM8KrXGBHxqTPyI7dE-Jq39C0AJWvfyQkIfYKFh02-tEMxTMaULv2F4i4-OBcmv4Yxkp-UtvWbL7GGCsniotGt0KSIQtvR5jonLdOURPc2zQbYEyGhs_U_XhVmCNATsDZFQ=w1209-h1704-no?authuser=0
  "ADMINS Chat-bot “I have a prosthetic leg …“ (screenshot)"
[admins]: https://nick.freear.org.uk/2019/10/22/admins-project.html
  "Assistants to the Disclosure and Management of Information about Needs and Support (ADMINS)"
[project]: https://iet.open.ac.uk/projects/admins
  "Assistants to the Disclosure and Management of Information about Needs and Support (ADMINS)"
[luis]: https://eu.luis.ai/ "Language Understanding (LUIS), Microsoft"
[ms speech]: https://speech.microsoft.com/# "Speech Studio, Microsoft"
[tim]: https://iet.open.ac.uk/people/tim.coughlan "Tim Coughlan, academic (PI)"
[kate]: http://wels.open.ac.uk/people/kml322 "Kate Lister, academic"
[wayne]: https://researchgate.net/profile/Wayne-Holmes-2 "Wayne Holmes, academic"
[paco]: https://iet.open.ac.uk/people/francisco.iniesto
  "Francisco Iniesto, academic"
[ian]: http://www.open.ac.uk/people/ik3399
  "Ian Kenny, Visiting Fellow and OU student"
[jo]: https://linkedin.com/in/joanne-watts-8b66b83a/
  "Joanne Watts, Project Manager"
[kevin]: https://iet.open.ac.uk/people/kevin.mcleod
  "Kevin McLeod, Senior Learning and Teaching Technologies Manager"
[peter]: https://iet.open.ac.uk/people/peter.devine
  "Peter Devine, Educational Technology Designer"
[rich]: https://iet.open.ac.uk/people/richard.greenwood#biography
  "Richard Greenwood, Edu Tech. developer"
[nick]: https://iet.open.ac.uk/people/nick.freear
  "Nick Freear, Edu Tech. developer"
[paul]: http://www.open.ac.uk/people/pam3
  "Paul Maher, Senior Product Development Manager (Emerging Tech)"
[paul fb]: https://facebook.com/paul.maher.98
[chetz]: https://linkedin.com/in/chetz-colwell-5a980510/
  "Dr Chetz Colwell Accessibility expert - Learning & Teaching"
[five]: https://ounews.co/education-languages-health/education/five-ways-the-ous-new-chatbot-can-support-disabled-students/
  "Five ways the OU’s new chatbot can support disabled students, By James Cantwell, January 29, 2021"
[res]: http://www.open.ac.uk/research/news/ou-trials-chatbots-support-students-disabilities
  "OU trials chatbots to support students with disabilities, ~3rd February 2021"
[ms-2021]: https://blogs.microsoft.com/accessibility/ai4aedugrants2021/
  "Reimagining the Future of Accessible Education with AI, Microsoft blog, 3rd Febraury 2021"
[bug]: https://github.com/microsoft/BotFramework-WebChat/issues/3655
  "Accessibility issues found during ADMINS testing, Bug #3655"
[pr]: https://github.com/microsoft/BotFramework-WebChat/pull/3669
  "Allow implementors to change the WAI-ARIA role of the container (#3658), Pull request #3669"

[End]: //.
