"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketManager = void 0;
const node_events_1 = require("node:events");
const ws_1 = __importDefault(require("ws"));
class SocketManager extends node_events_1.EventEmitter {
    client;
    ws;
    baseUrl = "https://pay-home.gigglebot.website/ws/connect";
    constructor(client) {
        super();
        this.client = client;
    }
    connect() {
        try {
            this.ws = new ws_1.default(this.baseUrl, {
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
            this.ws.on("close", (code) => {
                setTimeout(() => this.connect(), this.client.props?.reconnect_timeout ?? 1000 * 10);
            });
        }
        catch (err) { }
    }
}
exports.SocketManager = SocketManager;
//# sourceMappingURL=socket.js.map