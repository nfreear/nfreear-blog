---
published: true
layout: post
title:  "Dialog-position"
date:   2024-01-28 19:00:00
tags:   accessibility loom CSS style
og-desc: ..
og-image-00: ..
og-image-alt: ..

last_updated: 2025-04-13
changefreq: daily
priority: 1.0
---

In this video, I discuss the challenges we face with keyboard accessibility in modal dialogs and introduce a new [dialog-position][npm] package on NPM, that exposes a [stylesheet][css] to easily position native HTML [`<dialog>`][dlg] elements.

[Enhancing Modal Dialog Accessiility][embed]

<var>1</var>
<time>00:00:00,000 --> 00:00:04,541</time>
Hi, so I wanted to talk to you today about

<var>2</var>
<time>00:00:04,542 --> 00:00:09,139</time>
the, about modal dialogs and about

<var>3</var>
<time>00:00:09,517 --> 00:00:14,352</time>
the [dialog-position][npm] package that was recently published

<var>4</var>
<time>00:00:14,655 --> 00:00:19,082</time>
on the NPM website. Registry, and you can see it there.

<var>5</var>
<time>00:00:19,083 --> 00:00:21,610</time>
So we often, as accessibility consultants,

<var>6</var>
<time>00:00:22,269 --> 00:00:24,781</time>
we often come across problems with,

<var>7</var>
<time>00:00:24,782 --> 00:00:28,106</time>
with keyboard, accessibility in relation to,

<var>8</var>
<time>00:00:28,107 --> 00:00:29,263</time>
in relation to modal dialogs,

<var>9</var>
<time>00:00:29,274 --> 00:00:34,104</time>
either things like the focus not being moved into a modal dialog,

<var>10</var>
<time>00:00:34,114 --> 00:00:39,167</time>
when it's, when it's opened, or that focus is not restricted

<var>11</var>
<time>00:00:39,608 --> 00:00:43,007</time>
to the modal dialog. or indeed when we close the dialog,

<var>12</var>
<time>00:00:43,008 --> 00:00:46,376</time>
focus is not returned to the triggering element.

<var>13</var>
<time>00:00:46,377 --> 00:00:47,240</time>
and so,

<var>14</var>
<time>00:00:47,250 --> 00:00:50,140</time>
in the past, or, you know,

<var>15</var>
<time>00:00:50,672 --> 00:00:55,176</time>
in the recent past, we would have had to rely on quite

<var>16</var>
<time>00:00:55,177 --> 00:01:00,052</time>
a lot of ARIA and quite a lot of Javascript,

<var>17</var>
<time>00:01:00,063 --> 00:01:04,520</time>
to Good. So here's the [APG][dialog.js],

<var>18</var>
<time>00:01:04,530 --> 00:01:09,042</time>
version that uses 330 lines to

<var>19</var>
<time>00:01:09,043 --> 00:01:14,087</time>
implement a [modal dialog][apg], and 330 lines of JavaScript,

<var>20</var>
<time>00:01:14,098 --> 00:01:20,391</time>
and so, obviously, it's quite a challenge, and it's quite a challenge to

<var>21</var>
<time>00:01:20,392 --> 00:01:21,777</time>
try to get things right, and it's quite a challenge to make things, to

<var>22</var>
<time>00:01:21,778 --> 00:01:24,391</time>
make the modal dialog accessible,

<var>23</var>
<time>00:01:24,401 --> 00:01:27,942</time>
but fortunately, it's certainly now, we have the native,

<var>24</var>
<time>00:01:28,368 --> 00:01:31,141</time>
eh, eh, eh, native element,

<var>25</var>
<time>00:01:31,236 --> 00:01:35,844</time>
HTML, HTML, native, eh, eh, eh, eh, eh, eh,

<var>26</var>
<time>00:01:35,845 --> 00:01:40,631</time>
eh, [native element][dlg]. And that, erm, does a lot of the

<var>27</var>
<time>00:01:40,735 --> 00:01:43,252</time>
heavy lifting for us,

<var>28</var>
<time>00:01:43,253 --> 00:01:48,072</time>
so it's, it's very, it's very good at managing

<var>29</var>
<time>00:01:50,468 --> 00:01:53,108</time>
the focus of the keyboard.

<var>30</var>
<time>00:01:53,109 --> 00:01:56,837</time>
In the way that we want,

<var>31</var>
<time>00:01:57,547 --> 00:02:00,718</time>
and indeed, it is now widely supported.

<var>32</var>
<time>00:02:01,023 --> 00:02:03,395</time>
So it's supported, erm, it says on,

<var>33</var>
<time>00:02:03,700 --> 00:02:05,906</time>
on this website, on this website. And I use,

<var>34</var>
<time>00:02:06,296 --> 00:02:09,616</time>
it's [supported by][caniuse] around, erm, I have 96% of,

