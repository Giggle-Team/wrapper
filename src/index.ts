import { SocketManager } from "./managers/socket";

interface Props {
   reconnect_timeout?: number;
   connect_socket?: boolean;

   base_url?: string;
}

export class GiggleAPI {
   public api: any;
   public ws: SocketManager;

   /**
    * Creates an API instance
    *
    * @param api_key - Your api_key is generated using the giggle /config command on your server
    */
   constructor(readonly api_key: string, readonly props?: Props) {
      if (props?.connect_socket) {
         this.ws = new SocketManager(this);

         this.ws.connect();
      }
   }
}
