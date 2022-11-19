const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken');


const community_schema = new mongoose.Schema({
  community_brief: {
    community_name: { type: String, required: true, unique : true },
    community_dp: {type : Buffer},
    user_count: { type: Number },
    description: { type: String, required: true },
  },
  student_channel: [
    { channel_name: { type: String } },
    { channel_id: { type: String } },
    { unseen_messages: {type: Number}}
  ],
  mentor: [
    { channel_name: { type: String } },
    { channel_id: { type: String} },
    { unseen_messages: {type: Number}}
  ],
  professional: [
    { channel_name: { type: String} },
    { channel_id: { type: String} },
    { unseen_messages: {type: Number}}
  ],
  teacher: [
    { channel_name: { type: String} },
    { channel_id: { type: String } },
    { unseen_messages: {type: Number}}
  ],
  requests: [{
        user_name : { type: String},
        user_id : { type: String},
        user_dp : {type : Buffer}
    }
  ],
  members: [{
    user_name : { type: String},
    user_id : { type: String} ,
    role : {type : String , default : "4" },
    user_dp: {type : Buffer}
  }]
})

const Community = mongoose.model("Community" , community_schema);

module.exports = Community;
