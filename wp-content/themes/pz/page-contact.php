<?php

/**
 * Template Name: Contact Page
 *
 * @package pasazone
 */

get_header(); ?>

<main id="main" class="site-main">
	<div class="container">
		<h1 class="mt-5 mb-4"><?php the_title(); ?></h1>

		<div class="row">
			<div class="col-md-6">
				<h2>Get in Touch</h2>
				<form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
					<input type="hidden" name="action" value="send_contact_form">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" name="name" required>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" class="form-control" id="email" name="email" required>
					</div>
					<div class="form-group">
						<label for="message">Message</label>
						<textarea class="form-control" id="message" name="message" rows="5" required></textarea>
					</div>
					<button type="submit" class="btn btn-primary">Send Message</button>
				</form>
			</div>

			<div class="col-md-6">
				<h2>Contact Information</h2>
				<p><strong>Phone:</strong> +1 234 567 890</p>
				<p><strong>Email:</strong> info@example.com</p>
				<p><strong>Address:</strong> 123 Main Street, City, Country</p>

				<h2>Our Location</h2>
				<div class="embed-responsive embed-responsive-16by9 mb-4">
					<iframe class="embed-responsive-item"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093927!2d144.9537353153166!3d-37.816279979751205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1e7d49%3A0x5045675218ceed21!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1609876473580!5m2!1sen!2sus"
						allowfullscreen=""
						loading="lazy"></iframe>
				</div>
			</div>
		</div>
	</div>
</main><!-- #main -->

<?php
get_footer();
