(function() {
    'use strict';

    /**
     * Module dependencies.
     */

    var crypto = require('crypto');
    var config = require('../config/config');
    var oAuthTypes = [
        'github',
        'twitter',
        'facebook',
        'google',
        'linkedin'
    ];

    var DataTypes = ["id uuid",
        "first_name text",
        "last_name text",
        "email text",
        "phones set<text>",
        "provider text",
        "hashed_password text",
        "salt text",
        "authToken text",
        "facebook blob",
        "google blob",
        "linkedin blob",
        "twitter blob",
        "created timestamp",
        "PRIMARY KEY(id)"
    ];

    var Columns = DataTypes.map(function(d) {
        return d.split(' ')[0];
    });

    function builder(data) {
        var fields = "";
        var marks = "";
        var values = [];

        for (var property in data) {
            if (data.hasOwnProperty(property)) {
                if (data[property] && ~Columns.indexOf(property)) {
                    fields = fields + property + ", ";
                    marks = marks + "? ,";
                    values.push(data[property]);
                }
            }
        }
        return {
            fields: fields,
            marks: marks,
            values: values
        };
    }

    /**
     * [createTable description]
     * @param  {Function} callback [description]
     * @return {[type]}        [description]
     */
    exports.createTable = function(callback) {
        var query = 'CREATE TABLE IF NOT EXISTS ' + config.database + '.user ( ' + DataTypes.join(", ") + ' )';
        client.execute(query, callback);
    };

    /**
     * [load description]
     * @param  {Function} callback [description]
     * @return {[type]}        [description]
     */
    exports.load = function(options, callback) {
        var query = 'SELECT id, first_name, last_name, email FROM ' + config.database + '.user \
        WHERE id = ?';
        client.execute(query, [id], {
            prepare: true
        }, function(err, result) {
            if (err) return callback(err);
            var row = result.first();
            console.log('Obtained row: ', row);
            callback(null, row);
        });
    }

    /**
     * [save description]
     * @param  {[type]}   data     [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    exports.save = function(data, callback) {
        var obj = builder(data);
        var query = 'INSERT INTO ' + config.database + '.user ( ' + obj.fields + ' ) VALUES ( ' + obj.marks + ' )';
        client.execute(query, obj.values, {
            prepare: true
        }, callback);
    }

}());
