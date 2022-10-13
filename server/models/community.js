const mongoose = require("mongoose");
const validator = require("validator");

const Community = mongoose.model("Community", {
  community_brief: {
    community_name: { type: String, required: true },
    //   community_dp: {},
    user_count: { type: Number, required: true },
    description: { type: String, required: true },
  },
  StudentChannel: [
    { ChannelName: { type: String, required: true } },
    { ChannelId: { type: String, required: true } },
    { UnseenMessages: {type: Number}}
  ],
  Mentor: [
    { ChannelName: { type: String, required: true } },
    { ChannelId: { type: String, required: true } },
    { UnseenMessages: {type: Number}}
  ],
  Professional: [
    { ChannelName: { type: String, required: true } },
    { ChannelId: { type: String, required: true } },
    { UnseenMessages: {type: Number}}
  ],
  Teacher: [
    { ChannelName: { type: String, required: true } },
    { ChannelId: { type: String, required: true } },
    { UnseenMessages: {type: Number}}
  ],
  Requests: [
    { UserName: { type: String, required: true } },
    { UserId: { type: String, required: true } },
    { UserDP: {}}
  ],
});

module.exports = Community;
