const {MongoClient} = require('mongodb');



/**PASS STRINGS TO BE ENTERED AS ATTRS IN main() USE TO STRING FUNCTION ON THESE VARS**/
module.exports.connect = async function main(){
    const uri = "mongodb+srv://bt_general:287Y4sdwEh1iVh7s@sandbox-0zyvs.mongodb.net/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}