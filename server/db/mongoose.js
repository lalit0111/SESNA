const mongoose = require("mongoose");
const url =
  "mongodb+srv://sesna_btp:sesna_123@cluster0.xnijrxs.mongodb.net/sesna?retryWrites=true&w=majority";
const connectionParams = {
};
mongoose.connect(url, connectionParams)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });
