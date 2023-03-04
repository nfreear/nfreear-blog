---
x-csp-disable: true
layout: post
title:  Rich GeoJSON popups for Leaflet
date:   2017-06-27 21:55:00Z
x-created: 2017-06-22 18:00
tags:   NPM  javascript  e-learning  map
og-desc:  Add GeoJSON-based templated popups to your Leaflet map. See the audio-player example.
og-image: https://c1.staticflickr.com/5/4266/35188676900_b385b4ec42_z.jpg
## og-image: https://c1.staticflickr.com/5/4253/35188195970_8e2fa3dd1e_z.jpg
og-image-alt: Example map harnessing 'geojson-popup' Javascript.
## x-footer-script-DEV: https://rawgit.com/nfreear/popup-geojson-map/master/src/popup-geojson-map.js
x-footer-script: https://unpkg.com/geojson-popup@2.0.0-beta#._.js
x-style-url: https://unpkg.com/leaflet@1.0.3/dist/leaflet.css
x-style: '.map{ min-height: 340px; } .leaflet-popup-content{ margin: 11px; } .leaflet-popup-content-wrapper{ border-radius: 6px; } .map h2{ font-size: 1.5em; }'
## x-style: '.map{ min-height: 300px; width: 110%; } .leaflet-popup-content{ margin: 11px; } .leaflet-popup-content-wrapper{ border-radius: 6px; } .map h2{ font-size: 1.5em; } h2,p {margin:0}'
---


I've always loved maps, and since my involvement with [iSpot][] I've been fascinated by online maps.
[Leaflet][] is a powerful Javascript library that provides a rich set of mapping functionality.
However, it can perhaps be a bit daunting.

A colleague, Peter Devine, asked for my help last year, and I came up with
a prototype Javascript library to add popups containing a HTML5 audio player
to a map, from a GeoJSON data file.

I've tidied up the Javascript, bundled it with [Lodash.template][] and [SuperAgent][]
using [Browserify][], and released [`geojson-popup` on NPM][npm].

Below, you can see an example map, with audio samples from locations in
Europe and North America, sourced mostly from [Freesound][].


<!-- ## [geojson-popup][npm]
[www.npmjs.org/package/geojson-popup][npm] -->

<div id="mapid" class="map wide ajax-loader"> Requires Javascript. </div>


The map is produced from the following components ...

1. A HTML container element, default ID = `mapid`:

```html
<p id="mapid"> Requires Javascript. </p>
```

2.. A template for the popup, embedded in the page:

```html
<script type="text/html" id="popup-template">
  <div class="audio-popup">
    <h2><%= title %></h2>
    <audio src="<%= audio_url %>" controls ></audio>
  </div>
</script>
```

3.. A configuration object:

```html
<script> MAP_CFG = { geoJson: '{cdn}/data/world-audio-geo-data.json' } </script>
```

4.. Lastly, Javascript includes for Leaflet, and `geojson-popup`:

```html
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
<script src="https://unpkg.com/geojson-popup@2.0.0-beta#._.js"></script>
```

The template contains placeholders like `<%= audio_url %>`.
These correspond to [properties in the GeoJSON file][eg]:

```json
"features": [
  {
    "type": "Feature",
    "properties": {
      "title": "raining on the roof of Jennie Lee Building.wav",
      "audio_url": "https://freesound.org/data/previews/92/92744_1315834-lq.mp3"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [ -0.7110, 52.0241 ]
    }
  }
]
```

This extensible one-to-one mapping between the template and the GeoJSON data
has great potential — it's simple, yet powerful!

* NPM: [geojson-popup][npm],
* GitHub: [popup-geojson-map][gh].

I'd love your thoughts and ideas, via the [comments](#comments),
to [@nfreear on Twitter][], and [on Facebook][].


[![geojson-popup on NPM][screenshot]][npm]

<!--[![geojson-popup on NPM][npm-svg]][npm]-->


<script type="text/html" id="popup-template" webc:keep>
  <div class="audio-popup">
    <h2><%= title %></h2>
    <span><%= description %></span> <a href="<%= credit_url %>">credit</a>
    <audio src="<%= audio_url %>" controls ></audio>
  </div>
</script>
<script webc:keep> MAP_CFG = { latLng: [ 53.9749, -11.500 ] } </script>
<script webc:keep src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>

<!--
{% comment %}
  [ 53.9749, -10.2626 ]
## [geojson-popup][npm]
[www.npmjs.org/package/geojson-popup][npm]

<script> MAP_CFG = { geoJson: '{cdn}/data/world-audio-geo.json' } </script>

<script src="https://unpkg.com/underscore@1.8.3/underscore-min.js"></script>
<script src="https://unpkg.com/superagent@3.5.2/superagent.js"></script>
<script src="https://unpkg.com/popup-geojson-map@1.0.0-beta#..js"></script>
{% endcomment %}
-->

[@nfreear on Twitter]: https://twitter.com/nfreear
[on Facebook]: https://facebook.com/nickfreear

[gh]: https://github.com/nfreear/popup-geojson-map "'geojson-popup' Javascript on GitHub"
[npm]: https://npmjs.com/package/geojson-popup "'geojson-popup' Javascript on NPMJS"

[lodash.template]: https://npmjs.com/package/lodash.template
[SuperAgent]: https://visionmedia.github.io/superagent/ "SuperAgent — elegant API for AJAX in Node and browsers"

[npm-stat-nf]: https://npm-stat.com/charts.html?author=nfreear&from=2017-06-02&to=2017-06-30
[npm-stat-blog]: http://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts
[npm-svg]: https://nodei.co/npm/geojson-popup.svg
[npm-svg-ss]: https://nodei.co/npm/simple-speak.svg
[screenshot]: https://c1.staticflickr.com/5/4266/35188676900_b385b4ec42_z.jpg

[iSpot]: https://ispotnature.org/
  "iSpot is an online nature community that connects beginners with experts and fellow enthusiasts."
[Leaflet]: http://leafletjs.com/
[Browserify]: http://browserify.org/ "Browserify lets you require('modules') in the browser..."
[Freesound]: https://freesound.org/
[eg]: https://github.com/nfreear/popup-geojson-map/blob/master/data/world-audio-geo.json?short_path=a088781#L12
  "'audio_url' property highlighted in an example GeoJSON data file, on GitHub."

[End]: //