<var>35</var>
<time>00:02:09,617 --> 00:02:12,441</time>
erm, I have [96% of browsers globally][caniuse].

<var>36</var>
<time>00:02:13,150 --> 00:02:17,721</time>
Which is pretty good. Erm, the one

<var>37</var>
<time>00:02:17,722 --> 00:02:20,948</time>
thing that the term people might be asking now is how,

<var>38</var>
<time>00:02:21,029 --> 00:02:23,366</time>
how to, Why you position, erm,

<var>39</var>
<time>00:02:23,367 --> 00:02:25,408</time>
how I push the native dialog,

<var>40</var>
<time>00:02:25,601 --> 00:02:29,627</time>
erm, on the page. Erm, it is,

<var>41</var>
<time>00:02:29,628 --> 00:02:32,692</time>
erm, it uses the CSS fixed,

<var>42</var>
<time>00:02:33,099 --> 00:02:35,242</time>
erm, fixed.

<var>43</var>
<time>00:02:35,243 --> 00:02:38,772</time>
Fixed, eh,

<var>44</var>
<time>00:02:38,783 --> 00:02:41,305</time>
Position. Er, and so, erm, I went to this research, erm,

<var>45</var>
<time>00:02:41,306 --> 00:02:44,270</time>
and came up with quite a,

<var>46</var>
<time>00:02:47,670 --> 00:02:49,936</time>
Erm, simple, erm, [CSS style sheet][css].

<var>47</var>
<time>00:02:50,528 --> 00:02:54,520</time>
Here we are, it's only 50 lines long.

<var>48</var>
<time>00:02:54,521 --> 00:02:58,850</time>
Erm, and that allows you to position,

<var>49</var>
<time>00:02:58,851 --> 00:03:01,522</time>
based on a data attribute.

<var>50</var>
<time>00:03:02,832 --> 00:03:06,811</time>
Erm, so a `data-position` attribute.

51</var>
<time>00:03:07,929 --> 00:03:11,848</time>
Erm, these are the sort of values that you expect,

52</var>
<time>00:03:11,849 --> 00:03:14,930</time>
so top, bottom, left, right. And those results,

53</var>
<time>00:03:14,931 --> 00:03:20,698</time>
in full height and full with modal modals.

54</var>
<time>00:03:21,816 --> 00:03:23,911</time>
And then you can also use things like top,

55</var>
<time>00:03:23,912 --> 00:03:26,412</time>
hyphen, left, top, hyphen, right.

56</var>
<time>00:03:26,413 --> 00:03:28,687</time>
Bottom, hyphen, left, bottom,

57</var>
<time>00:03:28,688 --> 00:03:31,070</time>
hyphen, right. As well.

58</var>
<time>00:03:31,071 --> 00:03:34,189</time>
So, there you go.

59</var>
<time>00:03:34,199 --> 00:03:38,449</time>
this is, erm, and here's a [basic sort of demo][pen] that I put together,

<var>60</var>
<time>00:03:38,450 --> 00:03:41,445</time>
er, that uses this style sheet.

<var>61</var>
<time>00:03:41,446 --> 00:03:45,073</time>
As you can see, as you move,

<var>62</var>
<time>00:03:45,109 --> 00:03:50,510</time>
as you click on the buttons, and

<var>63</var>
<time>00:03:51,462 --> 00:03:56,434</time>
it moves the modal dialog around the screen by

<var>64</var>
<time>00:03:56,435 --> 00:04:07,467</time>
setting this data attribute.

<var>65</var>
<time>00:04:07,468 --> 00:04:12,035</time>
So, really, that's, hopefully, that's really

<var>66</var>
<time>00:04:12,036 --> 00:04:13,315</time>
handy, and would be a really useful tool for people building websites, and want

<var>67</var>
<time>00:04:13,316 --> 00:04:15,153</time>
to, make sure they're accessible.

[npm]: https://www.npmjs.com/package/dialog-position
[gh]: https://github.com/nfreear/native-html/tree/main/dialog/position
[css]: https://github.com/nfreear/native-html/blob/main/dialog/position/index.css
[pen]: https://codepen.io/nfreear/pen/dPyLYyN
[loom]: https://www.loom.com/share/51892e0880d84ee8a79c5765123af051?sid=ca874ff0-db12-4ada-b10b-24e747a445e7
[embed]: https://www.loom.com/embed/51892e0880d84ee8a79c5765123af051?sid=511fc613-305d-49b4-a0ed-71a2505fd238
[dlg]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[caniuse]: https://caniuse.com/dialog
  "Can I use: 'dialog'? 96% support globally (April 2025)"
[apg]: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
[dialog.js]: https://github.com/w3c/aria-practices/blob/main/content/patterns/dialog-modal/examples/js/dialog.js
  "dialog.js (333 lines), on GitHub"
