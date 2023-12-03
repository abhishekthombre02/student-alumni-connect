/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { ObjectId } = require("mongodb");

const BlogSchema = new Schema(
  {
    data: {
      type: String,
      required: false,
      trim: true,
    },
    
    user: {
    },
    likes: {
      type: Number,
      required: true,
      trim: true,
    },
    ldata:[]
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogs", BlogSchema);
