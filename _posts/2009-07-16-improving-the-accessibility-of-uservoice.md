---
layout: post
title:  Improving the accessibility of UserVoice
date:   2009-07-16 12:01:00
categories:
tags:   [ accessibility, feedback, javascript,  uservoice ]
x-source:  http://freear.org.uk/content/improving-accessibility-uservoice
x-comment-count: 4
x-comments:
  - id: 3
    by: Scott Rutherford <http://www.uservoice.com> (not verified) | Sat, 18/07/2009 - 17:25
    subject: This is now fixed!
    text: >
      Hi Nick,

      I believe we have now fixed this issue, thanks for bringing it to our attention. Are you still having issues with the main site in Firefox? If so, do you think you could send more information on it to support?

      Thanks, Scott Rutherford, CTO Uservoice
  - id: 4
    by: nick | Thu, 23/07/2009 - 17:13
    subject: "Re: This is now fixed - partly!"
    text: >
      Hi Scott,

      First, thank you for popping by and taking the time to react positively. (I can confirm that the site works fine in Firefox 3.) ...
  - id: 5
    by: Joshua Rudd (not verified) | Thu, 10/09/2009 - 06:29
    text: >
      Nick -

      Thanks again for the feedback. We've recently implemented some other accessibility improvements on our feedback sites, and are looking back at these recommendations again. I think the way we may approach "Point C" is to provide two links for screen readers: 1) for the javascript popup and 2) a direct link to the feedback site.

      Regarding "Point B", I'm not sure this provides a lot of help because once the user clicks on the modal dialogue the tab is no longer active or in focus.

      Joshua Rudd, UX, UserVoice.com
---


We are currently testing a Web site with real users and naturally we're requesting feedback.
To that end we've signed up with [UserVoice][] (<del>their [main site][] doesn't
seem to be accessible in Firefox</del> - not an issue, 23/07).
You add some simple Javascript to your page, and the visitor sees a neat "_Feedback_" tab on the left or right.
Click the tab with your mouse and a dialogue box pops up with a form for your comments.

![A screen shot of the Feedback box][img-1]

A screen shot of the Feedback dialogue box on blog.UserVoice.com - Firefox 3.

So far, so flawed (see update). A simple check with a [screen reader][] reveals that there is no text for the feedback link - see the graphic below. Furthermore, the "in page" dialogue that appears is not keyboard accessible - you can't tab around (a right mouse-click opens the feedback form in a new tab/ window, however this isn't explained). So paradoxically, a user who finds some accessibility problems on your brand-spanking new site is unlikely to be able report them. And you do want feedback on accessibility, right?

![Missing text for feedback tab][img-2]

The missing text for the feedback link, demonstrated using the [Firefox Accessibility extension, UIUC][uiuc].

Never fear. With a bit of static HTML, Javascript and styling your testers will be able to comment to their heart's content. Steps:

1. First, add the regular _UserVoice_ scripts to your page - I recommend putting
these just below the HTML body tag (or they can be at the end of the page).
Take the UserVoice configuration array out of the function call and name it `uv`.
And replace the `MY_SITE` and `MY_KEY` options:


{% highlight 'html', linenos %}
<body>
…
<script type="text/javascript">
 var uservoiceJsHost = ("https:"==document.location.protocol) ? "https://uservoice.com" : "http://cdn.uservoice.com"
 document.write(unescape("%3Cscript src='" +uservoiceJsHost+ "/javascripts/widgets/tab.js' type='text/javascript'%3E%3C/script%3E"))
</script>
<script type="text/javascript">
var uv={
  key: 'MY_KEY',
  host: 'MY_SITE.uservoice.com',
  forum: 'general',
  alignment: 'left', // 'left', 'right'
  background_color:'#d00',
  text_color: 'white',
  hover_color: '#04a',
  lang: 'en'
};
UserVoice.Tab.show(uv);
</script>
{% endhighlight %}


2. Immediately _above_ the Javascript put the following HTML - it adds 2 links, one
for the feedback page, another for email (an alternative channel if all else fails).
It is important to note that these links will be hidden for all but keyboard-only users - step 5.
Again, replace `MY_SITE` and ensure the email address is correct:

{% highlight 'html', linenos %}
<body>
  …
<ul id="uservoice-feedback-noscript" lang="en">
  <li><a href="http://MY_SITE.uservoice.com/pages/general#">Feedback page</a></li>
  <li><a href="mailto:contact@MY_SITE.com?subject=MY_SITE%20feedback">Email feedback</a></li>
</ul>
{% endhighlight %}

