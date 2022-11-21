import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => (await import('./typeorm/datasource')).options,
    }),
  ],
  exports: [TypeOrmModule],
})
export default class DatabaseModule {}
