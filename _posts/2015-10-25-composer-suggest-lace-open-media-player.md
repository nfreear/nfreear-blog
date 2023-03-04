---
layout: post
title:  Composer-suggest, JuxtaLearn, LACE & Open Media Player
x-created: 2015-10-25 13:51:00 +0000
date:   2015-11-04 17:15:00Z
categories:
tags:   php  composer  LACE  JuxtaLearn  ouplayer  plugin  wordpress
---


Over the course of a number of recent development phases in different software projects,
I've been working to simplify installation and dependency management, while leaving room
for the sort of experimentation required in research projects (indeed, many software projects?)

Way back in November 2013, I was working for [Gill Clough][] on the
[Tricky Topic tool][ttt], for the [JuxtaLearn][] European funded project.
Initial work for the tool was done by [Martin Hawksey][], and built on WordPress.
When I took over, I decided to use [Git submodules][] to manage the dependencies on
WordPress, third-party plugins, and custom plugins being developed for the project.

You can [see what this looks like on GitHub][github-1] in the first screen-shot ...


[A screen shot of submodules as they appear on GitHub - OER research hub & JuxtaLearn][img-1]


Some potential benefits to note about Git submodules -- you can see the dependencies,
and their Git SHA-1 sums directly in GitHub, as the above screen shot shows.
However, as anyone who has tried submodules tends to realise, their are a [number][]
of [drawbacks][yust].

There are [alternatives][alt], built to work fairly closely with Git.
However, these would all require evaluation, and would probably prove difficult
to support in our small, busy team.
So, after some experimentation, I concluded it was safer to adopt the _de facto_
standard dependency-manager for PHP, [Composer][], in my next project.
This was the [LACE Evidence Hub][LACE-EH], for [Rebecca Ferguson][] and [Doug Clow][].

The LACE Evidence Hub was also built on WordPress, and grew in part out of the work
on the [OER Research Hub][]. Discoveries that helped me decide on Composer were [this 2013 post][],
and the [WordPress Packagist][] repository.

A requirement that became apparent, during the work for LACE, and later
[Open Media Player][], was the ability to enable (and disable), optional packages
in the `composer.json` manifest. The `composer.json` schema allows for the inclusion of
[suggestions][], however by default, these are merely displayed to the developer --
they aren't used by Composer.

So, over the course of LACE and Open Media Player, I developed the
[`composer-suggest`][suggest] [plugin][].

The modified use of Composer [suggestions][] involves JSON containing a
package name on the left (eg. `wpackagist-plugin/wp-postratings`), and on the right
a string that starts with a precise version constraint and a semi-colon (`1.82;`),
followed by free text that can optionally contain tags (eg. `postratings`, `[LACE]`...).

Here's a short JSON example:

{% highlight json %}
"suggest": {
    "wpackagist-plugin/wp-postratings": "1.82; postratings [LACE] & [OERRH]"
}
{% endhighlight %}


Here is a [longer example][ex-2]:

{% highlight json linenos %}
"require": {
    "php": ">=5.3.3",
    "fancyguy/webroot-installer": "1.1.0",
    "nfreear/composer-suggest": "^1.1",

    "wordpress/wordpress": "4.1",

    "wpackagist-plugin/google-universal-analytics": "2.4.2",
},
"suggest": {
    "wordpress/wordpress": "4.3; WP-4.3.x",
    "wordpress/wordpress": "4.3.1; WP-4.3.1 / LAC-E only for now!",

    "wpackagist-plugin/facetious": "1.1.4; wp-facet [LAC-E] & [OERR-H] projects",
    "cftp/facetious": "dev-master; cftp-facet-1.2 [LAC-E] project",
    "wpackagist-plugin/wp-postratings": "1.82; postratings [LACE] & [OERRH]"
}
{% endhighlight %}


Some points worth noting:

1. The package `../google-universal-analytics` is always required;
2. Their are two optional WordPress versions, which can override the _default_ version (4.1);
3. Almost all the `suggestions` use a precise version constraint -- this is safer!
4. The `composer.json` validates -- if the `composer-suggest` plugin is not used
  Composer falls back to its default behaviour.


