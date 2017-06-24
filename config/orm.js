var connection = require('./config/connection.js');

var orm = {
    selectAll: function(param1, param2){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(queryString, [param1, param2], function(err, res){
            if(err) throw err;

            console.log(res);
        });
    },
    insertOne: function(param1, param2){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(queryString, [param1, param2], function(err, res){
            if(err) throw err;
            
            console.log(res);
        });
    },
    updateOne: function(param1, param2){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(queryString, [param1, param2], function(err, res){
            if(err) throw err;
            
            console.log(res);
        });
    }
}




module.exports = orm;