---
published: false
layout: post
title:  nQuire-it in Greek, IET-Weblate and stuff
date:   2016-01-06 18:00:00
x-created: 2016-01-06 14:20:00
tags:   [ Angular.JS, translation ]
---


Happy New Year!


I've had a positive start to 2016, releasing some functionality that we
were working on at the end of last year.

nQuire-it is a project lead by [Mike Sharples][] here in IET.
A main artifact from the project is the [nQuire-it web site][nQuire-it], which
allows anyone to register and create missions and participate in other people's missions.
There are various types of missions. _Sense-it_ missions
can involve automatically collecting sensor data from your phone,
for example, your location, speed, or the ambient temperature.
The site blends scientific discovery, social aspects and ideas from gaming.

nQuire-it is attracting a fair amount of interest and is starting to be used
in a diverse range of projects.
A colleague of ours, recently [Koula Charitonos][] attracted a grant from the British Academy.
The grant involves Koula and a network of other teachers who work in Greek schools,
in London, Milton Keynes and Leicester.
To fulfill the grant, we have been working to make the user interface of nQuire-it
translatable into different languages.

A quick note on the architecture of the nQuire-it web site.
It is divided into a backend built on Java and the Spring framework, and linked to a MySQL database.
The frontend is built on Angular.JS, with SASS/SCSS.

Greg Roach laid a lot of the foundations for internationalizing nQuire-it.
Localization is achieved purely in the frontend, using `angular-gettext`.
The workflow uses Node.js, [npm][] and [Grunt][].


### IET-Weblate

...

### Angular.JS

...

### Translation contributors

Koula Charitonos, Marina Charalampidi (external), Cristián Rizzi (external), Maxime Lasserre (external), Greg Roach, Nick Freear, Mike Sharples. (Lots of external collaboration ;).)


---

A _sense-it_, _spot-it_ or _win-it_ mission. Sense-it missions use the sensors on your mobile phone to collect data, for example your location.




[IET-Weblate]: http://weblate.iet.open.ac.uk
[nQuire-it]: http://www.nquire-it.org
[Mike Sharples]: http://iet.open.ac.uk/people/mike.sharples
[Mike.2]: http://www.open.ac.uk/iet/main/people/ms8679
[Koula Charitonos]: http://iet.open.ac.uk/people/k.charitonos
[Koula Charitonos.2]: http://www.open.ac.uk/iet/main/people/kc4683
[Greg Roach]: https://github.com/fisharebest "@fisharebest"

[npm]: https://github.com/IET-OU/nquire-web-source/blob/greek/package.json
    "Node package manager – package.json"
[Grunt]: https://github.com/IET-OU/nquire-web-source/blob/greek/Gruntfile.js#L15-L49 "Gruntfile.js"


---
