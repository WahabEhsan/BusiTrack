const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(hash, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {id: hash};
		
		var value;
		
		var dateTime = {$currentDate: { lastModified: true }};
		
		dbo.collection(con.coll).findOne(query, function(err, res) {
			if (err) throw err;
			for (var i = con.zero; i < res.businesses.length; i++) {
				for (var j = con.zero; j < res.businesses[i].employee.length; j++) {
					if (res.businesses[i].employee[j].ssn == input[con.one]) {
						var temp = "businesses." + i.toString() + ".employee."+j.toString()+"."+input[con.zero];
						value = {$set: {[temp]: input[con.two]}};
					}
				}
			}
		});
		
		function updateField() {
			dbo.collection(con.coll).updateOne(query, value, dateTime, function(err, res) {
				if (err) throw err;
				console.log("Employee updated");
			});
			db.close();
		}
		
		setTimeout(updateField, 2000);

	});

};

