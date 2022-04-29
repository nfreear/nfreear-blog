/* eslint camelcase: 0 */

// import { getOpt } from 'https://cdn.skypack.dev/ndf-elements?min';

const LOC = window.location;

loadElementsJavascript();

async function loadElementsJavascript () {
  const LOCAL = /local=1/.test(LOC.search);
  const BASE_URL = LOCAL ? 'http://localhost:8080' : 'https://nfreear.github.io/elements';

  const MODULE = await import(`${BASE_URL}/index.js`); // ES11.
  const { getOpt } = MODULE;

  /* if (setOpt) {
    setOpt('templateHost', BASE_URL);
  } */

  console.debug('ndf-elements:', getOpt(), BASE_URL, MODULE);

  return MODULE;
}

/* Search redirect.
*/
(function (W, L) {
  if (L.pathname === '/' && L.href.match(/[?&]q=\w+/)) {
    W.location = '/search/' + L.search;
    if (W.console) { W.console.log('Redirect', L); }
    // throw [ "Redirect", L ];
  }
})(window, LOC);

/* eslint-disable *//* jshint ignore:start */ /*
(function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
  (i[r].q = i[r].q || []).push(arguments) }, i[r]. l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, window.document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
/* eslint-enable *//* jshint ignore:end */

window.jQuery(function ($) {
  'use strict';

  const W = window;
  const debug = W.location.search.match(/debug=1/); // /debug=([1-9])/
  const BLOG = $('#js-config').data();

  BLOG.debug = debug;

  $.NF_BLOG = BLOG;

  /* if (!W.console || !debug) {
    W.console = {
      debug: function () {},
      warn: function () {},
      log: function () {},
      info: function () {}
    };
  } else if (!W.console) {
    W.console = {
      info: function () {}
    };
  } /* */
  const console = W.console;

  /* Google Analytics.
  */
  // W.ga('create', BLOG.analytics_id, 'auto');
  // W.ga('send', 'pageview');

  // Event tracking: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
  $('a').on('click', function (ev) {
    const url = $(this).attr('href');
    const text = $(this).text();

    // Assumption: absolute URL === external link.
    if (url.match(/^https?:/)) {
      // W.ga('send', 'event', 'link', 'click', text + ' ' + url);

      console.debug('Track extern link click:', text, url);
    }

    // ev.preventDefault();
  });

  if (!W.location.search.match(/\?q=\w+/)) {
    $('#x-cse-loading').replaceWith(
      '<input name="q" id="gsc-i-id1" type="search" placeholder="Google custom search" required><button>Search</button>'
    );
    $('body').addClass('search-empty');
  }

  // DEPRECATED.
  /* Browser search plugin button - Firefox 2+ and IE 7+, OpenSearch.
  */
  const $plugin = $('[ role = search ] #plugin');
  const $search = $('link[ rel = search ]');

  /* if (W.external && ('AddSearchProvider' in W.external) && $plugin.length) {
    const $btn = $('<a role="button" >Add browser search plugin</a>')
      .attr('href', $search.attr('href'))
      .on('click', function () {
        console.debug('Search plugin:', $search.attr('href'));
        W.external.AddSearchProvider($search.attr('href'));
        return false;
      });
    $plugin.append($btn);
  } */

  /* Accessibility fixes.
  */
  $('header a.menu-icon').attr({
    role: 'button',
    title: 'Show/hide navigation',
    'aria-label': 'Show / hide navigation'
  })
    .on('click', function (ev) {
      $('header .trigger').toggle();

      ev.preventDefault();
    });

  W.setTimeout(function () {
    $('.gsc-input a.gsst_a').attr({
      role: 'button',
      title: 'Delete search',
      'aria-label': 'Delete search'
    });
  }, 3000);

  // Add per-paragraph/ chunk navigation.
  $('article p, article li, .highlight').each(function (cn, elem) {
    if (!elem.id) { // $el[ 0 ].id
      elem.id = 'p-' + (cn + 1);
    }
  });

  /* oEmbed / Open Media Player ..
  */
  if ($.fn.oembed) {
    $('a[ href *= _EMBED_ME_ ], a[ href *= ".ac.uk/pod/" ]').oembed(null, {
      oupodcast: { rgb: 'omp-purple' },
      youtube: { rgb: 'omp-orange' }
    },
    function (data, xundefined) {
      const m_title = data.html.match(/(title="[^"]+")/);
      const at_title = m_title ? m_title[1] : null;
      // Clean up Flickr embeds :(.
      if (data.provider_name === 'Flickr') {
        data.code = data.code.replace(/<\/div><div.+/, '</div>'); // .replace(/<script.+/, "");
        data.code = data.code.replace(/href/, at_title + ' href');
      }
      console.debug('onEmbed: ', data, xundefined);

      $.fn.oembed.insertCode(this, 'replace', data);
    });
  }

  $('a[ href *= _FRAME_ME_ ]').each(function () {
    const $link = $(this);
    const url = $link.attr('href').replace(/#!.+/, '');

    $link.replaceWith('<div class="frame-me"><iframe src="' + url + '"></iframe></div>');
  });

  $('a[ href *= _ME_ ]').each(function () {
    const $link = $(this);
    const url = $link.attr('href');
    const m = url.match(/#!?__?((BIG|[A-Z]+)_ME)_/i);
    const urlclean = url.replace(/#!.+/, '');
    // var text = $link.html().replace(/#!.+/, '');

    if (m) {
      $link.addClass(m[1].toLowerCase() + ' x-me').attr('href', urlclean); // .html(text);
    }
    console.debug('big-me: ', m);
  });

  /* Code-block line-numbers.
  */
  $('pre code').each(function (pidx, pre) {
    $(pre).find('.lineno').each(function (lidx, line) {
      $(line).attr('id', 'L' + (pidx + 1) + '-' + (lidx + 1));
    });
  });

  function rot13 (s) {
    return s.replace(/[A-Z]/gi, function (c) { return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
  }

  if (BLOG.rtt) {
    console.log(rot13(BLOG.rtt));
  }

  console.debug('main.js', debug, BLOG);
});
