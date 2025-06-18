export declare class CreateRequestDto {
    readonly requestNumber: string;
    readonly date: string;
    readonly priority: string;
    readonly items: [
        item: number,
        pn: string,
        desc: string,
        ref: string,
        quantity: number
    ];
    readonly status: string;
    readonly statusHistory: [
        date: string,
        status: string,
        remark: string,
        user: string
    ];
}
