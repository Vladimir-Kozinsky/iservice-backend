import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/order.schema';
import { Request, RequestSchema } from 'src/schemas/request.schema';

@Module({
   imports: [
          MongooseModule.forFeature([{
            name: Order.name,
            schema: OrderSchema
          }]),
          MongooseModule.forFeature([{
            name: Request.name,
            schema: RequestSchema
          }]),
        ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
