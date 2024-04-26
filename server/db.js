const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(conn.connection.name);
  } catch (error) {
    console.log("Does this mean it is not working ?");
    console.log(`Error is in here: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
