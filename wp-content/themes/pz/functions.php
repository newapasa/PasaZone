<?php

/**
 * pasazone functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pasazone
 */

if (! defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function pz_setup()
{
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on pasazone, use a find and replace
		* to change 'pz' to the name of your theme in all the template files.
		*/
	load_theme_textdomain('pz', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support('title-tag');

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__('Primary', 'pz'),
			'footer-menu' => __('Footer Menu', 'pz'),
		)
	);


	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'pz_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// handel form submission

	function handle_contact_form()
	{
		if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
			$name = sanitize_text_field($_POST['name']);
			$email = sanitize_email($_POST['email']);
			$message = sanitize_textarea_field($_POST['message']);

			// You can customize the email settings here
			$to = 'your_email@example.com';
			$subject = 'New Contact Form Submission';
			$headers = array('Content-Type: text/html; charset=UTF-8');

			$body = "<p>Name: $name</p>";
			$body .= "<p>Email: $email</p>";
			$body .= "<p>Message: $message</p>";

			wp_mail($to, $subject, $body, $headers);
			wp_redirect(home_url('/thank-you/')); // Redirect to a thank you page
			exit;
		}
	}
	add_action('admin_post_nopriv_send_contact_form', 'handle_contact_form');
	add_action('admin_post_send_contact_form', 'handle_contact_form');


	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action('after_setup_theme', 'pz_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function pz_content_width()
{
	$GLOBALS['content_width'] = apply_filters('pz_content_width', 640);
}
add_action('after_setup_theme', 'pz_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function pz_widgets_init()
{
	register_sidebar(
		array(
			'name'          => esc_html__('Sidebar', 'pz'),
			'id'            => 'sidebar-1',
			'description'   => esc_html__('Add widgets here.', 'pz'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action('widgets_init', 'pz_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function pz_scripts()
{
	wp_enqueue_style('pz-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_style_add_data('pz-style', 'rtl', 'replace');

	wp_enqueue_style('pz-bootstrap-style', get_template_directory_uri() . './assets/vendors/bootstrap/bootstrap.min.css', array(), _S_VERSION);
	wp_enqueue_style('pz-swiper-style', get_template_directory_uri() . './assets/vendors/swiper/swiper-bundle.min.css', array(), _S_VERSION);
	wp_enqueue_style('pz-fontawsome-style', get_template_directory_uri() . './assets/vendors/fontawsome/css/all.min.css', array(), _S_VERSION);
	wp_enqueue_style('pz-custom-style', get_template_directory_uri() . './assets/css/style.css', array(), _S_VERSION);

	wp_enqueue_script('pz-bootstrap-script', get_template_directory_uri() . './assets/vendors/bootstrap/bootstrap.bundle.min.js', array(), _S_VERSION);
	wp_enqueue_script('pz-swiper-script', get_template_directory_uri() . './assets/vendors/swiper/swiper-bundle.min.js', array(), _S_VERSION);
	wp_enqueue_script('pz-custom-script', get_template_directory_uri() . './assets/js/script.js', array(), _S_VERSION);

	wp_enqueue_script('pz-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'pz_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if (class_exists('WooCommerce')) {
	require get_template_directory() . '/inc/woocommerce.php';
}
