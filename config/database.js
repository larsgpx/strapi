module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', process.env.PGHOST),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', process.env.PGDATABASE),
      user: env('PGUSER', process.env.PGUSER),
      password: env('PGPASS', process.env.PGPASSWORD),
      ssl: env.bool(true),
    },
    debug: false,
    acquireConnectionTimeout: 600000,
    pool: {
      min: 0,
      max: 100,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 50000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis: 10000,
      createRetryIntervalMillis: 2000,
      propagateCreateError: false,
    },
  },
});
