const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(hash){ 
	
    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		dbo.collection(con.coll).findOne({id: hash}, function(err, res) {
			if (err) throw err;
			for (var i = con.zero; i < res.businesses.length; i++) {
				con.tempArray[i] = res.businesses[i].businessName;
			}
			db.close();
		});
		
	});

	
};
