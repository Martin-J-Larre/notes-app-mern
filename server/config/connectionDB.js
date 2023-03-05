const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGO);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
