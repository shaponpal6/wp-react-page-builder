<?php
// Register Custom Post Type
function blpage_post_type() {

	$labels = array(
		'name'                  => _x( 'Screens', 'Post Type General Name', 'blpage' ),
		'singular_name'         => _x( 'screen', 'Post Type Singular Name', 'blpage' ),
		'menu_name'             => __( 'BL Screens', 'blpage' ),
		'name_admin_bar'        => __( 'BL Screens', 'blpage' ),
		'archives'              => __( 'Screens Archives', 'blpage' ),
		'attributes'            => __( 'Screens Attributes', 'blpage' ),
		'parent_item_colon'     => __( 'Parent Screens:', 'blpage' ),
		'all_items'             => __( 'All Screens', 'blpage' ),
		'add_new_item'          => __( 'Add New Screens', 'blpage' ),
		'add_new'               => __( '+ Add Screen', 'blpage' ),
		'new_item'              => __( 'New Screen', 'blpage' ),
		'edit_item'             => __( 'Edit Screen', 'blpage' ),
		'update_item'           => __( 'Update Screens', 'blpage' ),
		'view_item'             => __( 'View Screens', 'blpage' ),
		'view_items'            => __( 'View Screens', 'blpage' ),
		'search_items'          => __( 'Search Screens', 'blpage' ),
		'not_found'             => __( 'Not found', 'blpage' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'blpage' ),
		'featured_image'        => __( 'Featured Image', 'blpage' ),
		'set_featured_image'    => __( 'Set featured image', 'blpage' ),
		'remove_featured_image' => __( 'Remove featured image', 'blpage' ),
		'use_featured_image'    => __( 'Use as featured image', 'blpage' ),
		'insert_into_item'      => __( 'Insert into item', 'blpage' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'blpage' ),
		'items_list'            => __( 'Screens list', 'blpage' ),
		'items_list_navigation' => __( 'Screens list navigation', 'blpage' ),
		'filter_items_list'     => __( 'Filter Screens', 'blpage' ),
	);
	$args = array(
		'label'                 => __( 'screen', 'blpage' ),
		'description'           => __( 'Screens Description', 'blpage' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes', 'post-formats' ),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 20,
		'menu_icon'             => 'dashicons-welcome-add-page',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
		'rest_base'             => 'screens',
		'rest_controller_class' => 'WP_REST_Screens_Controller',
	);
	register_post_type( 'screen', $args );

}
add_action( 'init', 'blpage_post_type', 0 );

// do WP_REST_Screens_Controller to fetch all screens in rest api
// Add column 
// Add custom column to the "Screen" post type list table
function custom_add_component_column($columns) {
    unset($columns['date']);
    $columns['component'] = 'Component';
    return $columns;
}
add_filter('manage_screen_posts_columns', 'custom_add_component_column');

// Populate custom column with buttons
function custom_render_component_column($column_name, $post_id) {
    if ($column_name === 'component') {
        $url = admin_url('admin.php?page=screens_builder&screen_id=' . $post_id);
        echo '<a href="' . esc_url($url) . '" class="button">Manage Component</a>';
    }
}
add_action('manage_screen_posts_custom_column', 'custom_render_component_column', 10, 2);
