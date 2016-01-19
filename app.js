(function() {
    'use strict';
    /**
     * Module dependencies
     */
    GLOBAL._ = require('underscore');
    var Hapi = require('hapi');
    var cassandra = require('cassandra-driver');
    var winston = require('./winston');
    var config = require('./config/config');
    var port = process.env.PORT || 3000;

    process.on('uncaughtException', function(err) {
        winston.error('Uncaught exception', err);

        process.exit(1);
    });

    var client = new cassandra.Client({
        contactPoints: config.hosts
    });

    // Connect to cassandra
    client.connect(function(err) {
        if (err) {
            client.shutdown();
            return winston.error('There was an error when connecting', err);
        }
        winston.info('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
        winston.info('Keyspaces: %j', Object.keys(client.metadata.keyspaces));

        require('./models')(client, listen);        
    });

    function listen(err) {
        if (err) {
            winston.error('There was an error', err.message, err.stack);
            winston.info('Shutting down');
            return client.shutdown();
        }
        var server = new Hapi.Server();
        server.connection({
            port: port
        });
        require('./config/hapi')(server, function registerCallback(err) {
            if (err) {
                winston.error(err);
                throw err;
            }
            require('./config/routes')(server);
        });
        server.start(function() {
            winston.info('Hapi API server started at', server.info.uri);
        });
    }

}());
