---
published: false
layout: post
title:  Travis-CI with multiple languages
date:   2016-03-19 08:45:00
x-created: 2016-03-19 08:45:00
categories:
tags:   [ testing, java, Node, php ]
---


## Open-media-player-themes

In the case of [Open Media Player][], the primary language is PHP, and the
primary dependency manager is [Composer][].
Travis-CI standard ('_Precise_') servers contain Node and [npm][], so we create
an [`npm-install`][omp-github] script entry in the `composer.json`, and run it like so:

```sh
composer npm-install
#
#> npm install -g grunt-cli
# ...
#> npm install grunt grunt-contrib-jshint grunt-contrib-csslint
```

As can be [seen on Travis][omp-travis], the above command installs the [Grunt][]
command-line client, JSHint for Grunt and so on.

...


## nQuire-it web

...


## Current versions

* Node: v0.10.36
* npm:  1.4.28
* Java version: 1.7.0_80 (vendor: Oracle)
* Apache Maven: 3.2.5




[iet-ou]: https://travis-ci.org/IET-OU/
[nfreear]: https://travis-ci.org/nfreear/
[omp-travis]: https://travis-ci.org/IET-OU/open-media-player-themes/builds/116957053#L160
    "Output from `npm-install` and other scripts running on Travis-CI"
[omp-github]: https://github.com/IET-OU/open-media-player-themes/blob/master/composer.json#L48-L51
    "`npm-install` script defined in composer.json"
[nq-travis]: https://travis-ci.org/IET-OU/nquire-web-source/jobs/116958919#L154
[nq-github]: https://github.com/IET-OU/nquire-web-source/blob/greek/package.json#L48-L58

[common runtimes]: https://docs.travis-ci.com/user/ci-environment/#Runtimes "OpenJDK and Node are common"
[Open Media Player]: http://iet-ou.github.io/open-media-player/
[Composer]: https://getcomposer.org/
[npm]: https://www.npmjs.com/ "Node Package Manager"
[Grunt]: http://gruntjs.com/ "Grunt: The JavaScript Task Runner"


[End]: //end.
