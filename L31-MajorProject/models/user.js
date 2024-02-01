const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: String,
  google_accessToken: String,
  google_img: String,
  google_id: String,
});

module.exports = mongoose.model('Users',userSchema);