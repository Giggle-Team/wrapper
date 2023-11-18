import TypedEmitter from "typed-emitter";
import { GiggleAPI } from "..";
import { PaymentEvent } from "../types/events";
type Events = {
    error: (error: Error) => void;
    connect: () => void;
    payment: (data: PaymentEvent) => void;
};
declare const SocketManager_base: new () => TypedEmitter<Events>;
export declare class SocketManager extends SocketManager_base {
    private client;
    private ws;
    private baseUrl;
    constructor(client: GiggleAPI);
    connect(): void;
}
export {};
