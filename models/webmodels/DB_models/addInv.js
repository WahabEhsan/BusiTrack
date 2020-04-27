const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(hash, business, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {id: hash, "businesses.businessName": business};

		var newInv = {
			itemNumber: input[con.zero],
			itemName: input[con.one],
			itemPrice: input[con.two],
			stock: input[con.three],
			};
	
		var newValue = {$push: {"businesses.$.inventory": newInv}};
	
		var dateTime = {$currentDate: { lastModified: true }};
		
		dbo.collection(con.coll).updateOne(query, newValue, dateTime, function(err, res) {
			if (err) throw err;
			console.log("Item added to Inventory");
			db.close();
            
		});

	});

};
