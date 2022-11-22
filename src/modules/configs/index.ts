import DatabaseModule from './database/database.module';
import { ConfigModule } from '@nestjs/config';

export const ConfigurationModules = [
  ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
    envFilePath: globalThis.ENV_FILE || 'environments/.env',
  }),
  DatabaseModule,
];
