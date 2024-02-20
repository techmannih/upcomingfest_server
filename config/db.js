const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 3000000000000000, // Adjusted to 30 seconds (30,000 milliseconds)
    });
    console.log("Connected to MongoDB Database " + mongoose.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:");
    console.error(error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

module.exports = connectDB;
