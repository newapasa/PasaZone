<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pasazone
 */
?>

<footer id="colophon" class="site-footer bg-dark text-light py-5">
	<div class="container">
		<div class="row">
			<!-- Footer Navigation -->
			<div class="col-md-4">
				<h5><?php esc_html_e('Quick Links', 'pz'); ?></h5>
				<ul class="list-unstyled">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-menu',
							'menu_class' => 'footer-menu',
							'container' => false,
							'items_wrap' => '%3$s', // Removes UL tag
							'depth' => 1,
						)
					);
					?>
				</ul>
			</div>

			<!-- Contact Information -->
			<div class="col-md-4">
				<h5><?php esc_html_e('Contact Us', 'pz'); ?></h5>
				<address>
					<?php esc_html_e('1234 Street Name', 'pz'); ?><br>
					<?php esc_html_e('City, Country', 'pz'); ?><br>
					<?php esc_html_e('Phone: (+977) 984100000', 'pz'); ?><br>
					<a href="newapasa7@gmail.com"><?php esc_html_e('newapasa7@gmail.com.com', 'pz'); ?></a>
				</address>
			</div>

			<!-- Social Media Links -->
			<div class="col-md-4">
				<h5><?php esc_html_e('Follow Us', 'pz'); ?></h5>
				<ul class="list-unstyled social-links">
					<li><a href="https://facebook.com" target="_blank" class="text-light"><?php esc_html_e('Facebook', 'pz'); ?></a></li>
					<li><a href="https://twitter.com" target="_blank" class="text-light"><?php esc_html_e('Twitter', 'pz'); ?></a></li>
					<li><a href="https://instagram.com" target="_blank" class="text-light"><?php esc_html_e('Instagram', 'pz'); ?></a></li>
				</ul>
			</div>
		</div>

		<div class="site-info text-center mt-4">
			<a href="<?php echo esc_url(__('https://wordpress.org/', 'pz')); ?>" class="text-light">
				<?php printf(esc_html__('Proudly powered by %s', 'pz'), 'WordPress'); ?>
			</a>
			<span class="sep"> | </span>
			<?php
			printf(
				esc_html__('Theme: %1$s by %2$s.', 'PZ'),
				'PZ',
				'<a href="https://newapasa.github.io/Portfolio/" class="text-light">Shreejan Prajapati</a>'
			);
			?>
		</div><!-- .site-info -->
	</div><!-- .container -->
</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>

</html>