const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(user, business, input) {

    MongoClient.connect(con.uri, function (err, db) {
        if (err) throw err;

        /**DB OPERATIONS HERE**/
        var dbo = db.db(con.database);

        var query = { username: user, "businesses.businessName": business };

        var newEmp = {
            ssn: input[con.zero],
            fName: input[con.one],
            lName: input[con.two],
            contact: input[con.three],
            address: input[con.four],
            pay: input[con.five],
            group: input[con.six]
        };

        var newValue = { $push: { "businesses.$.employee": newEmp } };

        var dateTime = { $currentDate: { lastModified: true } };

        dbo.collection(con.coll).updateOne(query, newValue, dateTime, function (err, res) {
            if (err) throw err;
            console.log("Employee Added");
            db.close();

        });

    });

};
