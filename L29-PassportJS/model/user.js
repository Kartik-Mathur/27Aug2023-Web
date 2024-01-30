const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    FB_AccessToken: String,
    Google_AccessToken: String,
    FB_Name: String,
    Google_Name: String,
    Google_Photo:String,
    FB_ID: String,
    Google_ID: String
});

module.exports = mongoose.model('Users',userSchema);