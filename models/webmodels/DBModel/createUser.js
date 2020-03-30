const {MongoClient} = require('mongodb');



/**PASS STRINGS TO BE ENTERED AS ATTRS IN main() USE TO STRING FUNCTION ON THESE VARS**/
module.exports.main = async function main(user, hash, emailAddress){
    const uri = "mongodb+srv://bt_general:287Y4sdwEh1iVh7s@sandbox-0zyvs.mongodb.net/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
         
        //Insert to ListingsandReviews
        await createListing(client,
            {
				username: user,
                id: hash,
                email: emailAddress,
                phone: "",
				lastMsg: ""
            }
        );
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//Only needed when connecting to mongoDB via this file
//Otherwise leave this out and call it from outside of this file with REQUIRE.
//main().catch(console.error);


/**This attempts to add a bt_user document to the bt_user collection**/
async function createListing(client, newListing){
    const result = await client.db("busitrack").collection("bt_user").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
};