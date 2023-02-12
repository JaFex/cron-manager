import { All, Body, Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @All('test')
  testCronJob(@Body('message') message: string) {
    Logger.log(`Body: ${message}`);
  }
}
