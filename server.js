const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const EventRouter = require("./routes/eventRoutes");

// env config
dotenv.config();

// mongodb connection
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Add a custom middleware to handle non-JSON requests
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // Handle JSON parsing error
    res.status(400).json({ error: "Invalid JSON" });
  } else {
    next();
  }
});

// ... rest of your middleware and routes


// Specify a base path for the event routes
app.use("/api", EventRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    "Server running on " + process.env.DEV_MODE + " mode, port no. " + PORT
  );
});
