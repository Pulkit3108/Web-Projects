const mongoose = require("mongoose");
const mongoURL =
  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectToMongo = () => {
  mongoose.connect(mongoURL, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to " + mongoURL);
  });
  mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });
};
module.exports = connectToMongo;
