<?php
if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

get_header('shop'); ?>

<div class="container">
	<div class="row">
		<div class="col-12">
			<h1><?php woocommerce_page_title(); ?></h1>
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<?php
			// Display WooCommerce product loop
			if (woocommerce_product_loop()) {
				woocommerce_output_content_wrapper();
				woocommerce_product_loop_start();

				if (wc_get_loop_prop('total')) {
					while (have_posts()) {
						the_post();
						wc_get_template_part('content', 'product');
					}
				}

				woocommerce_product_loop_end();
				woocommerce_output_content_wrapper_end();
			} else {
				// If no products found
				do_action('woocommerce_no_products_found');
			}
			?>
		</div>
	</div>
</div>

<?php get_footer('shop'); ?>