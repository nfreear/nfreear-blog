---
published: true
layout: post
title:  "Vocal Accessibility Part 3: A critique of PAS 901:2025, and testing"
date:   2026-05-12 08:00:00
tags:   accessibility speech stammer
---

In this post, I’m presenting a critique of [PAS 901:2025 Vocal accessibility in system design][pas]. This follows on from the [Part 2][] post, where I quoted some of the content from the Code of Practice, particularly Part 5, System Design.

I need to preface the critique with two points. First, _PAS 901:2025_ is a really important document, the result of a lot of hard work, and the first time anyone has tried to describe and specify what Vocal Accessibility should entail. This critique is written in the spirit of wanting to take this valuable work and build on it. And second, I believe that _PAS 901:2025_ was developed with a design mindset, whereas I with my _Accessibility Consultant_ hat on, view it more through a testing and auditing lens.

<my-vimeo-embed>
  <a href="https://vimeo.com/1188154327">Video: Vocal Accessibility Part 3, on Vimeo</a>.
</my-vimeo-embed>

## Critique 1: not open

The first critique concerns _openness_ in all its forms. [PAS 901:2025][pas] is published as a [DRM][]-protected PDF through the BSI shop, where you need to register an account, add it to your shopping basket and checkout. It costs £0.00 _(GBP)_. It is [copyright][] "© The british Standards Institution 2025", and carries the statement or warning "No copying without BSI permission except as permitted by copyright law".

As the Code of Practice is published as a PDF and is behind a paywall, it is not possible to [deep link][] to different sections. By contrast, this is something that is straightforward with, for example, the _Web Content Accessibility Guidelines_, where you can link to the [whole standard][wcag], one [principle][wcag:p-1], a [guideline][wmcag:g-1.1] or an individual [Success Criterion][wcag:sc-1.1.1] ([W3C license][]).

It is worth noting that the PDF is [untagged][], and therefore not accessible to those using assistive technologies such as screen readers.

Finally, the process and governance around developing _PAS 901:2025_ was not open. There was no opportunity to feedback on early drafts of the work, and as far as I know, the first that the wider community was aware was when it was published in March 2025.

All of the above lead, I believe, to siloed thinking, the inability to freely share, blog, create bug reports, improve and re-use _PAS 901:2025_ (including, [self-censorship][]). Overall, this is likely to restrict usage and uptake.
<!--
1. Restricted access & copyright (BSI "shop" £ 0)
2. PDF, not HTML (without deep-linking) _(+ untagged PDF!)_
3. Closed governance.
Consequences:
1. Siloed thinking
2. Not free* to share, blog, create bug reports **, improve, re-use...
    b) "self-censorship"
3. Likely to restrict usage and uptake.
-->

## Critique 2: sub-clauses not prioritized (too big!)

The second criticism concerns prioritization and the scale of _PAS 901:2025_. There are _60_ sub-clauses in section 5 of the Code of Practice, with no indication if any of them should be considered more or less important than the others. This is similar in scale to the _57_ Success Criteria in WCAG 2.2 [Level AA][wcag:level-aa]. However, WCAG tries to cover all disabilities and digital accessibility considerations (_except voice/speech_), while _PAS 901:2025_ only covers vocal accessibility.

This leads to a few questions and consequences. Do individual organizations have to research and assign priorities, given that it is hard to share information (_openness_)? Would an audit of a speech-enabled system need to test all 60 sub-clauses, _plus WCAG_? (A big undertaking.) Again, this is likely to restrict usage and uptake.
<!--
1. Section 5 has _60_ sub-clauses (similar scale to WCAG 2.2 A+AA, 57)
2. No concept of level A, AA, AAA.
Consequences:
1. Different orgs have to research/assign priorities.
2. Would an audit need to test all 60 sub-clauses (+WCAG)?
3. Likely to restrict usage and uptake.
-->

## Critique 3: objectivity / testable?

The third critique concerns objectivity and testability. Taking the Web Content Accessibility Guidelines as an example again, while there are grey areas such as [informative versus decorative images][wcag:decoration], there are also many Success Criteria that are objectively testable, and have thresholds and other quantitative criteria. Examples, include [Contrast (minimum)][wcag:contrast], [Reflow][wcag:reflow] and [Three Flashes or Below Threshold][wcag:3-flash].

By contrast, sub-clause "5.4.16 Support for conversational interactions – Interrupting a user" in _PAS 901:2025_ talks about "sufficient time", without specifying or suggesting what the time should be, and "5.5.3 Fairness" states that "Systems should behave fairly with regard to protected characteristics", without defining what "fairness" means (fairness is hopefully the ultimate aim of all accessibility work, including vocal accessibility — I suggest that it is too high level).

