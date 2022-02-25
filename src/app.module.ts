import { MongooseModule } from '@nestjs/mongoose';
// Added MongoDB for connection establishment
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [RecordsModule, MongooseModule.forRoot("mongodb+srv://mlyk1234:king5247@cluster0.nbwgm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
