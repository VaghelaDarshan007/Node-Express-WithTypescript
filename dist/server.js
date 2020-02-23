"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log("Server Connected!!!");
});
//# sourceMappingURL=server.js.map