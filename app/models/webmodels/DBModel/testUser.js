async function main(){
	
	var hash = 'sdfjkhsd7deef88434';
	
	//create
	var test = require('./createUser.js');
	test.main('aaander4', 'sdfjkhsd7deef88434', 'aaander4@uncg.edu').catch(console.err);
	
	//authenticate
	//var test = require('./authenticate.js');
	//test.main('sdfjkhsd7deef88434').catch(console.err);
	
	//delete
	//var test = require('./deleteUser.js');
	//test.main('jrk2st58fgr64e56').catch(console.err);
	
	//update password
	//var test = require('./updatePassword.js');
	//test.main('sdfjkhsd7deef88434', 'jrk2st58fgr64e56').catch(console.err);
	//hash = 'jrk2st58fgr64e56';
	
	//update phone
	//var test = require('./updatePhone.js');
	//test.main('jrk2st58fgr64e56', '13364024550').catch(console.err);
	
	//update lastMsg
	//var test = require('./updateLast.js');
	//test.main('jrk2st58fgr64e56', 'This is the last message').catch(console.err);

}

main();