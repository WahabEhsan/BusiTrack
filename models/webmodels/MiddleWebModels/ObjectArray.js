//this will compile the objects into an array that
//the html front end can use still need to work on all
//of this ignore current data current data does not work

//unsure if this is necessary
class ObjectArray {
	String business;
	Array Objects;
	
	constructor(business, ObjectSize){
		//these are used to refrence database
		this.business = business;
		Objects = buildArray(business);
		for(int i = 0; i<Objects.length; i++)
		{
			//go through each object to pull its name and data into there respective
			//session storage
			//work on session storage section!!!!
		}
	}
}

	void buildArray(businessID){
		var query = {id: /businessID/};
		dbo.collection("Objects").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
	}
	//next work on update for a specific object

