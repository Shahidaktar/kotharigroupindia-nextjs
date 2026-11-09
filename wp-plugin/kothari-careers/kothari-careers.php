<?php
/**
 * Plugin Name:       Kothari Careers
 * Description:       Job posts and application submissions for the Kothari Group website. Adds a Careers admin area, a public jobs REST endpoint, a secure application intake endpoint, private resume storage and CSV export.
 * Version:           1.2.0
 * Author:            IndoAge
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Text Domain:       kothari-careers
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'KOTHARI_CAREERS_VERSION', '1.2.0' );
define( 'KOTHARI_CAREERS_JOB_CPT', 'kothari_job' );
define( 'KOTHARI_CAREERS_APP_CPT', 'kothari_application' );
define( 'KOTHARI_CAREERS_OPTION_SECRET', 'kothari_careers_ingest_secret' );

/**
 * Default ingest secret. The Next.js site sends this in the X-Kothari-Secret
 * header when forwarding applications. It can be changed in Careers > Settings.
 * Keep it in sync with WP_CAREER_INGEST_SECRET in the Next.js environment.
 */
define( 'KOTHARI_CAREERS_DEFAULT_SECRET', 'kc_7f3a9c1e5b8d2460a1f6e9c2b4d70a83' );

/**
 * Public Next.js site used to deliver status-change emails through the same
 * Gmail SMTP pipeline as the rest of the website. Override with the
 * KOTHARI_CAREERS_SITE_URL constant or the `kothari_careers_site_url` filter.
 */
if ( ! defined( 'KOTHARI_CAREERS_SITE_URL' ) ) {
	define( 'KOTHARI_CAREERS_SITE_URL', 'https://kotharigroupindia.com' );
}

/* -------------------------------------------------------------------------
 * Activation / deactivation
 * ---------------------------------------------------------------------- */

function kothari_careers_activate() {
	kothari_careers_register_post_types();

	if ( ! get_option( KOTHARI_CAREERS_OPTION_SECRET ) ) {
		update_option( KOTHARI_CAREERS_OPTION_SECRET, KOTHARI_CAREERS_DEFAULT_SECRET );
	}

	kothari_careers_private_dir();
	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'kothari_careers_activate' );

function kothari_careers_deactivate() {
	flush_rewrite_rules();
}
register_deactivation_hook( __FILE__, 'kothari_careers_deactivate' );

/* -------------------------------------------------------------------------
 * Custom post types
 * ---------------------------------------------------------------------- */

function kothari_careers_register_post_types() {
	register_post_type(
		KOTHARI_CAREERS_JOB_CPT,
		array(
			'labels'          => array(
				'name'               => 'Job Posts',
				'singular_name'      => 'Job Post',
				'add_new'            => 'Add New',
				'add_new_item'       => 'Add New Job Post',
				'edit_item'          => 'Edit Job Post',
				'new_item'           => 'New Job Post',
				'view_item'          => 'View Job Post',
				'search_items'       => 'Search Job Posts',
				'not_found'          => 'No job posts found',
				'not_found_in_trash' => 'No job posts found in trash',
				'menu_name'          => 'Job Posts',
			),
			'public'          => false,
			'show_ui'         => true,
			'show_in_menu'    => 'kothari-careers',
			'supports'        => array( 'title', 'editor' ),
			'capability_type' => 'post',
			'map_meta_cap'    => true,
			'menu_icon'       => 'dashicons-portfolio',
		)
	);

	register_post_type(
		KOTHARI_CAREERS_APP_CPT,
		array(
			'labels'          => array(
				'name'               => 'Applications',
				'singular_name'      => 'Application',
				'edit_item'          => 'Application',
				'view_item'          => 'Application',
				'search_items'       => 'Search Applications',
				'not_found'          => 'No applications yet',
				'not_found_in_trash' => 'No applications found in trash',
				'menu_name'          => 'Applications',
			),
			'public'          => false,
			'show_ui'         => true,
			'show_in_menu'    => 'kothari-careers',
			'supports'        => array( 'title' ),
			'capability_type' => 'post',
			'map_meta_cap'    => true,
			'capabilities'    => array(
				'create_posts' => 'do_not_allow',
			),
			'menu_icon'       => 'dashicons-id-alt',
		)
	);
}
add_action( 'init', 'kothari_careers_register_post_types' );

/* -------------------------------------------------------------------------
 * Admin menu + settings
 * ---------------------------------------------------------------------- */

function kothari_careers_register_menu() {
	add_menu_page(
		'Careers',
		'Careers',
		'manage_options',
		'kothari-careers',
		'kothari_careers_render_dashboard',
		'dashicons-businessman',
		26
	);

	add_submenu_page(
		'kothari-careers',
		'Career Settings',
		'Settings',
		'manage_options',
		'kothari-careers-settings',
		'kothari_careers_render_settings_page'
	);
}
add_action( 'admin_menu', 'kothari_careers_register_menu' );

function kothari_careers_render_dashboard() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$jobs_count = wp_count_posts( KOTHARI_CAREERS_JOB_CPT )->publish ?? 0;
	$apps_count = wp_count_posts( KOTHARI_CAREERS_APP_CPT );
	$apps_total = 0;
	foreach ( (array) $apps_count as $status_count ) {
		$apps_total += (int) $status_count;
	}
	?>
	<div class="wrap">
		<h1>Kothari Careers</h1>
		<p>Manage job posts and candidate applications. Published jobs appear on the website within about 10 minutes.</p>

		<p>
			<strong><?php echo esc_html( (int) $jobs_count ); ?></strong> published job posts &middot;
			<strong><?php echo esc_html( (int) $apps_total ); ?></strong> applications received.
		</p>

		<p>
			<a class="button button-primary" href="<?php echo esc_url( admin_url( 'edit.php?post_type=' . KOTHARI_CAREERS_JOB_CPT ) ); ?>">Manage Job Posts</a>
			<a class="button" href="<?php echo esc_url( admin_url( 'edit.php?post_type=' . KOTHARI_CAREERS_APP_CPT ) ); ?>">View Applications</a>
			<a class="button" href="<?php echo esc_url( admin_url( 'admin.php?page=kothari-careers-settings' ) ); ?>">Settings</a>
		</p>
	</div>
	<?php
}

