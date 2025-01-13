<?php

/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files, so you will
 * need to copy the new files to your theme to maintain compatibility.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @package  WooCommerce/Templates
 * @version  3.6.0
 */

defined('ABSPATH') || exit;

get_header('shop'); ?>

<main id="main" class="site-main">
	<div class="container">
		<div class="row">
			<div class="col-12"> <!-- Bootstrap column wrapper for full width -->
				<?php
				/**
				 * woocommerce_before_main_content hook.
				 *
				 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
				 * @hooked woocommerce_breadcrumb - 20 (adds WooCommerce breadcrumb)
				 */
				do_action('woocommerce_before_main_content');
				?>

				<?php
				while (have_posts()) :
					the_post();

					/**
					 * woocommerce_before_single_product hook.
					 *
					 * @hooked wc_print_notices - 10 (prints notifications such as stock status)
					 */
					do_action('woocommerce_before_single_product');

					if (post_password_required()) {
						echo get_the_password_form(); // Handle password-protected products
						return;
					}
				?>

					<div id="product-<?php the_ID(); ?>" <?php wc_product_class('', $product); ?>>
						<div class="product-summary">
							<?php
							/**
							 * woocommerce_before_single_product_summary hook.
							 *
							 * @hooked woocommerce_show_product_sale_flash - 10
							 * @hooked woocommerce_show_product_images - 20 (displays product images)
							 */
							do_action('woocommerce_before_single_product_summary');
							?>
						</div>

						<div class="summary entry-summary">
							<?php
							/**
							 * woocommerce_single_product_summary hook.
							 *
							 * @hooked woocommerce_template_single_title - 5
							 * @hooked woocommerce_template_single_rating - 10
							 * @hooked woocommerce_template_single_price - 10
							 * @hooked woocommerce_template_single_excerpt - 20
							 * @hooked woocommerce_template_single_add_to_cart - 30
							 * @hooked woocommerce_template_single_meta - 40
							 * @hooked woocommerce_template_single_sharing - 50
							 */
							do_action('woocommerce_single_product_summary');
							?>
						</div><!-- .summary -->

						<?php
						/**
						 * woocommerce_after_single_product_summary hook.
						 *
						 * @hooked woocommerce_output_product_data_tabs - 10
						 * @hooked woocommerce_upsell_display - 15
						 * @hooked woocommerce_output_related_products - 20
						 */
						do_action('woocommerce_after_single_product_summary');
						?>
					</div><!-- #product-<?php the_ID(); ?> -->

					<?php
					/**
					 * woocommerce_after_single_product hook.
					 */
					do_action('woocommerce_after_single_product');
					?>

				<?php endwhile; // end of the loop.
				?>

				<?php
				/**
				 * woocommerce_after_main_content hook.
				 *
				 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
				 */
				do_action('woocommerce_after_main_content');
				?>
			</div><!-- .col-12 -->
		</div><!-- .row -->
	</div><!-- .container -->
</main><!-- #main -->


<?php
get_footer('shop');
