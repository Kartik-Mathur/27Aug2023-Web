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
    FB_Name: String,
    FB_ID: String
});

module.exports = mongoose.model('Users',userSchema);