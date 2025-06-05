import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UnitModule } from './Unit/unit.module';
import { ToolModule } from './tool/tool.module';
import { RequestModule } from './request/request.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://user1:user1@cluster0.lswt8ul.mongodb.net/new-way?retryWrites=true&w=majority'),
    AuthModule, UnitModule, ToolModule, RequestModule, OrderModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}