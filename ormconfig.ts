/**
 * TypeORM 마이그레이션 목적으로만 사용
 */
 export default {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['src/modules/**/*.entity{.ts,.js}'],
    logging: true,
    logger: 'file',
    migrations: ['src/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };