<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://https://banglalink.net/en
 * @since      1.0.0
 *
 * @package    Blpage
 * @subpackage Blpage/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Blpage
 * @subpackage Blpage/admin
 * @author     Banglalink <test@bl.com>
 */
class Blpage_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Blpage_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Blpage_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/blpage-admin.css'.'?version='.time(), array(), $this->version, 'all' );
		wp_enqueue_style('bl-react-app', BLPAGE_PATH . 'build/index.css'.'?version='.time(), array('wp-element'), '1.0');

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Blpage_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Blpage_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
        wp_enqueue_media();
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/blpage-admin.js'.'?version='.time(), array( 'jquery' ), $this->version, false );
		wp_enqueue_script('bl-react-app-js',  BLPAGE_PATH . 'build/index.js'.'?version='.time(), array('wp-element'), '1.0', true);
		// Pass wpApiSettings to the JavaScript file
		// Get the current page URL with query string
		$current_url = $_SERVER["REQUEST_URI"];
		$query_params = parse_url($current_url, PHP_URL_QUERY);
		if($query_params){
			parse_str($query_params, $query_array);
			$screen_id = isset($query_array['screen_id']) ? $query_array['screen_id'] : null;
			$page = isset($query_array['page']) ? $query_array['page'] : null;
			if($screen_id || $page){
				wp_localize_script(
					'bl-react-app-js',
					'wpApiSettings',
					array(
						'root' => esc_url_raw( rest_url() ),
						'nonce' => wp_create_nonce( 'wp_rest' ),
						'screen_id' => $screen_id,
						'page' => $page,
					)
				);
			}
		}

	}

	function custom_screens_builder_admin_css() {
		global $pagenow;
		
		// Check if we are on the "Screens Builder" page
		// if ($pagenow == 'admin.php' && isset($_GET['page']) && $_GET['page'] == 'screens_builder') {
		// 	echo '<style>#wpadminbar, #adminmenumain, #wpfooter { display:none !important; }</style>';
		// 	echo '<style>#adminmenumain, #adminmenuback, #wpcontent { margin-left: 0 !important; }</style>';
		// 	echo '<style>.wrap { margin-left: 0 !important; }</style>';
		// }
	}

}
