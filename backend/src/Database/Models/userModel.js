/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { ObjectId } = require("mongodb");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: false,
      trim: true,
    },
    designation: {
      type: String,
      required: false,
      trim: true,
    },
    firstName: {
      type: String,
      required: false,
      trim: true,
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
    },
    domain: {
      type: String,
      required: false,
      trim: true,
    },
    course: {
      type: String,
      required: false,
      trim: true,
    },
    gender: {
      type: String,
      required: false,
      trim: true,
    },
    dob: {
      type: String,
      required: false,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
