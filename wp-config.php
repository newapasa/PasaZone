<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pasazone' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.iWi=S,653~##o0s- O%dg)W=d+:&Z3c,4uIIj,%,KN-J7{7wVb&@zjrsONFn81e' );
define( 'SECURE_AUTH_KEY',  '0Uss;>>}08ooeZW-X7:kv^tT@ZF`Pkl8Cs.F>Dr*#dB+<6M|J=P$queuxiJ`[&Ls' );
define( 'LOGGED_IN_KEY',    '>b*0QStbFtpr#6Xxsp:`IpJ9+uK%&9]Qfk`PdT4:2@oLMI>T+Jo`4Fq9$8fcNO`+' );
define( 'NONCE_KEY',        '_#uap2>IcqjW&A^rawwr[Kfm O4it*;owAg?9?E=[q0L*dJ1$nV<W7]V8Ep6jL05' );
define( 'AUTH_SALT',        'PtFVazr0/q@=>/8,7Nsv;jxKrIyGiZK-j0}b[LmDT(%j;EHwT03IKkl+?;n?e>[9' );
define( 'SECURE_AUTH_SALT', 'p%re=3]q>R#|Vg5#A3h98I~faFL-,`H5,H5m&h0=o>mfbK(/J9%hnsF#xT>E$]ae' );
define( 'LOGGED_IN_SALT',   '7m=wh)d&gseC=)AB|j?F6*8DnrS*d9h3[5#T-;@7,dn[@6iD!r8`sW)8I]UD,!~z' );
define( 'NONCE_SALT',       '#$+|P#kckGxY8s~~AZ/e&Slxaky{#g.H@$>Za|jk#4;P9,jkw8@&qs;:_m^PUnRq' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
