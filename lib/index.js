"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiggleAPI = void 0;
const socket_1 = require("./managers/socket");
class GiggleAPI {
    api_key;
    props;
    api;
    ws;
    /**
     * Creates an API instance
     *
     * @param api_key - Your api_key is generated using the giggle /config command on your server
     */
    constructor(api_key, props) {
        this.api_key = api_key;
        this.props = props;
        if (props?.connect_socket) {
            this.ws = new socket_1.SocketManager(this);
            this.ws.connect();
        }
    }
}
exports.GiggleAPI = GiggleAPI;
//# sourceMappingURL=index.js.map