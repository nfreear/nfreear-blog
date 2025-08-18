/*!
  Nfreear blog task-runner | © 2016 Nick Freear | License: MIT.
*/

const PACKAGE_JSON = './package.json';
const CONFIG_YAML = './_config.yml';

module.exports = function (grunt) {
  'use strict';

  grunt.log.subhead('Running Nfreear build and tests...');

  grunt.initConfig({
    dir: '_posts',

    exec: {
      count: 'echo "Count of posts: " && ls _posts/*.md | wc -l',
      draft: 'jekyll serve --drafts --unpublished --future',
      serve: 'jekyll serve',
      gem: 'gem install github-pages',
      grep: runIf('grep', '! grep -r Config themes/applaud'),
      semistandard: '# node_modules/.bin/semistandard js/*.js',
      sfix: runIf('sfix', 'node_modules/.bin/semistandard --fix js/*.js'),
      rewrite: '../melody.phar run -vvv _bin/rewritemap.php && php -l _out/index.php'
    },

    sass: {
    },
    jshint: {
      options: {
        bitwise: true,
        curly: true,
        eqeqeq: true,
        futurehostile: true,
        // laxcomma: true,
        undef: true,
        esversion: 11, // Was: 8. // Was: 6.
        // https://github.com/jshint/jshint/blob/master/src/messages.js#L80
        // '-W033': true,    // Ignore Missing semicolon;
        // '-W030': true,    // Ignore Expected an assignment or function call and instead saw an expression;
        // '-W069': true,    // Ignore {a} is better written in dot notation;
        globals: { window: false, console: false }
      },
      blog: ['js/*.js', '!js/intensedebate/*'],
      grunt: {
        options: { node: true },
        files: { src: 'Gruntfile.js' }
      }
    },
    yamllint: {
      config: '_config.yml',
      travis: '.travis.yml'
    },
    // https://npmjs.com/package/grunt-link-checker
    // https://github.com/cgiffard/node-simplecrawler#configuration
    linkChecker: {
    },
    watch: {
      css: { files: '<%= dir %>/less/**/*.less', tasks: [] }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'exec:semistandard', 'egg', 'count']);

  grunt.registerTask('egg', function () {
    const PKG = require(PACKAGE_JSON);
    let config = grunt.file.read(CONFIG_YAML);

    config = config.replace(/(egg|rtt): .+/, 'egg: ' + rot13(PKG.egg)); // .replace(/build: .+/, 'build: ' + (new Date).toISOString());

    grunt.file.write(CONFIG_YAML, config);

    grunt.log.writeln('egg:', PKG.egg, rot13(PKG.egg));
  });

  grunt.registerTask('count', function () {
    const PKG = require(PACKAGE_JSON);
    const exec = require('child_process').execSync;

    const total = parseInt(exec('ls _posts/*.md | wc -l'));
    const drafts = parseInt(exec('grep "published: false" _posts/*.md | wc -l'));

    PKG['x-count'] = { drafts, posts: (total - drafts), total };

    grunt.file.write(PACKAGE_JSON, JSON.stringify(PKG, null, 2));

    grunt.log.writeln('count:', PKG['x-count']);
  });

  /* ------------------------------------------------------------------- */

  /* Only run this task if the current task matches pattern.
  */
  function runIf (pattern, cmd) {
    const theTask = grunt.cli.tasks.length ? grunt.cli.tasks[0] : null;
    if (theTask && theTask.match(pattern)) {
      // Matching named / non-default task.
      return cmd;
    }
    // 'default' task.
    return 'echo :noop';
  }

  function isVerbose () { /* eslint-disable-line no-unused-vars */
    return grunt.option('verbose') || grunt.option('debug');
  }

  // https://stackoverflow.com/questions/617647/where-is-my-one-line-implementation-of-rot13-in-javascript-going-wrong
  function rot13 (s) {
    return s.replace(/[A-Z]/gi, function (c) { return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
  }
};
