const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const user_schema = new mongoose.Schema({
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
      unique : true,
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
  is_admin: {
    type: Boolean,
  },
  is_public: {
    type: Boolean,
    required: true,
  },
  // friends: [{ name: { type: String }, friend_id: { type: String } }],
  // joined_community: [
  //   {
  //     role: { type: Number, required: true },
  //     community_name: { type: String },
  //     community_picture: {},
  //     community_id: { type: String, requird: true },
  //   },
  // ],
  tokens:[{
    token:{
      type:String,
      //required:true
    }
  }]
})

user_schema.methods.generate_authtoken = async function(){
  const user = this
  const token = jwt.sign({_id: user._id.toString()},'thisismynewcourse')

  user.tokens = user.tokens.concat({token})
  await user.save()
  
  return token
}

user_schema.statics.findbycredentials = async(email,password)=>{
  const user = await User.findOne({email})

  if(!user)
  {
    throw new Error('Unable to login')
  }
  const is_match = await bcrypt.compare(password,user.personal_detail.password)
  if(!is_match){
    throw new Error('Unable to login')
  }
  return user
}

user_schema.pre('save', async function(next){
  const user = this

  if(user.isModified('personal_detail.password')){
    user.personal_detail.password=await bcrypt.hash(user.personal_detail.password,8)
  }

  next()
})

const User = mongoose.model("User", user_schema);

module.exports = User;
