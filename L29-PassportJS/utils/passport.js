const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            let user = await User.findOne({ username: username });
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) return done(err);
                if (result) return done(null, user);
                return done(null, false);
            });
        }
        catch (err) {
            if (err) return done(err);
        }
    }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        console.log("AT ", accessToken);
        console.log("RT ", refreshToken);
        console.log("Profile :", profile);
        // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        try {
            let existingUser = await User.findOne({FB_AccessToken: accessToken});
            if(existingUser) return cb(null,existingUser);
            let user = await User.create({
                username: profile.displayName,
                FB_AccessToken: accessToken,
                FB_Name: profile.displayName,
                FB_ID: profile.id
            })
            return cb(null,user);
        }
        catch(err){
            return cb(err);
        }
  }
));

passport.use(new GoogleStrategy({
    clientID: "980199829392-cjubld9vgn5uuikq1fq1ohhg919ljkmg.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log("AT ", accessToken);
        console.log("RT ", refreshToken);
        console.log("Profile :", profile);
        // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        try {
            let existingUser = await User.findOne({Google_AccessToken: accessToken});
            if(existingUser) return cb(null,existingUser);
            let user = await User.create({
                username: profile.displayName,
                Google_AccessToken: accessToken,
                Google_ID: profile.id,
                Google_Photo: profile.photos[0].value
            })
            return cb(null,user);
        }
        catch(err){
            return cb(err);
        }
  }
));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await User.findOne({ _id: id });
        console.log("User", user);
        if (!user) return done(null, false);
        return done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;