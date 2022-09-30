import { connect, connection } from "mongoose";
    
const defaultOptions = {
  connectTimeoutMS: 2000,
  keepAlive: true,
};

const connectDB = async (options) => {
    await connect(process.env.MONGODB_URI, options);
};

const mongoConnect = () => {
  connection.on("connected", () => {
    console.log("Mongo Connection Established");
  });
  connection.on("reconnected", () => {
    console.log("Mongo Connection Reestablished");
  });
  connection.on("disconnected", () => {
    console.log("Mongo Connection Disconnected");
    console.log("Trying to reconnect to Mongo ...");
    setTimeout(() => {
      connectDB({ ...defaultOptions, socketTimeoutMS: 3000 });
    }, 3000);
  });
  connection.on('close', () => {
    console.log('Mongo Connection Closed');
  });
  connection.on('error', (error) => {
    console.log(`Mongo Connection ERROR: ${error}`);
  });
  connectDB(defaultOptions).catch((error) => console.error(error));
};

export default mongoConnect;
