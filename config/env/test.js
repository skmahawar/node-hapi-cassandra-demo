(function() {
    'use strict';

    /**
     * Expose
     */

    module.exports = {
        hosts: ['127.0.0.1']
        database: 'noobjs_test',
        secretKey: process.env.HAPI_SECRET_KEY,
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
