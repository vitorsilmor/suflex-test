import { Module } from '@nestjs/common';
import { ConfigurationModules } from './configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [...ConfigurationModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
