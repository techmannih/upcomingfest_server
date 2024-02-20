const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    "Server running on " + process.env.DEV_MODE + " mode, port no. " + PORT
  );
});
