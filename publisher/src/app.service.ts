import { Injectable, OnModuleInit } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';
import { MyMessageDto } from './mymessage.dto'

@Injectable()
export class AppService implements OnModuleInit{
    private pubSubClient;

  // constructor(private pubSubClient : PubSub){

  // }

  onModuleInit() {
    this.pubSubClient = new PubSub();
  }

  pushMessage(myMessageDto : MyMessageDto){

    const data = JSON.stringify(myMessageDto);
    const dataBuffer = Buffer.from(data);
    
    this.pubSubClient.topic('mytopic').publish(dataBuffer);

    return "pushed"


  }
  

  
  getHello(): string {
    return 'Hello World!';
  }
}
