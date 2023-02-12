import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronsModule } from './crons/crons.module';

@Module({
  imports: [CronsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
