---
published: true
layout: post
title:  "Vocal Accessibility Part 2: What is in PAS 901:2025?"
date:   2026-04-28 17:00:00
tags:   accessibility speech stammer
---

In [part 1][] of this series of blog posts, we looked at where the [PAS 901:2025 Vocal Accessibility Code of Practice][pas] came from, what technologies are covered by it, and who it is for.

In this post, we’re going to delve deeper into the actual contents of the PAS. The Code of Practice comprises a foreword, 6 parts and 3 annexes, as can be seen in the table of contents below. We are going to concentrate on parts 4 "Goals and user accessibility needs approach", and 5 "General design".

>"Foreword `. . . . . . . . . . . . . . . . . . . . . . . . . . . .`	ii
>0 Introduction `. . . . . . . . . . . . . . . . . . . . . . . . . . `	iv
>1 Scope `. . . . . . . . . . . . . . . . . . . . . . . . . . . . . `	1
>2 Normative references `. . . . . . . . . . . . . . . . . . . . . . `	3
>3 Terms, definitions and abbreviated terms `. . . . . . . . . . . . . `	4
>4 Goals and user accessibility needs approach `. . . . . . . . . . . . ` 	8
>5 General design `. . . . . . . . . . . . . . . . . . . . . . .  . .`	11
>Annex A (informative) An exemplar using accessibility goals and needs `. . . `	25
>Annex B (normative) Procurement scenarios `. . . . . . . . . . . . . . . `	41
>Annex C (normative) List of additional user accessibility needs `. . . . . ` 	42
>Bibliography `. . . . . . . . . . . . . . . . . . . . . . . . . . .  `	44"

Part 4 _(page 8)_ builds on [ISO/IEC 29138-1:2018, Information technology – User interface accessibility – Part 1: User accessibility needs][iso 29138] and outlines how to document the accessibility requirements, including vocal accessibility needs, during the design and procurement of a product or service. It is key to the whole approach espoused by _PAS 901:2025_.

<my-vimeo-embed>
  <a href="https://vimeo.com/1182998047">Video: Vocal Accessibility Part 2, on Vimeo</a>.
</my-vimeo-embed>

Part 5 "General design" contains a series of clauses and sub-clauses under the following 8 headings:

>"5.1 Multimodality `. . . . . . . . . . . . . . . . . . . . . . . . . `	11
>5.2 Language `. . . . . . . . . . . . . . . . . . . . . . . . . . . `	12
>5.3 Speech processing `. . . . . . . . . . . . . . . . . . . . . . . `	13
>5.4 Interaction `. . . . . . . . . . . . . . . . . . . . . . . . . . .`	15
>5.5 Feedback, error prevention and error correction `. . . . . . . . . . `	19
>5.6 Privacy and trust `. . . . . . . . . . . . . . . . . . . . . . . . `	21
>5.7 Speech technology services `. . . . . . . . . . . . . . . . . . . `	23
>5.8 Training `. . . . . . . . . . . . . . . . . . . . . . . . . . . . `	24"

We’ll go through some examples of the sub-clauses in order, starting at the beginning with "5.1.1 Individualization" _(page 11)_:

>"When delivering electronic information, a system should provide the modalities that best serve the user’s needs or preferences in that context, selectable singly and together."

This sub-clause is saying that a system should allow the user to interact using speech/voice, text or other modalities, or a combination of them. Its hopefully a fairly obvious requirement, and brings to mind guidelines in the Web Content Accessibility Guidelines 2.2 such as [2.1 Keyboard Accessible][] and [2.5 Input Modalities][].

Jumping ahead to "5.3 Speech processing", we have sub-clauses such as "5.3.6 Speech impairment" _(page 14)_:

>"Speech recognition and automatic language translation should be performed in a manner that achieves an equal level of recognition and correctness for all speakers including speakers with impaired speech or specific speech disabilities.""

This speaks to the need for fairness and equal access to voice-based software and systems.

These first two examples are generic, while the next one, "5.4.9 Telephone and internet menu systems – recognition failure" _(page 18)_ is specific:

>"Voice recognition systems running over a telephone or internet menu system should provide an simple means to access and communicate with a human after failed attempts to recognize voice input."

As a person with a stammer (stutter) who has had many difficult and demoralizing interactions with automated phone systems, the requirement to have a human as a backup strikes me as really valuable.

We will continue with "5.4 Interaction", and look at "5.4.16 Support for conversational interactions – Interrupting a user" _(page 19)_. This says:

>"Products, systems or services accepting vocal input or supporting vocal interaction should provide sufficient time for a user to speak and not respond before presuming an utterance is complete."

Again, one of the biggest frustrations as someone who stammers is being interrupted by humans or machines, so this makes sense.

The final sub-clause we are going to cover is "5.5.4 Tolerance of minor speech errors" _(page 20)_:

>"A system that accepts vocal input should be tolerant to minor speech errors made by the user."

This requirement also seems reasonable, as anyone can make mistakes when they speak. Like many of the sub-clauses in part 5, this requirement also seems reasonable, as anyone can make mistakes when they speak.

I should mention that many of these sub-clauses have notes and references to goals and user needs, which are excluded here for brevity.

Hopefully, the above quotes and discussion have given you a flavour of what is contained in _PAS 901:2025_ and concludes part 2.

[part 1]: https://nick.freear.org.uk/2026/04/13/vocal-accessibility-part-1-what-is-pas-901-2025.html
[part 2:video]: https://vimeo.com/1182998047
[pas]: https://knowledge.bsigroup.com/products/vocal-accessibility-in-system-design-code-of-practice
[iso 29138]: https://knowledge.bsigroup.com/products/information-technology-user-interface-accessibility-user-accessibility-needs
[2.1 keyboard accessible]: https://www.w3.org/TR/WCAG22/#keyboard-accessible
[2.5 input modalities]: https://www.w3.org/TR/WCAG22/#input-modalities
