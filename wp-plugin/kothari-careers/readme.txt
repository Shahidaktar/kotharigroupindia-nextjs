=== Kothari Careers ===
Contributors: indoage
Tags: careers, jobs, applications, recruitment
Requires at least: 5.8
Tested up to: 6.7
Requires PHP: 7.4
Stable tag: 1.2.0

Job posts and application submissions for the Kothari Group website.

== Description ==

Adds a Careers area in the WordPress admin with:

* Job Posts (title, description, department, location, division, job type, experience, salary range, openings, posted date, open/closed, responsibilities, requirements)
* Applications (submitted from the website, with private resume storage)
* Application status workflow (New / Shortlisted / Rejected)
* Automatic status-change email to the applicant (sent through the website's Gmail pipeline, with a wp_mail fallback)
* CSV export of all applications
* A public REST endpoint for jobs and a secure application intake endpoint

== REST endpoints ==

* GET  /wp-json/kothari/v1/jobs
* POST /wp-json/kothari/v1/apply  (requires the X-Kothari-Secret header)

== Status emails ==

Changing an application's status (New / Shortlisted / Rejected) emails the applicant automatically. The plugin first calls the website endpoint `/api/career/status` (Gmail SMTP), authenticated with the ingest secret. If that endpoint is unreachable it falls back to WordPress `wp_mail`.

Each application shows a delivery log and a "Resend status email" button on its edit screen.

To make the `wp_mail` fallback reliable, optionally define Gmail credentials in `wp-config.php`:

    define( 'KOTHARI_CAREERS_SMTP_USER', 'hr@kotharigroupindia.com' );
    define( 'KOTHARI_CAREERS_SMTP_PASS', 'gmail-app-password' );

== Installation ==

1. Upload the kothari-careers folder (or the ZIP) to Plugins > Add New.
2. Activate the plugin.
3. Open Careers > Settings and confirm the ingest secret matches WP_CAREER_INGEST_SECRET in the Next.js environment.
4. Add job posts under Careers > Job Posts.

== Changelog ==

= 1.2.0 =
* Added on-demand revalidation: creating, editing, trashing, restoring or deleting a job now refreshes /career immediately.

= 1.1.0 =
* Emails the applicant when an application status changes.
* Adds a "Resend status email" button and a visible delivery log per application.
* Adds the status email endpoint and plugin version to Careers Settings.

= 1.0.0 =
* Initial release.
