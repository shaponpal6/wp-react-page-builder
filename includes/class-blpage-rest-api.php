<?php
function custom_register_screens_rest_route() {
    register_rest_route(
        'bl/v1',
        '/screens',
        array(
            'methods'             => 'GET',
            'callback'            => 'custom_get_screens',
            'permission_callback' => 'custom_rest_permission_callback',
        )
    );

	// single view
	register_rest_route(
        'bl/v1',
        '/screens/(?P<id>\d+)',
        array(
            'methods'             => 'GET',
            'callback'            => 'custom_get_single_screen',
            'permission_callback' => 'custom_rest_permission_callback',
        )
    );

	register_rest_route(
        'bl/v1',
        '/save-screen/(?P<id>\d+)',
        array(
            'methods'             => 'POST',
            'callback'            => 'custom_save_screen_data',
            'permission_callback' => 'custom_rest_permission_callback',
        )
    );
}
add_action('rest_api_init', 'custom_register_screens_rest_route');

function custom_rest_permission_callback() {
    return true;
    // return is_user_logged_in() && current_user_can('edit_posts');
}

function custom_get_screens($request) {
    $args = array(
        'post_type'      => 'screen',
        'posts_per_page' => -1,
    );

    $screens = get_posts($args);

    $response = array();

    foreach ($screens as $screen) {
		$metadata = get_post_meta((int) $screen->ID, 'bl_screen_data', true);
        $response[] = array(
            'id'         => $screen->ID,
            'title'      => $screen->post_title,
            'content'    => $screen->post_content,
            'bl_screen_data'    => $metadata,
            // Add more fields as needed
        );
    }

    return new WP_REST_Response($response, 200);
}

function custom_get_single_screen($request) {
    $screen_id = $request->get_param('id');

    $screen = get_post($screen_id);

    if (!$screen || $screen->post_type !== 'screen') {
        return new WP_Error('screen_not_found', 'Screen not found', array('status' => 404));
    }
	$metadata = get_post_meta((int) $screen_id, 'bl_screen_data', true);
	// return new WP_REST_Response($metadata, 200);
    $response = array(
        'id'         => $screen->ID,
        'title'      => $screen->post_title,
        'content'    => $screen->post_content,
        'status'    => $screen->post_status ?? 'draft',
		'bl_screen_data'    => $metadata ?? [],
        // Add more fields as needed
    );

    return new WP_REST_Response(['code' => 'single_screen_data', 'status' => 200,'data' => ['status' => 200, 'data' => $response]], 200);
}

function custom_save_screen_data($request) {
    $screen_id = $request->get_param('id');
    $data = $request->get_json_params(); // Get JSON data from request body
	// return new WP_REST_Response(['ddd'=>$data], 200);
    // Validate and sanitize data as needed

    // Update screen post meta with the data
    update_post_meta($screen_id, 'bl_screen_data', $data ?? []);

    return new WP_REST_Response('Screen data saved successfully', 200);
}



