interface ProductArray {
    id: string;
    name: string;
    content: string;
}
export interface PaymentEvent {
    method: string;
    getaway: string;
    client: string;
    products: Array<ProductArray>;
}
export {};
