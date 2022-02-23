import { MongooseModule } from '@nestjs/mongoose';
// Added MongoDB for connection establishment
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [RecordsModule, MongooseModule.forRoot("mongodb://127.0.0.1:27017/auto-g")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
