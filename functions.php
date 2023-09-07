<?php

function load_scripts() {

    $script_name = 'main';

    // register our main script but do not enqueue it yet.
    wp_register_script( $script_name, get_stylesheet_directory_uri( __FILE__ ) . '/assets/dist/bundle.js', array(), filemtime(get_stylesheet_directory() . '/assets/dist/bundle.js'), false );

    // add php-vars to dom CDATA so JS can use.
    // wp_localize_script( $script_name, 'wp_ajax_params', [
    //     'ajaxurl' => site_url() . '/wp-admin/admin-ajax.php',
    // ] );

    wp_enqueue_script( $script_name );

};
add_action( 'wp_enqueue_scripts', 'load_scripts' );
