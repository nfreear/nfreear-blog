<?php
<<<CONFIG
packages:
    - "theseer/directoryscanner: ~1.3.1"
    - "vkbansal/frontmatter: ~1.3.2"
    # (symfony/yaml: 2.7.5)
    #- "devster/frontmatter: *"
CONFIG;
/**
* CLI to generate a rewrite map from Jekyll post frontmatter (PHP / Melody)
* Either, a `mod_rewrite` map, an `index.php` re-director, or ...?
*
*     Usage:  $  ../melody.phar run -vvv _bin/rewritemap.php
*
* @copyright Nick Freear, 15 October 2015.
* @link  https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritemap
*/

use VKBansal\FrontMatter\Parser;
use VKBansal\FrontMatter\Document;

define( 'PHP_OUT_FILE', '_out/index.php' );
define( 'REWRITE_RULE', 'RewriteRule  %s %s [R]');
define( 'JEKYLL_POST_FILE_RE', '@^(?<yr>\d{4})-(?<mo>\d{2})-(?<dy>\d{2})-(?P<slug>[\w-]+)\.@' );
define( 'YAML_MULTI_DOC_EXCEPT_RE', '@(^[-]{3}\n.+\n[-]{3}\n.+)([-]{3,})@ms' );
define( 'REDIRECT_STATUS', 'HTTP/1.1 307 Temporary Redirect' );

$limit = 20;


    $rewrite_ar = array();
    $rewrite_map[] = '# A rewrite map, for use in a "RewriteMap" rule.' . PHP_EOL;
    $rewrite_rules[] = '# For .htaccess file.' . PHP_EOL;
    $base_url = get_base_url();
    $file_ext = '.html';

    //$parser = new Devster\Frontmatter\Parser( 'yaml', 'markdown' );

    $scanner = new \TheSeer\DirectoryScanner\DirectoryScanner;
    //$scanner->addExclude('./*');
    $scanner->addExclude('./_drafts/*');
    $scanner->addInclude('*.md');
    $scanner->addInclude('*.markdown');
    $scanner->addInclude('./_posts/*');

    $idx = 0;
    foreach ($scanner('.') as $path => $item) {

        $content = file_get_contents( $path );

        // Try to prevent YAML exception - 'Multiple documents are not supported.'
        $content = preg_replace( YAML_MULTI_DOC_EXCEPT_RE, '$1\-\-\-', $content );

        try {
            $doc = Parser::parse( $content );
        } catch (Exception $ex) {
            fprintf( STDERR, "Exception: %s - %s\n", $ex->getMessage(), $path );
            exit( 1 );
        }
        $frontmatter = $doc->getConfig();

        if (! isset($frontmatter[ 'x-source' ])) {
            echo "#$idx. Skipping $path - no frontmatter / x-source" . PHP_EOL;
            continue;  //WAS: break;
        }
        if (isset($frontmatter[ 'permalink' ])) {
            $dest_path = $base_url . $frontmatter[ 'permalink' ];
        }
        elseif (preg_match( JEKYLL_POST_FILE_RE, $item->getFilename(), $matches )) {
            $m = (object) $matches;
            $dest_path = $base_url . "/$m->yr/$m->mo/$m->dy/$m->slug" . $file_ext;
        }
        else {
            fprintf( STDERR, "Error, path: %s\n", $item->getFilename() );
        }

        $source = parse_url($frontmatter[ 'x-source' ]);
        $source_path = $source[ 'path' ];

        $rewrite_ar[ $source_path ] = $dest_path;
        $rewrite_map[] = "$source_path  $dest_path";
        $rewrite_rules[] = sprintf( REWRITE_RULE, $source_path, $dest_path );


        if ($limit > -1 && $idx > $limit) break;
        $idx++;
    }

    // Dump the rules to stdout or ...?
    //$bytes = file_put_contents( '.htaccess-copy', implode( "\n", $rewrite_rules ));
    $bytes = write_php_file( $rewrite_ar );

    fprintf( STDERR, "PHP file written:  %s  (%d rewrite records)\n", PHP_OUT_FILE, count( $rewrite_ar ));



    function write_php_file( $rewrite_ar, $filename = PHP_OUT_FILE, $http_status = REDIRECT_STATUS) {
        $default_url = get_base_url();
        $template = <<<EOT
<?php
/*
    Auto-generated!  Time:  __TIME__  (Via: rewritemap.php)
*/

\$http_status = '$http_status';
\$default_url = '$default_url';
\$map_count = __COUNT__;
\$map = __MAP__;


    \$is_test = filter_input( INPUT_GET, 'test' );
    \$host = server_var( 'HTTP_HOST' );
    \$path = server_var( 'REDIRECT_URL' ); //REQUEST_URI
    \$script = server_var( 'SCRIPT_NAME' );
    \$root = str_replace( '/index.php', '', \$script );
    \$source = rtrim( str_replace( \$root, '', \$path ), '/' );


    if (isset( \$map[ \$source ]) || ! \$path) {
        if (! \$path) {
            \$dest = \$default_url;
            \$source = '/';
        } else {
            \$dest = \$map[ \$source ];
        }
        \$dest .= '?from=' . urlencode( 'http://' . \$host . \$path );

        if (\$is_test) {
            echo "<pre>REDIRECT (test):\\n  \$source\\n>>\\n  \$dest\\n\\n(\$http_status)" . PHP_EOL;

        } else {
            header( \$http_status );
            header( 'Location: '. \$dest );
        }
        exit;
    }

    header( 'HTTP/1.1 503 Service Unavailable' );
    var_dump( 'ERROR', \$path, \$root, \$source );


    function server_var( \$key ) {
        //Was: filter_input( INPUT_SERVER, \$key )
        return isset(\$_SERVER[ \$key ]) ? \$_SERVER[ \$key ] : null;
    }

#End.

EOT;
         $php = strtr( $template, array(
             '__MAP__' => var_export( $rewrite_ar, true ),
             '__COUNT__' => count( $rewrite_ar ),
             '__TIME__' => date( 'c' ),
         ));
         $bytes = file_put_contents( $filename, $php );
         return $bytes;
    }


function get_base_url() {
    $config_file = './_config.yml';
    $content = file_get_contents( $config_file );
    $has_config = preg_match( '@\nurl: "?+(?P<url>.+?)"?\n@', $content, $matches );

    return $matches[ 'url' ];
}

#End.
