<?php
add_filter('use_block_editor_for_post', '__return_false', 10);
// Add the main menu item
function custom_admin_menu() {
    add_menu_page(
        'Banglalink',            // Page title
        'Banglalink',            // Menu title
        'manage_options',        // Capability required
        'banglalink_menu',       // Menu slug
        'banglalink_menu_page',  // Callback function
        'dashicons-admin-generic' // Icon (optional)
    );

    add_submenu_page(
        'edit.php?post_type=screen',       // Parent slug
        'Screens Builder',       // Page title
        'Screens Builder',       // Menu title
        'manage_options',        // Capability required
        'screens_builder',       // Menu slug
        'screens_builder_page'   // Callback function
    );

    add_submenu_page(
        'edit.php?post_type=screen',
        'Components',
        'Components',
        'manage_options',
        'components',
        'components_page'
    );

    add_submenu_page(
        'edit.php?post_type=screen',
        'Settings',
        'Settings',
        'manage_options',
        'settings',
        'settings_page'
    );
}
add_action('admin_menu', 'custom_admin_menu');


// Callback functions for each submenu page
function banglalink_menu_page() {
    // Main menu page content goes here
}

function screens_builder_page() {
    ?>
    <div class="wrap">
        <!-- <a href="http://localhost/wordpress/wp-admin/admin.php?page=banglalink_menu"><button>< Back</button></a> -->
        <!-- <h1>BL Screen Builder</h1> -->
		<div id="bl-react-page-builder"></div>
    </div>
    <?php
}

function components_page() {
    ?>
    <div class="wrap">
		<div id="bl-react-page-builder"></div>
    </div>
    <?php
}

function settings_page() {
    // Settings page content goes here
}