function kothari_careers_render_settings_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$secret   = get_option( KOTHARI_CAREERS_OPTION_SECRET, '' );
	$api_base = rest_url( 'kothari/v1' );
	?>
	<div class="wrap">
		<h1>Careers Settings</h1>

		<?php if ( isset( $_GET['updated'] ) ) : ?>
			<div class="notice notice-success is-dismissible"><p>Settings saved.</p></div>
		<?php endif; ?>

		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<input type="hidden" name="action" value="kothari_careers_save_settings" />
			<?php wp_nonce_field( 'kothari_careers_save_settings' ); ?>
			<table class="form-table" role="presentation">
				<tr>
					<th scope="row"><label for="kothari_secret">Ingest secret</label></th>
					<td>
						<input type="text" id="kothari_secret" name="secret" class="regular-text code" value="<?php echo esc_attr( $secret ); ?>" />
						<p class="description">
							Must match <code>WP_CAREER_INGEST_SECRET</code> in the Next.js environment.
							Only used for server-to-server application forwarding.
						</p>
					</td>
				</tr>
				<tr>
					<th scope="row">REST endpoints</th>
					<td>
						<code><?php echo esc_html( $api_base . '/jobs' ); ?></code><br />
						<code><?php echo esc_html( $api_base . '/apply' ); ?></code>
					</td>
				</tr>
				<tr>
					<th scope="row">Status email endpoint</th>
					<td>
						<code><?php echo esc_html( trailingslashit( apply_filters( 'kothari_careers_site_url', KOTHARI_CAREERS_SITE_URL ) ) . 'api/career/status' ); ?></code>
						<p class="description">Applicants are emailed through the website when their application status changes.</p>
					</td>
				</tr>
				<tr>
					<th scope="row">Plugin version</th>
					<td><code><?php echo esc_html( KOTHARI_CAREERS_VERSION ); ?></code></td>
				</tr>
			</table>
			<?php submit_button( 'Save Settings' ); ?>
		</form>
	</div>
	<?php
}

function kothari_careers_save_settings() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Not allowed.' );
	}
	check_admin_referer( 'kothari_careers_save_settings' );

	$secret = isset( $_POST['secret'] ) ? sanitize_text_field( wp_unslash( $_POST['secret'] ) ) : '';

	if ( $secret ) {
		update_option( KOTHARI_CAREERS_OPTION_SECRET, $secret );
	}

	wp_safe_redirect(
		add_query_arg(
			array(
				'page'    => 'kothari-careers-settings',
				'updated' => '1',
			),
			admin_url( 'admin.php' )
		)
	);
	exit;
}
add_action( 'admin_post_kothari_careers_save_settings', 'kothari_careers_save_settings' );

/* -------------------------------------------------------------------------
 * Job meta box
 * ---------------------------------------------------------------------- */

