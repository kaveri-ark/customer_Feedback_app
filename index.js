const passport = require("passport");
const express = require("express");
const  googleStragey = require("passport-google-oauth20").Strategy;
const  keys = require("./config/keys");



const app = express();

passport.use(new googleStragey({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'auth/google/callback'
},
     accessToken=>{
         console.log("access token")
     }
));

app.get( '/auth/google', passport.authenticate('google',{
scope:['profile','email']
}))
const PORT= process.env.PORT || 3000;

app.listen(PORT)