I should note that there are sub-clauses that appear to be objectively testable, for example, "5.1.1 Individualization", which talks about multi-modal presentation and operation. Whether a system is multi-modal is hopefully a binary decision.
<!--
* Can sub-clauses be objectively tested?
* Was testability/ measurability considered during writing/dev.?
* Thresholds/ timeouts/ numbers?
* Example, "5.5.3 Fairness - Systems should behave fairly with regard to protected characteristics"
Consequences:
1. Testing/ audits would be difficult,
2. Likely to restrict usage and uptake.
-->

## How to test?

When I presented at [TechShare Pro 2025][tsp] colleagues were keen that I included a practical discussion of how to conduct testing for vocal accessibility. This very much remains a _work-in-progress_, but here are some thoughts.

As noted above, there are sub-clauses that can be tested in a binary _(pass/fail)_ manner. Analysis is required to determine which sub-clauses can be objectively tested without further work.

There are sub-clauses, as highlighted above, which require further research. Sub-clause 5.4.16, which was referenced above, talks about "sufficient time". We can envisage this being achieved by giving the user the option to customise the recognition timeout(s) for a speech-enabled system. User research can help us determine a practical range of timeouts to offer the user.

A number of sub-clauses deal with accuracy of speech recognition, and this throws up an interesting challenge, namely that testing recognition requires a _"user input"_. This is fundamentally different to things like testing colour contrast for WCAG. Contrast can be tested using [software][cca] and algorithms, without a user being present to perceive the colours.

So, how are we to test speech recognition? Does it require accessibility consultant professionals to "mimic" a range of non-typical speech, including stammers/stutters? _No_, this is clearly unacceptable, as well as being unfeasible.

One can envisage a bank of "standardized" audio samples that could be used for repeatable testing. Questions arise around how to collect samples, managing access, and data protection. We would need to guard against things like un-authorized voice cloning. We could collaborate with groups like the [Speech Accessibility Project][speechA11y] at the University of Illinois Urbana-Champaign. We would need to ensure that data used for testing is not the same as that used for training by software vendors ([Train, Test, Validation split][train-test-]).

There are unresolved questions relating to the range of speech-types and dis-fluencies that we can test with, how to produce the "minor" and "significant" failures of speech recognition that are mentioned in sub-clauses in _PAS 901:2025_ (5.5.5, 5.5.6, and so on).

And, there is always an alternative to an audit-type approach in the form of diverse user-testing.

That concludes my critique of [PAS 901:2025][pas], and our discussion of testing challenges and methods.

[part 2]: https://nick.freear.org.uk/2026/04/27/vocal-accessibility-part-2-what-is-in-pas-901-2025.html
[part 3]: https://nick.freear.org.uk/2026/05/12/vocal-accessibility-part-3-a-critique-of-pas-901-2025-and-testing.html
[part 3:video]: https://vimeo.com/1188154327

[pas]: https://knowledge.bsigroup.com/products/vocal-accessibility-in-system-design-code-of-practice
[bsi license]: https://knowledge.bsigroup.com/pages/licensing]
[copyright]: https://www.gov.uk/copyright
[law]: https://www.legislation.gov.uk/ukpga/1988/48/contents
[deep link]: https://en.wikipedia.org/wiki/Deep_linking
[self-censorship]: https://en.wikipedia.org/wiki/Self-censorship
[siloed thinking]: https://www.experis.co.uk/blog/2023/01/how-to-break-down-silo-mentality-in-your-organisation
[untagged]: https://helpx.adobe.com/acrobat/using/creating-accessible-pdfs.html#tag_the_pdf
[drm]: https://libanswers.brunel.ac.uk/faq/275112
[drm-p]: https://plugin.fileopen.com/
[cca]: https://vispero.com/lp/color-contrast-checker/

[wcag]: https://www.w3.org/TR/WCAG22/
[wcag:p-1]: https://www.w3.org/TR/WCAG22/#perceivable "Principle 1: Perceivable, WCAG 2.2"
[wcag:g-1.1]: https://www.w3.org/TR/WCAG22/#text-alternatives
[wcag:sc-1.1.1]: https://www.w3.org/TR/WCAG22/#non-text-content
[wcag:level-aa]: https://www.w3.org/TR/WCAG22/#cc1
[wcag:decoration]: https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html#dfn-pure-decoration
[wcag:contrast]: https://www.w3.org/TR/WCAG22/#contrast-minimum
[wcag:contrast-why]: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html#rationale-for-the-ratios-chosen
[wcag:reflow]: https://www.w3.org/TR/WCAG22/#reflow
[wcag:3-flash]: https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold
[w3c license]: https://www.w3.org/copyright/document-license-2023/

[tsp]: https://abilitynet.org.uk/techsharepro
[tsp:voxA11y]: https://www.youtube.com/watch?v=ZWZ4ttjqQiI
[speechA11y]: https://speechaccessibilityproject.beckman.illinois.edu/
[speechA11y:faq]: https://speechaccessibilityproject.beckman.illinois.edu/conduct-research-through-the-project/faq-on-using-our-data
[train-test-]: https://www.lightly.ai/blog/train-test-validation-split
[train-test-2]: https://mzuer.github.io/machine_learning/data_split
