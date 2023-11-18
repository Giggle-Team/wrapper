import { SocketManager } from "./managers/socket";
interface Props {
    reconnect_timeout?: number;
    connect_socket?: boolean;
}
export declare class GiggleAPI {
    readonly api_key: string;
    readonly props?: Props | undefined;
    api: any;
    ws: SocketManager;
    /**
     * Creates an API instance
     *
     * @param api_key - Your api_key is generated using the giggle /config command on your server
     */
    constructor(api_key: string, props?: Props | undefined);
}
export {};
