(function() {
    'use strict';

    /*!
     * Module dependencies.
     */

    var fs = require('fs');
    var envFile = require('path').join(__dirname, 'env.json');

    var env = {};

    // Read env.json file, if it exists, load the id's and secrets from that
    // Note that this is only in the development env
    // it is not safe to store id's in files

    if (fs.existsSync(envFile)) {
        env = fs.readFileSync(envFile, 'utf-8');
        env = JSON.parse(env);
        Object.keys(env).forEach(function(key) {
            process.env[key] = env[key];
        });
    }

    /**
     * Expose
     */

    module.exports = {
        hosts : ['127.0.0.1']
        database: 'noobjs_dev',
        secretKey: "hapi-server-secret-key",
        notifier: {
            url: "http://localhost:3031/api/events?access_token=1234"
        },
        facebook: {
            clientID: process.env.FACEBOOK_CLIENTID,
            clientSecret: process.env.FACEBOOK_SECRET,
            callbackURL: 'http://localhost:3000/auth/facebook/callback'
        },
        twitter: {
            clientID: process.env.TWITTER_CLIENTID,
            clientSecret: process.env.TWITTER_SECRET,
            callbackURL: 'http://localhost:3000/auth/twitter/callback'
        },
        github: {
            clientID: process.env.GITHUB_CLIENTID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        linkedin: {
            clientID: process.env.LINKEDIN_CLIENTID,
            clientSecret: process.env.LINKEDIN_SECRET,
            callbackURL: 'http://localhost:3000/auth/linkedin/callback'
        },
        google: {
            clientID: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback'
        }
    };

}())