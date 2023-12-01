import { EventEmitter } from "node:events";
import TypedEmitter from "typed-emitter";
import WebSocket from "ws";
import { GiggleAPI } from "..";
import { PaymentEvent } from "../types/events";

type Events = {
  error: (error: Error) => void;
  connect: () => void;
  payment: (data: PaymentEvent) => void;
};

export class SocketManager extends (EventEmitter as new () => TypedEmitter<Events>) {
  private ws: WebSocket;

  constructor(private client: GiggleAPI) {
    super();
  }

  connect() {
    const url =
      this.client.props?.base_url ??
      "wss://giggle-api.squareweb.app/ws/connect";
    try {
      this.ws = new WebSocket(url, {
        headers: {
          authorization: this.client.api_key,
        },
      });

      this.ws.on("error", (err) => this.emit("error", err));
      this.ws.on("open", () => this.emit("connect"));
      this.ws.on("message", (message) => {
        const parsed = JSON.parse(message.toString());

        switch (parsed.event) {
          case "payment":
            this.emit("payment", parsed.data);
        }
      });
      this.ws.on("close", () => {
        setTimeout(
          () => this.connect(),
          this.client.props?.reconnect_timeout ?? 1000 * 10
        );
      });
    } catch (err) {}
  }
}
