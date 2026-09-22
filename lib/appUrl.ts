/**
 * Where "Get Started" and the other calls to action send people: the PgBee
 * web app.
 *
 * Kept as a single constant because the previous value, https://app.pgbee.in,
 * was hardcoded in four places across three components and the domain no
 * longer resolves - every call to action on the landing page was a dead link.
 * One constant means the next domain move is a one-line change.
 */
export const APP_URL = "https://pgbee-client.rprahulofficial07.workers.dev";
