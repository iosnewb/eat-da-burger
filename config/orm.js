var connection = require('../config/connection.js');

var orm = {
    selectAll: function(param1, cb){
        var queryString = "SELECT * FROM " +param1;

        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    },
    insertOne: function(param1, cb){
        var queryString = "INSERT INTO " +param1;

        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    },
    updateOne: function(param1, param2, cb){
        var queryString = "UPDATE " +param1;

        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    }
}


module.exports = orm;