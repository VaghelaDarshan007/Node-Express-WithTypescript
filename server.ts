import * as http from "http";
import * as app from "./app";
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Server Connected!!!")
});