export declare class CreateOrderDto {
    readonly poNumber: string;
    readonly poDate: string;
    readonly requestNumber: string;
    readonly items: [
        {
            pn: string;
            desc: string;
            ref: string;
            quantity: number;
            uom: string;
            price: string;
            totalprice: string;
        }
    ];
    readonly poPrice: string;
    readonly customer: string;
    readonly billTo: string;
    readonly supplier: string;
    readonly shipAdress: string;
    readonly status: string;
}
