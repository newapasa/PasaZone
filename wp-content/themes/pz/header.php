<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pasazone
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'pz'); ?></a>

		<header id="masthead" class="site-header bg-dark">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-6 col-md-4 site-branding">
						<?php
						the_custom_logo();
						if (is_front_page() && is_home()) :
						?>
							<h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
						<?php
						else :
						?>

						<?php
						endif;
						$pz_description = get_bloginfo('description', 'display');
						if ($pz_description || is_customize_preview()) :
						?>
							<p class="site-description"><?php echo $pz_description; ?></p>
						<?php endif; ?>
					</div><!-- .site-branding -->

					<div class="col-6 col-md-8">
						<nav id="site-navigation" class="main-navigation navbar navbar-expand-lg">
							<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primary-menu" aria-controls="primary-menu" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'pz'); ?>">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="primary-menu">
								<?php
								wp_nav_menu(
									array(
										'theme_location' => 'menu-1',
										'menu_id'        => 'primary-menu',
										'container'      => false,
										'menu_class'     => 'navbar-nav ms-auto',
										'depth'          => 2,
										'fallback_cb'    => false, // Optional: You can set a fallback
									)
								);
								?>
							</div>
						</nav><!-- #site-navigation -->
					</div><!-- .col -->
				</div><!-- .row -->
			</div><!-- .container -->
		</header><!-- #masthead -->
	</div><!-- #page -->