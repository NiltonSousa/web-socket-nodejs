const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("Menssage received: ", message);
    ws.send(message);
  });
});

server.listen(process.env.PORT || 9898, () => {
  console.log("Server listening on port -->:", server.address().port);
});