function kothari_careers_add_meta_boxes() {
	add_meta_box(
		'kothari_job_details',
		'Job Details',
		'kothari_careers_render_job_details_box',
		KOTHARI_CAREERS_JOB_CPT,
		'normal',
		'high'
	);
	add_meta_box(
		'kothari_job_content',
		'Responsibilities & Requirements',
		'kothari_careers_render_job_content_box',
		KOTHARI_CAREERS_JOB_CPT,
		'normal',
		'default'
	);
	add_meta_box(
		'kothari_application_details',
		'Application Details',
		'kothari_careers_render_application_box',
		KOTHARI_CAREERS_APP_CPT,
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'kothari_careers_add_meta_boxes' );

function kothari_careers_render_job_details_box( $post ) {
	wp_nonce_field( 'kothari_careers_save_job', 'kothari_job_nonce' );

	$get    = static function ( $key, $default = '' ) use ( $post ) {
		$value = get_post_meta( $post->ID, '_job_' . $key, true );
		return ( '' === $value || null === $value ) ? $default : $value;
	};
	$status = $get( 'status', 'Open' );
	$date   = $get( 'posted_date', current_time( 'Y-m-d' ) );
	?>
	<table class="form-table" role="presentation">
		<tr>
			<th scope="row"><label for="job_department">Department</label></th>
			<td><input type="text" id="job_department" name="job_department" class="regular-text" value="<?php echo esc_attr( $get( 'department' ) ); ?>" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_location">Location</label></th>
			<td><input type="text" id="job_location" name="job_location" class="regular-text" value="<?php echo esc_attr( $get( 'location' ) ); ?>" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_division">Division</label></th>
			<td><input type="text" id="job_division" name="job_division" class="regular-text" value="<?php echo esc_attr( $get( 'division' ) ); ?>" placeholder="e.g. Pipe / Irrigation / OEM" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_job_type">Job Type</label></th>
			<td><input type="text" id="job_job_type" name="job_job_type" class="regular-text" value="<?php echo esc_attr( $get( 'job_type', 'Full-time' ) ); ?>" placeholder="e.g. Full-time / Contract" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_experience">Experience</label></th>
			<td><input type="text" id="job_experience" name="job_experience" class="regular-text" value="<?php echo esc_attr( $get( 'experience' ) ); ?>" placeholder="e.g. 3-5 years" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_salary_range">Salary Range</label></th>
			<td><input type="text" id="job_salary_range" name="job_salary_range" class="regular-text" value="<?php echo esc_attr( $get( 'salary_range' ) ); ?>" placeholder="e.g. 6-8 LPA (optional)" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_openings">Number of Openings</label></th>
			<td><input type="number" min="0" step="1" id="job_openings" name="job_openings" class="small-text" value="<?php echo esc_attr( $get( 'openings', '1' ) ); ?>" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_posted_date">Posted Date</label></th>
			<td><input type="date" id="job_posted_date" name="job_posted_date" value="<?php echo esc_attr( $date ); ?>" /></td>
		</tr>
		<tr>
			<th scope="row"><label for="job_status">Status</label></th>
			<td>
				<select id="job_status" name="job_status">
					<option value="Open" <?php selected( $status, 'Open' ); ?>>Open</option>
					<option value="Closed" <?php selected( $status, 'Closed' ); ?>>Closed</option>
				</select>
				<p class="description">Closed jobs are hidden from the website.</p>
			</td>
		</tr>
	</table>
	<p class="description">Use the main editor above for the short job description shown on the listing card.</p>
	<?php
}

function kothari_careers_render_job_content_box( $post ) {
	$responsibilities = get_post_meta( $post->ID, '_job_responsibilities', true );
	$requirements     = get_post_meta( $post->ID, '_job_requirements', true );
	?>
	<table class="form-table" role="presentation">
		<tr>
			<th scope="row"><label for="job_responsibilities">Responsibilities</label></th>
			<td>
				<textarea id="job_responsibilities" name="job_responsibilities" rows="6" class="large-text" placeholder="One responsibility per line"><?php echo esc_textarea( $responsibilities ); ?></textarea>
			</td>
		</tr>
		<tr>
			<th scope="row"><label for="job_requirements">Requirements / Qualifications</label></th>
			<td>
				<textarea id="job_requirements" name="job_requirements" rows="6" class="large-text" placeholder="One requirement per line"><?php echo esc_textarea( $requirements ); ?></textarea>
			</td>
		</tr>
	</table>
	<?php
}

function kothari_careers_save_job_meta( $post_id ) {
	if ( ! isset( $_POST['kothari_job_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['kothari_job_nonce'] ) ), 'kothari_careers_save_job' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	if ( KOTHARI_CAREERS_JOB_CPT !== get_post_type( $post_id ) ) {
		return;
	}

	$text_fields = array(
		'department'   => 'job_department',
		'location'     => 'job_location',
		'division'     => 'job_division',
		'job_type'     => 'job_job_type',
		'experience'   => 'job_experience',
		'salary_range' => 'job_salary_range',
		'posted_date'  => 'job_posted_date',
	);

	foreach ( $text_fields as $meta_key => $field ) {
		$value = isset( $_POST[ $field ] ) ? sanitize_text_field( wp_unslash( $_POST[ $field ] ) ) : '';
		update_post_meta( $post_id, '_job_' . $meta_key, $value );
	}

	$status = isset( $_POST['job_status'] ) ? sanitize_text_field( wp_unslash( $_POST['job_status'] ) ) : 'Open';
	$status = in_array( $status, array( 'Open', 'Closed' ), true ) ? $status : 'Open';
	update_post_meta( $post_id, '_job_status', $status );

	$openings = isset( $_POST['job_openings'] ) ? absint( wp_unslash( $_POST['job_openings'] ) ) : 1;
	update_post_meta( $post_id, '_job_openings', $openings );

	$responsibilities = isset( $_POST['job_responsibilities'] ) ? sanitize_textarea_field( wp_unslash( $_POST['job_responsibilities'] ) ) : '';
	$requirements     = isset( $_POST['job_requirements'] ) ? sanitize_textarea_field( wp_unslash( $_POST['job_requirements'] ) ) : '';
	update_post_meta( $post_id, '_job_responsibilities', $responsibilities );
	update_post_meta( $post_id, '_job_requirements', $requirements );

	if ( ! get_post_meta( $post_id, '_job_posted_date', true ) ) {
		update_post_meta( $post_id, '_job_posted_date', current_time( 'Y-m-d' ) );
	}
}
add_action( 'save_post_' . KOTHARI_CAREERS_JOB_CPT, 'kothari_careers_save_job_meta' );

/**
 * Purge the website's ISR cache so job changes appear on /career immediately
 * instead of waiting for the 10-minute revalidation window.
 */
function kothari_careers_revalidate_frontend( $post_id = 0 ) {
	if ( $post_id ) {
		if ( ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) || wp_is_post_autosave( $post_id ) || wp_is_post_revision( $post_id ) ) {
			return;
		}
		if ( KOTHARI_CAREERS_JOB_CPT !== get_post_type( $post_id ) ) {
			return;
		}
	}

	$secret = get_option( KOTHARI_CAREERS_OPTION_SECRET, KOTHARI_CAREERS_DEFAULT_SECRET );
	if ( defined( 'KOTHARI_CAREERS_INGEST_SECRET' ) ) {
		$secret = KOTHARI_CAREERS_INGEST_SECRET;
	}

	$site_url = apply_filters( 'kothari_careers_site_url', KOTHARI_CAREERS_SITE_URL );

	wp_remote_post(
		trailingslashit( $site_url ) . 'api/revalidate/career',
		array(
			'timeout'  => 5,
			'blocking' => false,
			'headers'  => array(
				'Content-Type'     => 'application/json',
				'X-Kothari-Secret' => $secret,
			),
			'body'     => wp_json_encode( array( 'path' => '/career' ) ),
		)
	);
}
add_action( 'save_post_' . KOTHARI_CAREERS_JOB_CPT, 'kothari_careers_revalidate_frontend', 20 );

function kothari_careers_revalidate_on_delete( $post_id ) {
	if ( KOTHARI_CAREERS_JOB_CPT === get_post_type( $post_id ) ) {
		kothari_careers_revalidate_frontend();
	}
}
add_action( 'trashed_post', 'kothari_careers_revalidate_on_delete' );
add_action( 'untrashed_post', 'kothari_careers_revalidate_on_delete' );
add_action( 'before_delete_post', 'kothari_careers_revalidate_on_delete' );

/* -------------------------------------------------------------------------
 * Application meta box
 * ---------------------------------------------------------------------- */

function kothari_careers_render_application_box( $post ) {
	wp_nonce_field( 'kothari_careers_save_application', 'kothari_application_nonce' );

	$fields = array(
		'Position'             => '_application_position',
		'Location'             => '_application_location',
		'Email'                => '_application_email',
		'Phone'                => '_application_phone',
		'Total Experience'     => '_application_total_experience',
		'Relevant Experience'  => '_application_relevant_experience',
		'Current CTC'          => '_application_current_ctc',
		'Expected CTC'         => '_application_expected_ctc',
		'Notice Period'        => '_application_notice_period',
		'Qualification'        => '_application_qualification',
		'LinkedIn'             => '_application_linkedin',
		'Applied On'           => '_application_applied_on',
	);

	$status = get_post_meta( $post->ID, '_application_status', true );
	$status = $status ? $status : 'New';
	$resume = get_post_meta( $post->ID, '_application_resume_file', true );
	?>
	<table class="form-table" role="presentation">
		<?php foreach ( $fields as $label => $meta_key ) : ?>
			<?php $value = get_post_meta( $post->ID, $meta_key, true ); ?>
			<?php if ( '' === $value ) { continue; } ?>
			<tr>
				<th scope="row"><?php echo esc_html( $label ); ?></th>
				<td>
					<?php if ( 'LinkedIn' === $label && $value ) : ?>
						<a href="<?php echo esc_url( $value ); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html( $value ); ?></a>
					<?php else : ?>
						<?php echo esc_html( $value ); ?>
					<?php endif; ?>
				</td>
			</tr>
		<?php endforeach; ?>
		<tr>
			<th scope="row">Resume</th>
			<td>
				<?php if ( $resume ) : ?>
					<a class="button" href="<?php echo esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=kothari_download_resume&app=' . $post->ID ), 'kothari_download_resume_' . $post->ID ) ); ?>">Download resume</a>
				<?php else : ?>
					<em>No resume uploaded.</em>
				<?php endif; ?>
			</td>
		</tr>
		<tr>
			<th scope="row"><label for="application_status">Status</label></th>
			<td>
				<select id="application_status" name="application_status">
					<?php foreach ( array( 'New', 'Shortlisted', 'Rejected' ) as $option ) : ?>
						<option value="<?php echo esc_attr( $option ); ?>" <?php selected( $status, $option ); ?>><?php echo esc_html( $option ); ?></option>
					<?php endforeach; ?>
				</select>
				<p class="description">Changing the status emails the applicant automatically after you click Update.</p>
			</td>
		</tr>
		<tr>
			<th scope="row">Status email</th>
			<td>
				<?php $log = get_post_meta( $post->ID, '_application_status_email_log', true ); ?>
				<?php if ( $log ) : ?>
					<p><?php echo esc_html( $log ); ?></p>
				<?php else : ?>
					<p><em>Not sent yet.</em></p>
				<?php endif; ?>
				<a class="button" href="<?php echo esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=kothari_resend_status_email&app=' . $post->ID ), 'kothari_resend_status_email_' . $post->ID ) ); ?>">Resend status email</a>
			</td>
		</tr>
	</table>
	<?php
}

function kothari_careers_save_application_meta( $post_id ) {
	if ( ! isset( $_POST['kothari_application_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['kothari_application_nonce'] ) ), 'kothari_careers_save_application' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( KOTHARI_CAREERS_APP_CPT !== get_post_type( $post_id ) ) {
		return;
	}

	$previous = get_post_meta( $post_id, '_application_status', true );
	$previous = $previous ? $previous : 'New';

	$status = isset( $_POST['application_status'] ) ? sanitize_text_field( wp_unslash( $_POST['application_status'] ) ) : 'New';
	$status = in_array( $status, array( 'New', 'Shortlisted', 'Rejected' ), true ) ? $status : 'New';

	if ( $previous === $status ) {
		return;
	}

	update_post_meta( $post_id, '_application_status', $status );
	kothari_careers_send_status_email( $post_id, $status, $previous );
}
add_action( 'save_post_' . KOTHARI_CAREERS_APP_CPT, 'kothari_careers_save_application_meta' );

/**
 * Notify the applicant that their application status changed.
 *
 * Prefers the Next.js /api/career/status endpoint (Gmail SMTP, matching the
 * rest of the site) and falls back to wp_mail if that endpoint is unreachable.
 */
function kothari_careers_send_status_email( $application_id, $new_status, $old_status ) {
	$email = (string) get_post_meta( $application_id, '_application_email', true );
	if ( ! $email || ! is_email( $email ) ) {
		kothari_careers_log_status_email( $application_id, 'Not sent — no valid applicant email found.' );
		return false;
	}

	$payload = array(
		'to'        => $email,
		'name'      => get_the_title( $application_id ),
		'position'  => (string) get_post_meta( $application_id, '_application_position', true ),
		'location'  => (string) get_post_meta( $application_id, '_application_location', true ),
		'status'    => $new_status,
		'oldStatus' => $old_status,
	);

	$secret = get_option( KOTHARI_CAREERS_OPTION_SECRET, '' );
	if ( defined( 'KOTHARI_CAREERS_INGEST_SECRET' ) ) {
		$secret = KOTHARI_CAREERS_INGEST_SECRET;
	}

	$site_url = apply_filters( 'kothari_careers_site_url', KOTHARI_CAREERS_SITE_URL );
	$endpoint = trailingslashit( $site_url ) . 'api/career/status';

	if ( $secret ) {
		$response = wp_remote_post(
			$endpoint,
			array(
				'timeout' => 15,
				'headers' => array(
					'Content-Type'     => 'application/json',
					'X-Kothari-Secret' => $secret,
				),
				'body'    => wp_json_encode( $payload ),
			)
		);

		if ( is_wp_error( $response ) ) {
			$failure = 'Website endpoint error: ' . $response->get_error_message();
		} else {
			$code = (int) wp_remote_retrieve_response_code( $response );
			if ( $code >= 200 && $code < 300 ) {
				kothari_careers_log_status_email( $application_id, 'Sent via website email service (HTTP ' . $code . ').' );
				return true;
			}
			$detail  = wp_strip_all_tags( (string) wp_remote_retrieve_body( $response ) );
			$failure = 'Website endpoint returned HTTP ' . $code . ( $detail ? ' (' . substr( $detail, 0, 200 ) . ')' : '' );
		}

		error_log( '[kothari-careers] Status email via site failed for application ' . $application_id . ': ' . $failure );
	} else {
		$failure = 'No shared secret configured.';
	}

	$sent = kothari_careers_send_status_email_fallback( $email, $payload );
	if ( $sent ) {
		kothari_careers_log_status_email( $application_id, 'Sent via WordPress wp_mail. Fallback reason: ' . $failure );
		return true;
	}

	kothari_careers_log_status_email( $application_id, 'Failed — ' . $failure . ' wp_mail also failed.' );
	return false;
}

function kothari_careers_log_status_email( $application_id, $message ) {
	update_post_meta( $application_id, '_application_status_email_log', current_time( 'mysql' ) . ' — ' . $message );
}

/**
 * Optional safety net: if Gmail SMTP credentials are defined in wp-config.php,
 * route WordPress mail through Gmail so the wp_mail fallback still works when
 * the public website endpoint is unreachable.
 *
 *   define( 'KOTHARI_CAREERS_SMTP_USER', 'hr@kotharigroupindia.com' );
 *   define( 'KOTHARI_CAREERS_SMTP_PASS', 'gmail-app-password' );
 */
function kothari_careers_configure_smtp( $phpmailer ) {
	if ( ! defined( 'KOTHARI_CAREERS_SMTP_USER' ) || ! defined( 'KOTHARI_CAREERS_SMTP_PASS' ) ) {
		return;
	}

	$phpmailer->isSMTP();
	$phpmailer->Host       = defined( 'KOTHARI_CAREERS_SMTP_HOST' ) ? KOTHARI_CAREERS_SMTP_HOST : 'smtp.gmail.com';
	$phpmailer->Port       = defined( 'KOTHARI_CAREERS_SMTP_PORT' ) ? (int) KOTHARI_CAREERS_SMTP_PORT : 465;
	$phpmailer->SMTPSecure = 'ssl';
	$phpmailer->SMTPAuth   = true;
	$phpmailer->Username   = KOTHARI_CAREERS_SMTP_USER;
	$phpmailer->Password   = KOTHARI_CAREERS_SMTP_PASS;
	$phpmailer->From       = KOTHARI_CAREERS_SMTP_USER;
	$phpmailer->FromName   = 'Kothari Group';
}
add_action( 'phpmailer_init', 'kothari_careers_configure_smtp' );

function kothari_careers_resend_status_email() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( esc_html__( 'You are not allowed to do that.', 'kothari-careers' ) );
	}

	$app_id = isset( $_GET['app'] ) ? absint( $_GET['app'] ) : 0;
	check_admin_referer( 'kothari_resend_status_email_' . $app_id );

	if ( ! $app_id || KOTHARI_CAREERS_APP_CPT !== get_post_type( $app_id ) ) {
		wp_die( esc_html__( 'Invalid application.', 'kothari-careers' ) );
	}

	$status = get_post_meta( $app_id, '_application_status', true );
	$status = $status ? $status : 'New';
	$sent   = kothari_careers_send_status_email( $app_id, $status, '' );

	wp_safe_redirect(
		add_query_arg(
			array(
				'post'            => $app_id,
				'action'          => 'edit',
				'kothari_resent'  => $sent ? '1' : '0',
			),
			admin_url( 'post.php' )
		)
	);
	exit;
}
add_action( 'admin_post_kothari_resend_status_email', 'kothari_careers_resend_status_email' );

function kothari_careers_status_email_notice() {
	$screen = get_current_screen();
	if ( ! $screen || KOTHARI_CAREERS_APP_CPT !== $screen->post_type || ! isset( $_GET['kothari_resent'] ) ) {
		return;
	}

	$ok = '1' === $_GET['kothari_resent'];
	printf(
		'<div class="notice %s is-dismissible"><p>%s</p></div>',
		$ok ? 'notice-success' : 'notice-error',
		$ok
			? esc_html__( 'Status email sent. Refresh to see the delivery result.', 'kothari-careers' )
			: esc_html__( 'Status email could not be sent. See the "Status email" row for details.', 'kothari-careers' )
	);
}
add_action( 'admin_notices', 'kothari_careers_status_email_notice' );

function kothari_careers_send_status_email_fallback( $email, $payload ) {
	$messages = array(
		'Shortlisted' => 'We are pleased to let you know that your application has been shortlisted. Our HR team will contact you shortly with the next steps.',
		'Rejected'    => 'Thank you for taking the time to apply. After careful review, we will not be moving forward with your application at this time. We appreciate your interest and encourage you to apply for future roles.',
		'New'         => 'Your application has been received and is currently under review. We will contact you if your profile matches our requirements.',
	);
	$message  = isset( $messages[ $payload['status'] ] ) ? $messages[ $payload['status'] ] : 'Your application status has been updated.';
	$subject  = 'Application Update: ' . ( $payload['position'] ? $payload['position'] : 'Your Application' ) . ' | Kothari Group';
	$from     = get_option( 'admin_email' );
	$name     = $payload['name'] ? $payload['name'] : 'Applicant';

	$lines   = array(
		'Dear ' . $name . ',',
		'',
		$message,
		'',
		'Position: ' . ( $payload['position'] ? $payload['position'] : '-' ),
	);
	if ( ! empty( $payload['location'] ) ) {
		$lines[] = 'Location: ' . $payload['location'];
	}
	$lines[] = 'Status: ' . $payload['status'];
	$lines[] = '';
	$lines[] = 'If you have any questions, simply reply to this email.';
	$lines[] = '';
	$lines[] = 'Warm regards,';
	$lines[] = 'Kothari Group - Human Resources';

	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		'From: Kothari Group <' . $from . '>',
		'Reply-To: ' . $from,
	);

	return wp_mail( $email, $subject, implode( "\n", $lines ), $headers );
}

/* -------------------------------------------------------------------------
 * Admin list columns
 * ---------------------------------------------------------------------- */

function kothari_careers_job_columns( $columns ) {
	$new = array();
	foreach ( $columns as $key => $label ) {
		$new[ $key ] = $label;
		if ( 'title' === $key ) {
			$new['job_department'] = 'Department';
			$new['job_location']   = 'Location';
			$new['job_division']   = 'Division';
			$new['job_type']       = 'Type';
			$new['job_openings']   = 'Openings';
			$new['job_status']     = 'Status';
		}
	}
	return $new;
}
add_filter( 'manage_' . KOTHARI_CAREERS_JOB_CPT . '_posts_columns', 'kothari_careers_job_columns' );

function kothari_careers_job_column_content( $column, $post_id ) {
	switch ( $column ) {
		case 'job_department':
			echo esc_html( get_post_meta( $post_id, '_job_department', true ) );
			break;
		case 'job_location':
			echo esc_html( get_post_meta( $post_id, '_job_location', true ) );
			break;
		case 'job_division':
			echo esc_html( get_post_meta( $post_id, '_job_division', true ) );
			break;
		case 'job_type':
			echo esc_html( get_post_meta( $post_id, '_job_job_type', true ) );
			break;
		case 'job_openings':
			echo esc_html( (int) get_post_meta( $post_id, '_job_openings', true ) );
			break;
		case 'job_status':
			$status = get_post_meta( $post_id, '_job_status', true );
			$status = $status ? $status : 'Open';
			$color  = 'Closed' === $status ? '#b32d2e' : '#1e8e3e';
			echo '<span style="color:' . esc_attr( $color ) . ';font-weight:600">' . esc_html( $status ) . '</span>';
			break;
	}
}
add_action( 'manage_' . KOTHARI_CAREERS_JOB_CPT . '_posts_custom_column', 'kothari_careers_job_column_content', 10, 2 );

function kothari_careers_application_columns( $columns ) {
	$new = array();
	foreach ( $columns as $key => $label ) {
		$new[ $key ] = $label;
		if ( 'title' === $key ) {
			$new['app_position'] = 'Applied For';
			$new['app_email']    = 'Email';
			$new['app_phone']    = 'Phone';
			$new['app_status']   = 'Status';
		}
	}
	unset( $new['date'] );
	return $new;
}
add_filter( 'manage_' . KOTHARI_CAREERS_APP_CPT . '_posts_columns', 'kothari_careers_application_columns' );

function kothari_careers_application_column_content( $column, $post_id ) {
	switch ( $column ) {
		case 'app_position':
			echo esc_html( get_post_meta( $post_id, '_application_position', true ) );
			break;
		case 'app_email':
			$email = get_post_meta( $post_id, '_application_email', true );
			if ( $email ) {
				echo '<a href="mailto:' . esc_attr( $email ) . '">' . esc_html( $email ) . '</a>';
			}
			break;
		case 'app_phone':
			echo esc_html( get_post_meta( $post_id, '_application_phone', true ) );
			break;
		case 'app_status':
			$status = get_post_meta( $post_id, '_application_status', true );
			$status = $status ? $status : 'New';
			echo esc_html( $status );
			break;
	}
}
add_action( 'manage_' . KOTHARI_CAREERS_APP_CPT . '_posts_custom_column', 'kothari_careers_application_column_content', 10, 2 );

/* -------------------------------------------------------------------------
 * CSV export
 * ---------------------------------------------------------------------- */

function kothari_careers_export_button( $which ) {
	if ( 'top' !== $which || KOTHARI_CAREERS_APP_CPT !== ( $_GET['post_type'] ?? '' ) ) {
		return;
	}
	$url = wp_nonce_url( admin_url( 'admin-post.php?action=kothari_export_applications' ), 'kothari_export_applications' );
	echo '<div class="alignleft actions"><a class="button" href="' . esc_url( $url ) . '">Export CSV</a></div>';
}
add_action( 'manage_posts_extra_tablenav', 'kothari_careers_export_button' );

function kothari_careers_export_applications() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Not allowed.' );
	}
	check_admin_referer( 'kothari_export_applications' );

	$applications = get_posts(
		array(
			'post_type'   => KOTHARI_CAREERS_APP_CPT,
			'post_status' => 'any',
			'numberposts' => -1,
			'orderby'     => 'date',
			'order'       => 'DESC',
		)
	);

	$filename = 'kothari-applications-' . gmdate( 'Y-m-d' ) . '.csv';

	nocache_headers();
	header( 'Content-Type: text/csv; charset=utf-8' );
	header( 'Content-Disposition: attachment; filename=' . $filename );

	$out = fopen( 'php://output', 'w' );
	fputcsv(
		$out,
		array(
			'Applied On',
			'Name',
			'Position',
			'Location',
			'Email',
			'Phone',
			'Total Experience',
			'Relevant Experience',
			'Current CTC',
			'Expected CTC',
			'Notice Period',
			'Qualification',
			'LinkedIn',
			'Status',
			'Resume File',
		)
	);

	foreach ( $applications as $application ) {
		fputcsv(
			$out,
			array(
				get_post_meta( $application->ID, '_application_applied_on', true ),
				get_the_title( $application ),
				get_post_meta( $application->ID, '_application_position', true ),
				get_post_meta( $application->ID, '_application_location', true ),
				get_post_meta( $application->ID, '_application_email', true ),
				get_post_meta( $application->ID, '_application_phone', true ),
				get_post_meta( $application->ID, '_application_total_experience', true ),
				get_post_meta( $application->ID, '_application_relevant_experience', true ),
				get_post_meta( $application->ID, '_application_current_ctc', true ),
				get_post_meta( $application->ID, '_application_expected_ctc', true ),
				get_post_meta( $application->ID, '_application_notice_period', true ),
				get_post_meta( $application->ID, '_application_qualification', true ),
				get_post_meta( $application->ID, '_application_linkedin', true ),
				get_post_meta( $application->ID, '_application_status', true ),
				get_post_meta( $application->ID, '_application_resume_file', true ),
			)
		);
	}

	fclose( $out );
	exit;
}
add_action( 'admin_post_kothari_export_applications', 'kothari_careers_export_applications' );

