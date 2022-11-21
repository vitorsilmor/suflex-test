import { Module } from '@nestjs/common';
import { ConfigurationModules } from '../configurations';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [...ConfigurationModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
