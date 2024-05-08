<?php
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
    
    // Add submenus under the main menu item
    add_submenu_page(
        'banglalink_menu',       // Parent slug
        'Screens Builder',       // Page title
        'Screens Builder',       // Menu title
        'manage_options',        // Capability required
        'screens_builder',       // Menu slug
        'screens_builder_page'   // Callback function
    );
    
    add_submenu_page(
        'banglalink_menu',
        'Page Templates',
        'Page Templates',
        'manage_options',
        'page_templates',
        'page_templates_page'
    );

    add_submenu_page(
        'banglalink_menu',
        'Components',
        'Components',
        'manage_options',
        'components',
        'components_page'
    );

    add_submenu_page(
        'banglalink_menu',
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
        <h1>
			<a href="http://localhost/wordpress/wp-admin/admin.php?page=banglalink_menu"><button>< Back</button></a>
			BL Screen Builder
		</h1>
		<div id="bl-react-page-builder"></div>
    </div>
    <?php
}



function page_templates_page() {
    // Page Templates page content goes here
}

function components_page() {
    // Components page content goes here
}

function settings_page() {
    // Settings page content goes here
}
