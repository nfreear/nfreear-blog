---
layout: post
title:  Embed a Scratch applet in HTML5
date:   2010-05-23 01:19:00
categories:
tags:   applet  drum  embed  HTML5  java  scratch
x-source:  http://freear.org.uk/content/embed-scratch-applet-html5
x-comments: 1
x-comment-url: http://freear.org.uk/content/embed-scratch-applet-html5#comment-1361
---


For the past year I've been following the progress of HTML5 with interest.
And recently I've become interested in [MIT's Scratch][]. So naturally I've been
test embedding Scratch using it's Java applet in HTML5.
The [only article][] I've found so far on embedding Scratch in HTML5 contains a
number of errors and invalid markup, so I'm setting the record straight.

<!--more-->

First, the situation in [HTML 4.01][]/XHTML 1.0 – `<object>` is the preferred element, with `<applet>` deprecated.
So, `<applet>` is valid in HTML 4 Loose (XHTML 1.0 Transitional), but not HTML 4 Strict.

![Drum Kit 2.0, by technoguy][image]

Example embed for HTML 4.01:


{% highlight 'html' %}
<applet codebase="http://scratch.mit.edu/static/misc/" archive="ScratchApplet.jar"
        code="ScratchApplet" height="387" width="482">
   <param name="project" value="../../static/projects/technoguyx/355353.sb" >
   Your browser needs Java to view projects.
</applet>
{% endhighlight %}


In HTML5, the [`<applet>` element is obsolete][applet], not deprecated.
So, we use the [generic `<object>` element][object]. Also, we need an alternative to
the archive, code and codebase attributes. It took me a while to work out the solution,
with the help of the [W3C validator][w3c] – we can use the `<param>` element.

Now, the HTML5 code:


{% highlight 'html' %}
<!DOCTYPE html><html lang="en"><meta charset=UTF-8 >

<object tabindex="0" type="application/x-java-applet" height="387" width="482">
  <!--Generic parameters for all Java applets. -->
  <param name="codebase" value="http://scratch.mit.edu/static/misc/" >
  <param name="archive"  value="ScratchApplet.jar" >
  <param name="code"     value="ScratchApplet" >

  <!--Specific parameters. -->
  <param name="project"  value="../../static/projects/technoguyx/355353.sb" >
  Your browser needs Java to view projects.
</object>
...
{% endhighlight %}


Drum Kit 2.0, by [technoguy][].

Your browser needs [Java enabled][] to view projects.


[MIT's Scratch]: http://scratch.mit.edu/
[only article]: http://teachmeprogramming.com/How-to-Embed-Your-Scratch-Applet-in-HTML5.html
[HTML 4.01]: http://w3.org/TR/html401/index/elements.html#h-2
[image]: http://christopherave.files.wordpress.com/2009/10/drum-kit.jpg
[applet]: http://whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#the-applet-element
[object]: http://whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#the-object-element
[w3c]: http://validator.w3.org/ "World Wide Web Consortium validator service"
[technoguy]: http://scratch.mit.edu/projects/technoguyx/355353
[Java enabled]: http://java.com/en/download/help/enable_browser.xml
