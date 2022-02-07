import { app } from "../server.js";
import * as http from "http";
import config from "../config";

export const server = http.createServer(app);
const port = config.port || 8006;
app.set("port", port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  throw error;
}

function onListening() {
  console.log("Listening on " + port);
}

server.listen(port, "0.0.0.0", async () => {
  // eslint-disable-next-line no-console
  console.log(`Service started on port ${port}`);
});
