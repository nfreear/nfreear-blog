---
layout: post
title:  Moodle Calculated Objects question type
date:   2011-10-05 22:31:00
categories:
tags:   [ moodle4-9, book, moodle, plugin, school, quiz ]
x-tags: #book #moodle #moodle4-9 plugin  primary school  qtype question quiz
x-source: http://freear.org.uk/content/moodle-calculated-objects
x-comments: 3
x-comment-url: http://freear.org.uk/content/moodle-calculated-objects#comment-554
x-comment-text: >
  by Guest (not verified) | Sat, 25/08/2012 - 23:02 | How to set problem
  How do you set the problem up? I loaded the plugin but can't figure out the question setup?
  Is there a place I can find this?
---


Over the past 12 months I've created a number of contributed plugins for Moodle.
[Moodle][] is an open-source e-learning or virtual learning environment (VLE), that
teachers, lectures and trainers can use to enhance face-to-face and blended teaching.
It is also used by a number of large institutions like The Open University for distance education.

<!--more-->

[![Calculated Objects plugin][img-1]][plugin]

The first one I'll talk about is [Calculated Objects][plugin], a Moodle question type plugin.
It extends the quiz activity module and allows teachers to create questions like


{% highlight 'bash' %}
    How much is {apples} + {oranges}?
{% endhighlight %}


The `{wildcards}`, which are taken from a fixed list are replaced with M and N images of apples and oranges respectively.
It is aimed at pre/primary-school (elementary school) children (approximately aged 3-9).


![Screen shot][img-2]


The code is available via the [new plugins database][plugin] and Github -- under the [GNU General Public License][gpl].
It now supports Moodle 1.9 and 2.0, and there is a French language pack (corrections welcome!) Moodle 2.1 is on my todo list.

There has been some great [discussion and feedback on the Moodle forums][forum] -- thanks all!

Find out more on the [Wiki page][] and in the [Readme][].


[This plugin features in my book, _Moodle 2 for Teaching 4-9 Year Olds Beginner's Guide_<!-- published in October 2011-->][book]



[img-1]: http://moodle.org/pluginfile.php/50/local_plugins/plugin_logo/81/icon-120.png
[img-2]: http://moodle.org/pluginfile.php/50/local_plugins/plugin_screenshots/81/mdl-q-calcobjects-5a-sub-green.png

[Moodle]: https://moodle.org/
[plugin]: https://moodle.org/plugins/view.php?plugin=qtype_calculatedobjects
[GitHub]: https://github.com/nfreear/moodle-qtype_calculatedobjects
[gpl]: https://gnu.org/licenses/gpl-2.0.html
[forum]: https://moodle.org/mod/forum/discuss.php?d=156605
[Wiki page]: https://docs.moodle.org/20/en/Calculated_Objects_question_type
[Readme]: https://github.com/nfreear/moodle-qtype_calculatedobjects#readme
[book]: https://packtpub.com/moodle-2-for-teaching-4-9-year-olds-beginners-guide/book?ref=freear.org.uk#!_BIG_ME_


[End]: end
