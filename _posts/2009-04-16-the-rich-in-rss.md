---
layout: post
title:  The rich in RSS
date:   2009-04-16 10:21:00
categories:
tags:   [ event, Google Calendar, RememberTheMilk, RSS, standards ]
x-source:  http://freear.org.uk/content/rich-rss
---


Last month my colleagues and I had a team "hackday" – an opportunity to work
together (we often work individually on projects) and rapidly develop some software
prototypes. We had a few ideas beforehand, did a brainstorm then got down to
business in [the Digilab][]. It was a general success – however, we aren't ready
to show the results just yet – I'll update when we do ;). [Richard][], [Juliette][],
[Patrick][] and [Will][] worked with Twitter. [Sam][] and I put together an event
feed aggregator, using [Yahoo Pipes][].

[![Cartoon - Will's dad, Nomadic Thoughts][cartoon]][cartoon-src]

We used [RememberTheMilk][] and [Google Calendar][] feeds as examples, and I was
struck again - why don't people use existing standards? Specifically, why don't
the feeds provided by RTM and Google use the [RSS 1.0 Event module][event]? What
they do is markup (or not) the data for the event (start date, location etc.) in
HTML, in [RSS][] or [Atom][]. So, for RememberTheMilk we have,


```xml
{% highlight 'xml' %}
<entry>
  ...
  <id>tag:rememberthemilk.com,1999:tasks-nfre ...</id>
  <content type="xhtml">
    <div xmlns="">
    <div class="rtm_due"><span class="rtm_due_title">Due: </span>
        <span class="rtm_due_value">Thu 10 Apr 08 at 10:00AM</span></div>
    <div class="rtm_priority"><span class="rtm_priority_title">Priority: </span>
        <span class="rtm_due_value">none</span></div>
    ...
{% endhighlight %}
```

And for Google Calendar,

```xml
{% highlight 'xml' %}
<entry xmlns="http://www.w3.org/2005/Atom">
  <id>http://www.google.com/calendar/feeds/d4 ... </id>
  <published>2009-02-18T18:08:04.000Z</published>
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/g/2005#event"/>
  <title type="html">Quick ...</title>
  <summary type="html">
   When: Wed 18 Feb 2009 18:00 to 18:15 GMT<br>
   <br>Event Status: confirmed
  </summary>
  <author><name>Sam ...</name></author>
...
{% endhighlight %}
```


![Remember The Milk][rtm-img] ![Google Calendar][g-calendar-img]

Now, the examples above are useful for consumption by humans in a feed reader.
However, they are a pain to machine-parse. The HTML 'divs' in RTM are easier, but
you have to do something special for each calendar provider
(regular expressions for Google, yuck!)

The [RSS 1.0 Event module][event] was published in 2001. It defines the elements
`startdate`, `enddate` ([W3CDTF][]), `location`, `organizer` (person or body) and `type` (_fixed taxonomy ??_).
So the Google Calendar entry above becomes something like,


{% highlight 'xml' %}
<entry xmlns="..." xmlns:ev="http://purl.org/rss/1.0/modules/event/">
  <id>http://www.google.com/calendar/feeds/d4 ... </id>
  <published>2009-02-18T18:08:04.000Z
  <category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/g/2005#event"/>
  <title type="html">Quick ...</title>
  <ev:startdate>2009-02-18T18:00+00:00</ev:startdate>
  <ev:enddate>2009-02-18T18:15+00:00</ev:enddate>
  <ev:location> ... </ev:location>
  <ev:organizer>Sam ...</ev:organizer>
  <summary type="html">
   When: Wed 18 Feb 2009 18:00 to 18:15 GMT <br>
   <br>Event Status: confirmed
  </summary>
  <author><name>Sam ...</name></author>
...
{% endhighlight %}


So now we have data that is easily accessible to humans (via generic feed readers),
and to machines (specialist event parsers) - simple? _(The code samples above are
cut-down for illustration purposes.) [26 March, 3 April]_



[the Digilab]: http://digilab.open.ac.uk/
[Yahoo Pipes]: http://pipes.yahoo.com/
[Richard]: http://www.open.ac.uk/blogs/bioobsprojblog/
[Juliette]: http://www.jvvw.com/
[Patrick]: http://openpad.wordpress.com/
[Will]: http://technocrapy.wordpress.com/
[Sam]: http://twitter.com/sleicester
[cartoon]: http://www.anthroblogs.org/nomadicthoughts/archives/maya_cartoon.JPG
    "Cartoon, 'So how come it ends in 2012?' 'I ran out of space on the rock' -- Will's dad, Nomadic Thoughts"
[cartoon-src]: http://www.anthroblogs.org/nomadicthoughts/archives/2006/01/some_things_arc.html
[RememberTheMilk]: http://rememberthemilk.com/ "RememberTheMilk"
[Google Calendar]: http://google.com/calendar/ "Google Calendar"
[event]: http://web.resource.org/rss/1.0/modules/event/ "Really Simple Syndication -- 1.0 Event module"
[RSS]: http://en.wikipedia.org/wiki/RSS_(file_format) "Really Simple Syndication"
[Atom]: http://tools.ietf.org/html/rfc4287
[W3CDTF]: http://w3.org/TR/NOTE-datetime
[rtm-img]: http://static.rememberthemilk.com/img/logo.png "RememberTheMilk"
[g-calendar-img]: http://static.rememberthemilk.com/img/hp_ss_googlecalendar.png "Google Calendar"


[End]: end
