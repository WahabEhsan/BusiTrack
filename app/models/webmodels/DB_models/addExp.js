const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');

module.exports.main = function main(num, business){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {phone: num};

		var currentDateTime = new Date(Date.now()).toISOString();
		
		var currentDate = currentDateTime.split(con.tea);
		
		var newExp;
			
		var newValue = {$push: {"businesses.$.expenses": newExp}};
	
		var dateTime = {$currentDate: { lastModified: true }};
		
		var temp;
		
		var needUpdate = con.zero;
		
		dbo.collection(con.coll).findOne(query, function(err, res) {
			if (err) throw err;
			for (var i = con.zero; i < res.businesses.length; i++) {
				
				
					//CHECK FOR EMPTY EXPENSE LOG AND BUILD LOG IF EMPTY
					if (res.businesses[i].phoneAbrv == business && res.businesses[i].expenses.length == con.zero) {
						
						needUpdate = con.one;
						
						newExp = {
							date: currentDateTime,
							amount: parseFloat("0.00")
						};
						
						temp = "businesses." + i.toString() + ".expenses";
						newValue = {$push: {[temp]: newExp}};
											
					}
					
					//IF THE LOG ISN'T EMPTY => CHECK TO SEE IF NEW DAY
					else{
						
						for (var j = con.zero; j < res.businesses[i].expenses.length; j++) {
							
							var tempDate = res.businesses[i].expenses[j].date;
							
							var temp2 = tempDate.split(con.tea);
							
							
							//IF THE DAY IS NEW => BUILD NEW EXPENSE LOG
							if (temp2[con.zero] != currentDate[con.zero]) {
								
								needUpdate = con.one;
								
								newExp = {
									date: currentDateTime,
									amount: parseFloat("0.00")
								};
							
								temp = "businesses." + i.toString() + ".expenses";
								newValue = {$push: {[temp]: newExp}};
								

							}
						
							
						}
					
					}
					
			}
		});

		function updateField() {
			dbo.collection(con.coll).updateOne(query, newValue, dateTime, function(err, res) {
				if (err) throw err;
				console.log("Expenses Updated");
			});
			db.close();
		}
		
		function wait() {
						
		//IF AN EXPENSE LOG IS TO BE CREATED => CREATE NEW LOG
			if (needUpdate == con.one) {
				setTimeout(updateField, 2000);
			}
		
		//IF AN EXPENSE LOG IS NOT NEEDED => CLOSE CONNECTION
			else{
			
				db.close();
			
			}
		}
		
		setTimeout(wait, 2000);
		
	});

};

