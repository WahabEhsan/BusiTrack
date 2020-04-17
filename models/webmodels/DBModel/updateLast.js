const {MongoClient} = require('mongodb');



/**PASS STRINGS TO BE ENTERED AS ATTRS IN main() USE TO STRING FUNCTION ON THESE VARS**/
module.exports.main = async function main(hash, entry){
    const uri = "mongodb+srv://bt_general:287Y4sdwEh1iVh7s@sandbox-0zyvs.mongodb.net/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
         
        //Insert to ListingsandReviews
        await auth(client, hash, entry);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//Only needed when connecting to mongoDB via this file
//Otherwise leave this out and call it from outside of this file with REQUIRE.
//main().catch(console.error);


/**This attempts to delete a bt_user document last mobile message**/
async function auth(client, hash, entry){
	var myQuery = {id: hash};
	var newValue = {$set: {lastMsg: entry}};
	var dateTime = {$currentDate: { lastModified: true }};
    const result = await client.db("busitrack").collection("bt_user").updateOne(myQuery, newValue, dateTime);
    console.log(`User updated`);
};