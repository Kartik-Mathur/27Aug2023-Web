const passport = require('passport');
const Users = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.Google_ClientID,
    clientSecret: process.env.Google_SecretID,
    callbackURL: "http://localhost:4444/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        let user = Users.findOne({google_id: profile.id});
        try{
            if(user) return cb(null,user);

            user = await Users.create({
                username: profile.displayName,
                google_id: profile.id,
                google_img: profile.photos[0].value,
                google_accessToken: accessToken
            });
    
            return cb(null,user);
        }
        catch(err){
            done(err);
        }
    }
));


passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await Users.findOne({ _id: id });
        if (user) return done(null, user)
        done(null, false);
    }
    catch(err){
        done(err);
    }
});