/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { OrderService } from './order.service';
import { Order } from 'src/schemas/order.schema';
import { CreateOrderDto } from 'src/dto/order/create-order.dto';
import { GetOrdersDto } from 'src/dto/order/get-orders.dto';
import { ApproveOrderDto } from 'src/dto/order/approve-order.dto';
import { AcceptOrderDto } from 'src/dto/order/accept-order.dto';
import { updateOrderStatusDto } from 'src/dto/order/update-status.dto';
import { CancelOrderDto } from 'src/dto/order/cancel-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    requests(getOrdersDto: GetOrdersDto): Promise<{
        totalPages: number;
        currentPage: number;
        orders: (import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
    }>;
    approve(approveOrderDto: ApproveOrderDto): Promise<import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    accept(acceptOrderDto: AcceptOrderDto): Promise<import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    cancel(cancelOrderDto: CancelOrderDto): Promise<import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    updateOrderStatus(updateOrderStatusDto: updateOrderStatusDto): Promise<import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
