import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MyMessageDto } from './mymessage.dto'

class PostDto {
  name : string;
  age : number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() myMessageDto : MyMessageDto): string {

    

    // const topicName = "mytopic";
    return this.appService.pushMessage(myMessageDto);
  }
}
