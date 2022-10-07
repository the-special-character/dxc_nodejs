const mongoose = require("mongoose");

const {connect, connection} = mongoose

const defaultOptions = {
  connectTimeoutMS: 2000,
  keepAlive: true,
};

const connectDB = async () => {
  try {
    connection.on("connected", () => {
      console.log("Mongo Connection Established");
    });
    connection.on("reconnected", () => {
      console.log("Mongo Connection Reestablished");
    });
    connection.on("disconnected", () => {
      console.log("Mongo Connection Disconnected");
      console.log("Trying to reconnect to Mongo ...");
      setTimeout(async () => {
        await connect("mongodb://localhost:27017/quizeApp", { ...defaultOptions, socketTimeoutMS: 3000 });
      }, 3000);
    });
    connection.on("close", () => {
      console.log("Mongo Connection Closed");
    });
    connection.on("error", (error) => {
      console.log(`Mongo Connection ERROR: ${error}`);
    });
    await connect("mongodb://localhost:27017/quizeApp", defaultOptions);
  } catch (error) {
    console.error(error)
  }
};

export default connectDB;
