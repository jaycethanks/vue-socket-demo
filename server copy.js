const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.path("/socket.io/");
io.on("connection", (socket) => {
  console.log("a user connect");

  socket.broadcast.emit("hi");
  // console.log(socket);
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log("message: " + msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3200, () => {
  console.log("listening on *:3200");
});
