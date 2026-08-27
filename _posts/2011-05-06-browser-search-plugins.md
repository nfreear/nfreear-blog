---
layout: post
title:  Browser search plugins
date:   2011-05-06 21:25:00
categories:
tags:   browser  CloudEngine  cloudworks  JIME  OU  plugin  search
x-source: http://freear.org.uk/content/browser-search-plugins
x-comment-count: 1
x-comments:
  - id: 72
    by: sabbi (not verified) | Wed, 28/12/2011 - 10:57
    text: I am really impressed by this blog. I have always found it informative and updated
---



In spare moments in the past few weeks I've been revisiting [browser search plugins][plugins].
I've created plugins for [CloudEngine][]/ [Cloudworks][], [iSpot][], the
[Journal of Interactive Media in Education][jime], and The Open University.
I thought I'd jot down what they are, why they're useful and how I'm integrating them into my projects.


[Screenshot of adding Cloudworks search to Firefox.][img-1]

When you use browsers like Firefox and Internet Explorer you may notice the search box
next to the browser's address bar (in Chrome it's combined with the address bar, as the _omni-bar_).
This allows you to search directly in, for example, Google without visiting the Google site first.
That, in short, is a browser search plugin.
Firefox typically comes installed with a number including ones for Google, Yahoo, Wikipedia and Bing.

And, it's fairly easy to write a plugin for your own site, based on the
[OpenSearch description format][opensearch], a specification for an XML file.
This will make it easier to search your site and encourage people to come back.

Pre-requisites for a search plugin include interesting content to search, and a search function for your site.
If you don't have your own search, you can always use [Google Custom Search][] to create a search-engine.

At the heart of the plugin XML is a template for the search URL, as shown in the code snippet below.
The `{searchTerm}` placeholder will be replaced with your query-text when you run a search.
Follow the tips from Mozilla to create the plugin.
Remember to use your site's favicon and so on.


{% highlight 'xml' %}
<?xml ...?>
<OpenSearchDescription xmlns=... >
    <ShortName> Cloudworks </ShortName>

    <Url type="text/html" template="http://cloudworks.ac.uk/search/result?q={searchTerms}" />
    ...
</OpenSearchDescription>
{% endhighlight %}


The next stage is to test it out. Create a HTML file that refers to your plugin XML like so:


{% highlight 'html' %}
<link
    rel="search"
    type="application/opensearchdescription+xml"
    title="MY SEARCH"
    href="local/opensearch_desc.xml" />
{% endhighlight %}


As shown in the screen shot at the top, when you view a HTML page containing the
search auto-discovery `<link>` in Firefox you will have the opportunity to install the plugin.

So, you've tested the plugin. What next?
To allow others to use the plugin submit it to the [Mycroft search plugin][] database.
For example, here are [plugins for searching the Moodle forums, docs, code][moodle] etc.

Mycroft is great, but you'll also want to integrate the plugin in your own site.
Use the auto-discovery `<link>` above for compatibility with Firefox.
For Internet Explorer and to make the plugin more visible consider some Javascript like the snippet below.
This is a jQuery script to detect if the browser supports OpenSearch-based plugins.
It adds a `<button>` on the page corresponding to each search <link>.

{% comment %}
{% gist "nfreear/959786" %}

<!-- file-drupal-block_search-plugin-buttons-jquery-js -->
<!--{% gist "parkr/931c1c8d465a04042403" %}-->
{% endcomment %}

There is an [OpenSearch plugin for Drupal][drupal], and the snippet above can be
used directly in a custom Drupal block -- see the buttons at the bottom of this page.
The plugins support Firefox, Internet Explorer and the Chrome browser.

We'll be rolling out a [search plugin for Cloudworks][cw-plugin] in the next week.
And there are [more on Mycroft][plugins].

I end by pointing to the tools I used while writing the plugins -- Dropbox, [Bitbucket][] and [Github Gists][].
You can get started just using a browser, text editor, Google Custom Search and Mycroft.

Happy searching!


[moz]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sidebar/Adding_search_engines_from_Web_pages

[img-1-db]: https://dl.dropbox.com/u/3203144/search/addsearch-cloudworks-fx3.png
[img-1]: https://flickr.com/photos/nfreear/22395250458#!__EMBED_ME__

[plugins]: http://mycroft.mozdev.org/search-engines.html?author=Nick+Freear
[CloudEngine]: http://getcloudengine.org/
[Cloudworks]: http://cloudworks.ac.uk/
[cw-plugin]: http://cloudworks.ac.uk/search?plugin=1
[iSpot]: http://ispot.org.uk/
[jime]: http://jime.open.ac.uk/
[opensearch]: http://opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document
[Google Custom Search]: https://google.com/cse/
[Mycroft search plugin]: http://mycroft.mozdev.org/
[moodle]: http://mycroft.mozdev.org/search-engines.html?name=moodle
[drupal]: https://drupal.org/project/opensearch
[Bitbucket]: https://bitbucket.org/nfreear/search-plugins
[GitHub Gists]: https://gist.github.com/nfreear


[End]: end
