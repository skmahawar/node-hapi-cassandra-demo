(function() {
    'use strict';

    /**
     * Expose
     */

    module.exports = {
        hosts: ['127.0.0.1'],
        database: process.env.CASSANDRA_DB,
        secretKey: process.env.HAPI_SECRET_KEY,
        notifier: {
            url: "http://localhost:3031/api/events?access_token=1234"
        },
        facebook: {
            clientID: process.env.FACEBOOK_CLIENTID,
            clientSecret: process.env.FACEBOOK_SECRET,
            callbackURL: 'http://nodejs-express-demo.herokuapp.com/auth/facebook/callback'
        },
        twitter: {
            clientID: process.env.TWITTER_CLIENTID,
            clientSecret: process.env.TWITTER_SECRET,
            callbackURL: 'http://nodejs-express-demo.herokuapp.com/auth/twitter/callback'
        },
        github: {
            clientID: process.env.GITHUB_CLIENTID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: 'http://nodejs-express-demo.herokuapp.com/auth/github/callback'
        },
        linkedin: {
            clientID: process.env.LINKEDIN_CLIENTID,
            clientSecret: process.env.LINKEDIN_SECRET,
            callbackURL: 'http://nodejs-express-demo.herokuapp.com/auth/linkedin/callback'
        },
        google: {
            clientID: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: 'http://nodejs-express-demo.herokuapp.com/auth/google/callback'
        }
    };

}())
