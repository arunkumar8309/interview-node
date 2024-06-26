const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongooes.connect("mongodb://localhost:3001/mydatabase"
    // only change this line for connection error :---- localhost:3001

    await mongoose.connect("mongodb://127.0.0.1/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to MongoDB successful");
  } catch (err) {
    console.error("Not Connected", err.message);
  }

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });
};

module.exports = connectDB;
