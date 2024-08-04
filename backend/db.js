const mongoose = require("mongoose");

const mongoURI =
  "mongodb://localhost:27017/ynotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
  //
  mongoose.connect(mongoURI).then(() => console.log("Connected Successfully"));

  //
  // mongoose.connect(mongoURI, () => {
  //   console.log("Connected to Mongo Successfully");
  // });
};

module.exports = connectToMongo;