/* -------------------------------------------------------------------------
 * Private resume storage + admin-only download
 * ---------------------------------------------------------------------- */

function kothari_careers_private_dir() {
	$uploads = wp_upload_dir();
	$dir     = trailingslashit( $uploads['basedir'] ) . 'kothari-careers-private';

	if ( ! file_exists( $dir ) ) {
		wp_mkdir_p( $dir );
	}

	$htaccess = $dir . '/.htaccess';
	if ( ! file_exists( $htaccess ) ) {
		file_put_contents( $htaccess, "Deny from all\n" );
	}

	$index = $dir . '/index.php';
	if ( ! file_exists( $index ) ) {
		file_put_contents( $index, "<?php\n// Silence is golden.\n" );
	}

	return $dir;
}

function kothari_careers_download_resume() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Not allowed.' );
	}

	$app_id = isset( $_GET['app'] ) ? absint( $_GET['app'] ) : 0;
	if ( ! $app_id ) {
		wp_die( 'Invalid application.' );
	}
	check_admin_referer( 'kothari_download_resume_' . $app_id );

	$stored = get_post_meta( $app_id, '_application_resume_file', true );
	$path   = kothari_careers_private_dir() . '/' . basename( (string) $stored );

	if ( ! $stored || ! file_exists( $path ) ) {
		wp_die( 'Resume not found.' );
	}

	$original = get_post_meta( $app_id, '_application_resume_name', true );
	$name     = $original ? $original : basename( $path );

	nocache_headers();
	header( 'Content-Type: application/octet-stream' );
	header( 'Content-Disposition: attachment; filename="' . sanitize_file_name( $name ) . '"' );
	header( 'Content-Length: ' . filesize( $path ) );
	readfile( $path );
	exit;
}
add_action( 'admin_post_kothari_download_resume', 'kothari_careers_download_resume' );

