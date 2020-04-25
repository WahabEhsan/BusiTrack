const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(num, business, command, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {phone: num};
		
		var value0;
		
		var value1;
		
		var currentDateTime = new Date(Date.now()).toISOString();
		
		var currentDate = currentDateTime.split(con.tea);
		
		var dateTime = {$currentDate: { lastModified: true }};
		
		dbo.collection(con.coll).findOne(query, function(err, res) {
			if (err) throw err;
			
			for (var i = con.zero; i < res.businesses.length; i++) {
				
				for (var j = con.zero; j < res.businesses[i].expenses.length; j++) {
					
					var tempDate = res.businesses[i].expenses[j].date;
							
					var temp0 = tempDate.split(con.tea);
					
					if (temp0[con.zero] == currentDate[con.zero]) {
						
						var currentExp = res.businesses[i].expenses[j].amount;
						
						if (command == con.add) {
							currentExp += parseFloat(input);
						}
						
						else if (command == con.subtract) {
							currentExp -= parseFloat(input);
						}
						
						var temp1 = "businesses." + i.toString() + ".expenses."+j.toString()+"."+'date';
						
						var temp2 = "businesses." + i.toString() + ".expenses."+j.toString()+"."+'amount';
						
						value0 = {$set: {[temp1]: currentDateTime, [temp2]: parseFloat(currentExp)}};
							
						
						//value1 = {$set: {[temp2]: currentExp}};
							
						console.log(value0);
						
						console.log(value1);
						
					}
					
					
				}
			}
		});
		
		function updateField() {
			
			dbo.collection(con.coll).updateOne(query, value0, dateTime, function(err, res) {
				if (err) throw err;
			});
			
			//function wait() {
			//	dbo.collection(con.coll).updateOne(query, value1, dateTime, function(err, res) {
			//		if (err) throw err;
			//	});
			//}
			//
			//setTimeout(wait, 2000);
			
			console.log("Expenses Updated");

			db.close();
		}
		
		setTimeout(updateField, 2000);
		
		//db.close();

	});

};