After earlier _false starts_, the keywords mentioned above are used in a `.env`,
which is loaded via [phpdotenv][]. The `NF_COMPOSER_SUGGEST` environment variable
can either contain a single keyword, eg. `LACE`, or a [`preg_match`][]-compatible
regular expression.

A simple example of a single keyword in the `.env` file:


{% highlight bash %}
# LACE Evidence Hub - single keyword.
NF_COMPOSER_SUGGEST = "LACE"
{% endhighlight %}

And, a more [complex example][ex-1e] of a regular expression in the `.env` file -- all suggestions containing the pipe-separated keywords will be installed:

{% highlight bash %}
# LACE - regular expression.
NF_COMPOSER_SUGGEST = "(LACE|Exp-LA|CFTP-Facet-1.2|WP-4.3.1)"
{% endhighlight %}


Referring back, you can see that the `WP-4.3.1` in the regular expression, equates
to [line 12 of the `composer.json` example above](#p-14).

The only potential drawbacks to the use of `composer-suggest`:

1. You probably can't commit the `composer.lock` file to your code repository;
2. You need to specify quite tight version constraints to reduce the effect of the point 1.


In conclusion, the [`composer-suggest` plugin][suggest] provides a light-weight,
simple to use method to enable and disable optional packages to fine-tune your Composer-based project.

In the case of LACE, this enables us to try third-party WordPress plugins on the
test server, and then deploy them to the live server at our leisure all with the
same code base. In [Open Media Player][], it enables us to present a core of
requirements, and then a simple means to allow some options, for example adding
more oEmbed providers.

All this within a conventional Composer-based workflow.



[Gill Clough]: https://twitter.com/gillclough
[Doug Clow]: https://twitter.com/dougclow
[Rebecca Ferguson]: https://twitter.com/R3beccaF
[Martin Hawksey]: https://mashe.hawksey.info/2013/10/building-an-evidence-hub-plugin-for-wordpress/
[OER Research Hub]: http://oerresearchhub.org/ "OER Research Hub: open educational resources"
[ttt]: http://trickytopic.juxtalearn.net/ "JuxtaLearn Tricky Topic tool"
[JuxtaLearn]: http://juxtalearn.eu/
[Open Media Player]: http://iet-ou.github.io/open-media-player/
[Git submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[github-1]: https://github.com/IET-OU/oer-evidence-hub-org/tree/juxtalearn "JuxtaLearn branch on GitHub, November 2013 – November 2014."
[number]: https://startpage.com/do/search?query=Git+submodules+disadvantages
[alt]: http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/ "By Nicola Paolucci, May 16, 2013"
[yust]: http://codingkilledthecat.wordpress.com/2012/04/28/why-your-company-shouldnt-use-git-submodules/
    "By Amber Yust, April 28, 2012"
[LACE-EH]: http://evidence.laceproject.eu/

[img-1]: https://flickr.com/photos/nfreear/22574418285!__EMBED_ME__

[this 2013 post]: https://roots.io/using-composer-with-wordpress/
    "Using Composer with WordPress, by Scott Walkinshaw, August 18, 2013"
[WordPress Packagist]: http://wpackagist.org/
    "This site mirrors the WordPress plugin and theme directories as a Composer repository."

[Composer]: https://getcomposer.org/
[plugin]: https://getcomposer.org/doc/articles/plugins.md
[suggestions]: https://getcomposer.org/doc/04-schema.md#suggest
[suggest]: https://packagist.org/packages/nfreear/composer-suggest "'composer-suggest' on Packagist"
[code]: https://github.com/nfreear/composer-suggest "'composer-suggest' on GitHub"
[ex-1]: https://github.com/IET-OU/open-media-player/blob/2.x/composer.json#L33-L36
[ex-1e]: https://github.com/IET-OU/open-media-player/blob/2.x/application/config/.env-generic#L7
[ex-2]: https://github.com/IET-OU/oer-evidence-hub-org/blob/CR40-composer/composer.json#L46-L80
[ex-2e]: https://github.com/IET-OU/oer-evidence-hub-org/blob/CR40-composer/.env-example#L9

[phpdotenv]: https://github.com/vlucas/phpdotenv
[`preg_match`]: http://php.net/manual/en/function.preg-match.php "PHP function, 'preg_match'"


[End]: end
