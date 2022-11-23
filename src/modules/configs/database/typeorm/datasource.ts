import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

export const optionsWithoutMigration: DataSourceOptions = {
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: +process.env.TYPEORM_PORT,
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  entities: [
    path.resolve(__dirname, '../../../../', process.env.TYPEORM_ENTITIES),
  ],
  logging: process.env.TYPEORM_LOGGING === 'true',
  supportBigNumbers: true,
};

export const optionsWithMigration: DataSourceOptions = {
  ...optionsWithoutMigration,
  migrations: [
    path.resolve(__dirname, '../../../../../', process.env.TYPEORM_MIGRATIONS),
  ],
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
};

const dataSource = new DataSource(optionsWithMigration);

export default dataSource;
