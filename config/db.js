const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB Database " + mongoose.connection.host);
  } catch (error) {
    console.error("MONGO Connect Error");
    console.error(error);
  }
};

module.exports = connectDB;
