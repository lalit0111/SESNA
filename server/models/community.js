const mongoose = require("mongoose");
const validator = require("validator");

const Community = mongoose.model("Community", {
  community_brief: {
    community_name: { type: String, required: true },
    //   community_dp: {},
    user_count: { type: Number, required: true },
    description: { type: String, required: true },
  },
  student_channel: [
    { channel_name: { type: String, required: true } },
    { channel_id: { type: String, required: true } },
    { unseen_messages: {type: Number}}
  ],
  mentor: [
    { channel_name: { type: String, required: true } },
    { channel_id: { type: String, required: true } },
    { unseen_messages: {type: Number}}
  ],
  professional: [
    { channel_name: { type: String, required: true } },
    { channel_id: { type: String, required: true } },
    { unseen_messages: {type: Number}}
  ],
  teacher: [
    { channel_name: { type: String, required: true } },
    { channel_id: { type: String, required: true } },
    { unseen_messages: {type: Number}}
  ],
  requests: [
    { user_name: { type: String, required: true } },
    { user_id: { type: String, required: true } },
    { user_dp: {}}
  ],
});

module.exports = Community;
