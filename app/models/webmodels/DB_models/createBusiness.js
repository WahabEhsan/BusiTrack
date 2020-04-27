const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');


module.exports.main = function main(user, input){ 

    MongoClient.connect(con.uri, function(err, db) {
		if (err) throw err;
        
		/**DB OPERATIONS HERE**/
		var dbo = db.db(con.database);
		
		var query = {username: user};

		var newBusiness = {businessName: input[con.zero], phoneAbrv: input[con.one], employee: [], manager: [], inventory: [], expenses: []};
	
		var newValue = {$push: {businesses: newBusiness}};
	
		var dateTime = {$currentDate: { lastModified: true }};
        
        var dupFlag = false;
        
        dbo.collection(con.coll).findOne(query, function(err, res) {
			if (err) throw err;
            
            for (var i = con.zero; i < res.businesses.length; i++) {
				if (res.businesses[i].phoneAbrv == input[con.one] || res.businesses[i].businessName == input[con.zero]) {
					db.close();
                    dupFlag = true;
                }    
			}
        });
        
		function create() {
			dbo.collection(con.coll).updateOne(query, newValue, dateTime, function(err, res) {
                if (err) throw err;
                console.log("Business Created");
                db.close();
            });

        }
        
        function cont() {
            if (dupFlag == false) {
                setTimeout(create, 200);
            }
        }
        
        setTimeout(cont, 200);

            
	});

    
    
};



