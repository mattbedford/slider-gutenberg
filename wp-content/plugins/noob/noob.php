<?php

/*
* Plugin Name:  Noob container block
*/

add_action( 'init', 'noob_init' );
function noob_init() {
	register_block_type( __DIR__ . '/build' );
}