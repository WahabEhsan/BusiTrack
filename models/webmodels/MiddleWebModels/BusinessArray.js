
//this will compile the business into an array that
//the html front end can use. still need to work on all
//of this ignore current data current data does not work


//currently just working on formating after it refrences the DB

class BusinessArray {
	String name;
	Array ObjectArray; //dont know if this needs to be specific array class for business object.
	constructor(name){
		//these are used to refrence database
		this.name = name;
		this.ObjectArray = buildArray(id);
		for(int i = 0; i<this.objectArray.length; i++)
		{
			//loop through each business and return its object array.
		}
	}
}
//constructs the array of business that the user has access to.
	Array buildArray(userID, array){
		//query the database to populate the businesses
		var query = {id: /userID/};
		dbo.collection("Business").find(query).toArray(function(err, result) {
    if (err) throw err;
    return result;
    db.close();
  });
	}
	
	//work on update for a specific business
