const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  personal_detail: {
    name: { type: String, required: true, trim: true },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("Mobile Number is invalid.");
        }
      },
    },
    location: {
      address: { type: String, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
    },
    dob: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isDate(value)) {
          throw new Error("Date is invalid.");
        }
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    display_picture: {},
    cover_picture: {},
  },
  // isAdmin: {
  //   type: Boolean,
  //   required: true,
  // },
  // isPublic: {
  //   type: Boolean,
  //   required: true,
  // },
  // friends: [
  //   {
  //     type: String,
  //   },
  // ],
  // joined_community: [
  //   {
  //     role: { type: Number, required: true },
  //     community_name: { type: String },
  //     community_picture: {},
  //     community_id: { type: String, requird: true },
  //   },
  // ],
});

module.exports = User;