/* -------------------------------------------------------------------------
 * REST API
 * ---------------------------------------------------------------------- */

function kothari_careers_register_rest_routes() {
	register_rest_route(
		'kothari/v1',
		'/jobs',
		array(
			'methods'             => 'GET',
			'callback'            => 'kothari_careers_rest_jobs',
			'permission_callback' => '__return_true',
		)
	);

	register_rest_route(
		'kothari/v1',
		'/apply',
		array(
			'methods'             => 'POST',
			'callback'            => 'kothari_careers_rest_apply',
			'permission_callback' => 'kothari_careers_rest_apply_permission',
		)
	);
}
add_action( 'rest_api_init', 'kothari_careers_register_rest_routes' );

function kothari_careers_rest_jobs() {
	$posts = get_posts(
		array(
			'post_type'   => KOTHARI_CAREERS_JOB_CPT,
			'post_status' => 'publish',
			'numberposts' => -1,
			'orderby'     => 'date',
			'order'       => 'DESC',
			'meta_query'  => array(
				'relation' => 'OR',
				array(
					'key'     => '_job_status',
					'value'   => 'Open',
					'compare' => '=',
				),
				array(
					'key'     => '_job_status',
					'compare' => 'NOT EXISTS',
				),
			),
		)
	);

	$jobs = array();
	foreach ( $posts as $post ) {
		$jobs[] = array(
			'id'               => $post->ID,
			'title'            => get_the_title( $post ),
			'slug'             => $post->post_name,
			'description'      => wp_strip_all_tags( $post->post_content ),
			'department'       => (string) get_post_meta( $post->ID, '_job_department', true ),
			'location'         => (string) get_post_meta( $post->ID, '_job_location', true ),
			'division'         => (string) get_post_meta( $post->ID, '_job_division', true ),
			'job_type'         => (string) get_post_meta( $post->ID, '_job_job_type', true ),
			'experience'       => (string) get_post_meta( $post->ID, '_job_experience', true ),
			'salary_range'     => (string) get_post_meta( $post->ID, '_job_salary_range', true ),
			'openings'         => (int) get_post_meta( $post->ID, '_job_openings', true ),
			'posted_date'      => (string) get_post_meta( $post->ID, '_job_posted_date', true ),
			'status'           => (string) ( get_post_meta( $post->ID, '_job_status', true ) ?: 'Open' ),
			'responsibilities' => (string) get_post_meta( $post->ID, '_job_responsibilities', true ),
			'requirements'     => (string) get_post_meta( $post->ID, '_job_requirements', true ),
		);
	}

	return rest_ensure_response( $jobs );
}

