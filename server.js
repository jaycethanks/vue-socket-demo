const WebSocketServer = require("ws").WebSocketServer;

const port = 3200;
const wss = new WebSocketServer({ port }, () => {
  console.log(`ws listening on port: ${port} `);
});

wss.on("connection", function connection(ws) {
  console.log("a user connected");
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