3. As our project uses the [YUI libraries][yui] I'm using the same my example.
    So, you may need to add these includes (other [libraries][] are available):


{% highlight 'html', linenos %}
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/yahoo/yahoo-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/event/event-min.js"></script>
{% endhighlight %}

4. Now add the critical piece of Javascript, below your YUI library includes.

{% highlight 'html', linenos %}
<script type="text/javascript">
YAHOO.util.Event.onAvailable('uservoice-feedback-tab', function(){
  var no = document.getElementById('uservoice-feedback-noscript');
  var tab= document.getElementById('uservoice-feedback-tab');
  var el = document.createElement('span');
  tab.onfocus= function(){ tab.style.backgroundColor = uv.hover_color };
  tab.onblur = function(){ tab.style.backgroundColor = uv.background_color; };
  tab.appendChild(el);
  el.innerHTML = 'Feedback mouse popup';
  el.className = no.className = 'uservoice-accesshide';
});
</script>
{% endhighlight %}


And, add these style declarations to your page or external CSS file (note the
`:active` pseudo-selector is a fix for Internet Explorer 6 - it doesn't recognise `:focus`):

{% highlight 'css', linenos %}
.uservoice-accesshide {
  position:absolute;
  top:-999px;
  display:block;
  width:100%;
  margin:0;
}
.uservoice-accesshide a:focus, .uservoice-accesshide a:active {
  position:fixed;
  top:2px;
  left:5px;
  padding:2px;
  background:#d00;
  color:#fff;
}
{% endhighlight %}


![Corrected text][img-3]

A test page, with new links and corrected text.

[Try this test page][test]

That's it. As the [test page][test] demonstrates you can now navigate around
with the tab key, and the new links appear when they receive focus.
The Javascript in step 4 picks up the hover colour and applies it to the on-focus state.
An alternative would be to use styles directly.
And, the link text will need to be localized for non-English speaking audiences.

Comments welcome!

---

I realised I need to be more specific on the accessibility issues. Added, 23 July:

1. Missing text for the Feedback tab-link – an issue for screen reader users etc.
(the text should be "Feedback mouse popup" or similar, not just "Feedback" - to reflect the default left mouse button/Enter key behaviour).
2. The background colour of the Feedback tab changes on mouse over (CSS `:hover`),
but not when it receives keyboard focus (use CSS `:hover`, `:focus`, `:active` - `:active` for Internet Explorer 6 bug.)
3. The default left mouse button/Enter key behaviour for the Feedback tab is to open
an "in-page" popup, which is not keyboard accessible. And the tab-link is created by and relies on Javascript.
(It is therefore important to have alternatives that exist with Javascript disabled, one a link that simply opens the feedback page, another could be an email link, before the tab in the page-tabbing order.
Ideally, all the feedback links should be at the top of the page - this doesn't necessarily mean visible at the top.)
4. If the text-direction of the page is left-to-right (eg. English, other European languages),
then a Feedback tab that is placed on the right of the page will be hard to find for screen magnifier users.

![Get Satisfaction on Ocw Finder.com][img-4]

[Get Satisfaction][] run a similar service, with similar accessibility problems.


[UserVoice]: http://blog.uservoice.com/
[main site]: http://uservoice.com/
[uiuc]: http://firefox.cita.uiuc.edu/
[screen reader]: http://nvda-project.org/
[yui]: http://developer.yahoo.com/yui/event/ "Yahoo YUI Javascript libraries"
[libraries]: http://jquery.com/ "jQuery Javascript library"
[test]: http://freear.org.uk/example?a=uservoice
[Get Satisfaction]: http://getsatisfaction.com/

[img-1]: http://lh3.ggpht.com/_jU8d1WdVVKA/Sl9bPpgJawI/AAAAAAAAAuY/sSbfR_X2sHQ/s720/scr6_blog.uservoice.com_saf-pop.png
[img-2]: http://lh5.ggpht.com/_jU8d1WdVVKA/Sl5H05l_8gI/AAAAAAAAAs4/yCupC1GIv5E/s512/scr2_blog.uservoice.com_fx-ac-red.png
[img-3]: http://lh4.ggpht.com/_jU8d1WdVVKA/Sl5H1A4lymI/AAAAAAAAAs8/V46DT2cepyw/s512/scr3_blog.uservoice.com_fx-ac-red.png
[img-4]: http://lh3.ggpht.com/_jU8d1WdVVKA/Sl8MIqp5bpI/AAAAAAAAAtk/9F0n7QEjseU/s512/scr4_ocwfinder.com_getsatis_fx.png

[End]: end
