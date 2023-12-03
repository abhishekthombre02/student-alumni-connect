const mongoose = require("mongoose");

const URI = process.env.MONGODB_URL;
module.exports.connectDatabase = async function () {
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};
