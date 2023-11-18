# @gigglebot/wrapper

Com essa biblioteca você poderá fazer automações baseadas nas ações do Giggle em seu servidor

## Instalação

```bash
npm install @gigglebot/wrapper
or
pnpm add @gigglebot/wrapper
or
yarn install @gigglebot/wrapper
```

## Exemplos

```javascript
const Giggle = require("@gigglebot/wrapper/lib");

const Giggle = new GiggleAPI("api_key", {
  reconnect_timeout: 1000 * 10,
  connect_socket: true,
});

Giggle.ws.on("connect", () => console.log("socket connected successfull"));
```