function kothari_careers_rest_apply_permission( $request ) {
	$secret = get_option( KOTHARI_CAREERS_OPTION_SECRET, '' );
	if ( defined( 'KOTHARI_CAREERS_INGEST_SECRET' ) ) {
		$secret = KOTHARI_CAREERS_INGEST_SECRET;
	}

	$headers  = $request->get_headers();
	$provided = isset( $headers['x_kothari_secret'][0] ) ? (string) $headers['x_kothari_secret'][0] : '';
	if ( ! $provided ) {
		$provided = (string) $request->get_header( 'x-kothari-secret' );
	}

	if ( ! $secret || ! $provided || ! hash_equals( $secret, $provided ) ) {
		return new WP_Error( 'kothari_forbidden', 'Invalid ingest secret.', array( 'status' => 403 ) );
	}

	return true;
}

function kothari_careers_rest_apply( $request ) {
	$required = array(
		'name'                => 100,
		'email'               => 160,
		'phone'               => 15,
		'totalExperience'     => 60,
		'relevantExperience'  => 60,
		'currentCTC'          => 60,
		'expectedCTC'         => 60,
		'noticePeriod'        => 60,
		'position'            => 160,
		'location'            => 60,
		'qualification'       => 160,
	);

	$data = array();
	foreach ( $required as $field => $max ) {
		$value = $request->get_param( $field );
		$value = is_scalar( $value ) ? trim( (string) $value ) : '';
		if ( '' === $value ) {
			return new WP_Error( 'kothari_missing_field', 'Missing required field: ' . $field, array( 'status' => 400 ) );
		}
		$data[ $field ] = function_exists( 'mb_substr' ) ? mb_substr( $value, 0, $max ) : substr( $value, 0, $max );
	}

	if ( ! is_email( $data['email'] ) ) {
		return new WP_Error( 'kothari_invalid_email', 'Enter a valid email address.', array( 'status' => 400 ) );
	}
	if ( ! preg_match( '/^[0-9]{10}$/', $data['phone'] ) ) {
		return new WP_Error( 'kothari_invalid_phone', 'Enter a valid 10-digit mobile number.', array( 'status' => 400 ) );
	}

	$linkedin = $request->get_param( 'linkdin' );
	$linkedin = is_scalar( $linkedin ) ? esc_url_raw( trim( (string) $linkedin ) ) : '';

	$files = $request->get_file_params();
	$file  = isset( $files['resume'] ) ? $files['resume'] : null;
	if ( ! $file || ! isset( $file['error'] ) || UPLOAD_ERR_OK !== (int) $file['error'] ) {
		return new WP_Error( 'kothari_missing_resume', 'Please attach your updated resume.', array( 'status' => 400 ) );
	}
	if ( (int) $file['size'] > 5 * 1024 * 1024 ) {
		return new WP_Error( 'kothari_resume_too_large', 'File size must be less than 5MB.', array( 'status' => 400 ) );
	}

	$allowed = array(
		'pdf'  => 'application/pdf',
		'doc'  => 'application/msword',
		'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'jpg'  => 'image/jpeg',
		'jpeg' => 'image/jpeg',
		'png'  => 'image/png',
	);
	$check = wp_check_filetype( $file['name'], $allowed );
	if ( empty( $check['ext'] ) ) {
		return new WP_Error( 'kothari_resume_type', 'Only DOC, PDF, JPEG or PNG resumes are allowed.', array( 'status' => 400 ) );
	}

	$post_id = wp_insert_post(
		array(
			'post_type'   => KOTHARI_CAREERS_APP_CPT,
			'post_status' => 'private',
			'post_title'  => $data['name'],
		),
		true
	);

	if ( is_wp_error( $post_id ) ) {
		return new WP_Error( 'kothari_insert_failed', 'Could not save the application.', array( 'status' => 500 ) );
	}

	$meta = array(
		'_application_position'            => $data['position'],
		'_application_location'            => $data['location'],
		'_application_email'               => $data['email'],
		'_application_phone'               => $data['phone'],
		'_application_total_experience'    => $data['totalExperience'],
		'_application_relevant_experience' => $data['relevantExperience'],
		'_application_current_ctc'         => $data['currentCTC'],
		'_application_expected_ctc'        => $data['expectedCTC'],
		'_application_notice_period'       => $data['noticePeriod'],
		'_application_qualification'       => $data['qualification'],
		'_application_linkedin'            => $linkedin,
		'_application_applied_on'          => current_time( 'Y-m-d H:i:s' ),
		'_application_status'              => 'New',
	);
	foreach ( $meta as $key => $value ) {
		update_post_meta( $post_id, $key, $value );
	}

	require_once ABSPATH . 'wp-admin/includes/file.php';

	$dir       = kothari_careers_private_dir();
	$safe_name = sanitize_file_name( $file['name'] );
	$unique    = wp_unique_filename( $dir, $safe_name );
	$target    = $dir . '/' . $unique;

	if ( move_uploaded_file( $file['tmp_name'], $target ) ) {
		update_post_meta( $post_id, '_application_resume_file', $unique );
		update_post_meta( $post_id, '_application_resume_name', $safe_name );
	} else {
		wp_delete_post( $post_id, true );
		return new WP_Error( 'kothari_resume_save', 'Could not store the resume. Please try again.', array( 'status' => 500 ) );
	}

	return rest_ensure_response(
		array(
			'ok' => true,
			'id' => $post_id,
		)
	);
}
