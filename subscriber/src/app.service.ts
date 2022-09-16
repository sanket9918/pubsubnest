import { Injectable, OnModuleInit } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';

@Injectable()
export class AppService implements OnModuleInit{

  private pubSubClient;


  onModuleInit() {
    this.pubSubClient = new PubSub();
    const subscription = this.pubSubClient.subscription('mytopic-sub');
    
    // this.pubSubClient.schema('mytopicschema');
    
    subscription.on(`message`, this.messageHandler);
  }

  listenToMessages(){
  }

  messageHandler(message){

    console.log(`message received ${message.id}`);
    console.log(`Data: ${message.data}`);
    message.ack();
  }
  

  
  getHello(): string {
    return 'Hello World!';
  }
}
