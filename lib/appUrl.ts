/**
 * Where "Get Started" and the other calls to action send people: the PgBee
 * web app.
 *
 * Kept as a single constant because the old value, https://app.pgbee.in, was
 * hardcoded in four places across three components and that domain stopped
 * resolving - every call to action on the landing page became a dead link.
 * One constant means the next domain move is a one-line change.
 */
export const APP_URL = "https://app.pgbee.co.in/";
