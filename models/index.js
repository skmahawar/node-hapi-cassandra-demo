(function() {
    'use strict';
    /**
     * Module dependencies
     */
    var async = require('async');
    var createUserTable = require('./user').createTable;
    var config = require('../config/config');

    module.exports = function(client, callback) {
        function createKeyspace(next) {
            var query = "CREATE KEYSPACE IF NOT EXISTS " + config.database + " WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3' }";
            client.execute(query, next);
        }
        async.series([
            createKeyspace,
            createUserTable
        ], function(err) {
            if (err) {
                return callback(err);
            }
            callback();
        });
    }

}());
