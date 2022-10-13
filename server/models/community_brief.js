const mongoose = require("mongoose");
const validator = require("validator");

const Community_brief = mongoose.model("Community_brief", {
  community_name: { type: String, required: true },
  community_id: { type: String, required: true },
  //   community_dp: {},
  user_count: { type: Number, required: true },
  description: { type: String, required: true },
  creation_date: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isDate(value)) {
        throw new Error("Date is invalid.");
      }
    },
  },
});

module.exports = Community_brief;
