const mongoose = require("mongoose");
const validator = require("validator");

const User_brief = mongoose.model("User_brief", {
  personal_detail: {
    name: { type: String, required: true, trim: true },
    displayPicture: {},
    userId: {type: String, required: true}
  },
});

module.exports = User_brief;
