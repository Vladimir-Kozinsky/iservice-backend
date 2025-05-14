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
    readonly requestedBy: string;
    readonly approvedBy: string;
    readonly approvedDate: string;
}
