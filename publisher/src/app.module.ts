import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSub } from '@google-cloud/pubsub';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PubSub],
})
export class AppModule {}
