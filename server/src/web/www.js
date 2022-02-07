import { app } from "../server.js";
import * as http from "http";
import config from "../config/index.js";

export const server = http.createServer(app);

app.set("port", config.port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  throw error;
}

function onListening() {
  console.log("Listening on " + config.port);
}

server.listen(config.port, "0.0.0.0", async () => {
  // eslint-disable-next-line no-console
  console.log(`Service started on port ${config.port}`);
});
