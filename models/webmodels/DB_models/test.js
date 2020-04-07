function main(){
	
	var hash = 'sdfjkhsd7deef88434';
	
	/**FOR USER DATA**/
	//HEADER: create user
	//var test = require('./createUser.js');
	//test.main('aaander4', hash, 'aaander4@uncg.edu');
	
	//HEADER: authenticate
	//var test = require('./authenticate.js');
	//test.main('sdfjkhsd7deef88434');
	
	//HEADER: delete user
	//var test = require('./deleteUser.js');
	//test.main('fy6f654ee4tsdyjg7');
	
	//HEADER: update user
	//var test = require('./updateUser.js');
	//test.main(hash, 'phone', '13364024550');
	
	/**THE FOLLOWING THREE UPDATE EXAMPLES AND THEIR ASSOCIATED FILES HAVE BEEN REPLACED BY A SINGLE FILE updateUser.js**/
		//HEADER: update password
		//var test = require('./updatePassword.js');
		//test.main('sdfjkhsd7deef88434', 'jrk2st58fgr64e56');
		//hash = 'jrk2st58fgr64e56';
	
		//HEADER: update phone
		//var test = require('./updatePhone.js');
		//test.main(hash, '13364024550');
	
		//HEADER: update lastMsg
		//var test = require('./updateLast.js');
		//test.main(hash, 'This is the last message');

	//HEADER: get user data
	//var test = require('./getUser.js');
	//const con = require('./connect.js');
	//test.main(hash);
	//function getID() {
	//	//as single object
	//	console.log(con.temp);
	//	//as individual fields
	//	console.log(con.temp._id);
	//	console.log(con.temp.username);
	//	console.log(con.temp.id);
	//	console.log(con.temp.email);
	//	console.log(con.temp.phone);
	//	console.log(con.temp.lastMsg);
	//	console.log(con.temp.businesses);
	//}
	//setTimeout(getID, 2000);
	
	
	/**FOR BUSINESS DATA**/
	//HEADER: create business
	var test = require('./createBusiness');
	var con = require('./connect.js');
	var input = ['Gift Shop', 'Gift']
	test.main(hash, input);
	
	//HEADER: delete business
	//var test = require('./deleteBusiness.js');
	//test.main(hash, 'Juice Shop');
	
	//HEADER: get array of Business names
	//var test = require('./getBusinesses.js');
	//var con = require('./connect.js');
	//test.main(hash);
	//function getBusinesses() {
	//	console.log(con.tempArray);
	//}
	//setTimeout(getBusinesses, 2000);
	
	//HEADER: get unique Business data and associated fields
	//var test = require('./getBusiness.js');
	//var con = require('./connect.js');
	//test.main(hash, 'Bakery');
	//function getBusiness() {
	//	//As a single object
	//	console.log(con.temp);
	//	//As individual fields
	//	console.log(con.temp.businessName);
	//	console.log(con.temp.employee);
	//	console.log(con.temp.manager);
	//	console.log(con.temp.inventory);
	//	console.log(con.temp.expenses);
	//}
	//setTimeout(getBusiness, 2000);
	
	//HEADER: update business name
	//var test = require('./updateBusinessName.js');
	//test.main(hash, 'Donut Store', 'Donut Heaven');
	
	
	/**FOR EMPLOYEE DATA**/
	//HEADER: add employee
	//var test = require('./addEmp');
	//var input = ['223456789', 'Kevin', 'Coogan', 'Phone: 13363125657', '1521 Place St. Greensboro NC, 27282', '$9.50', '0'];
	//test.main(hash, 'Bakery', input);
	
	//HEADER: delete employee
	//var test = require('./deleteEmp.js');
	//var input = ['Bakery', '223456789'];
	//test.main(hash, input);
	
	//HEADER: update employee 
	//var test = require('./updateEmp.js');
	//var input = ['ssn', '223456789', '323456789'];
	////var input = ['contact', '323456789', 'Phone: 13362020202'];
	//test.main(hash, input);
	
	/**THE FOLLOWING UPDATE EXAMPLES AND ITS ASSOCIATED FILE HAVE BEEN REPLACED BY A SINGLE FILE updateEmp.js**/
		//HEADER: update employee ssn
		//var test = require('./updateEmpSocial.js');
		//var input = ['323456789', '223456789'];
		//test.main(hash, input);
	
		
	/**FOR MANAGER DATA**/
	//HEADER: add manager
	//var test = require('./addMan.js');
	//var input = ['323456789', 'Kevin', 'Coogan', '0'];
	//test.main(hash, 'Bakery', input);
	
	//HEADER: delete manager
	//var test = require('./deleteMan.js');
	//var input = ['Bakery', '323456789'];
	//test.main(hash, input);
	
	//HEADER: update manager 
	//var test = require('./updateMan.js');
	//var input = ['ssn', '323456789', '223456789'];
	////var input = ['contact', '323456789', 'Phone: 13362020202'];
	//test.main(hash, input);
	
	/**FOR INVENTORY DATA**/
	//HEADER: add to inventory
	//var test = require('./addInv.js');
	//var input = ['01', 'Strawberry Cheesecake', '$25.00', '10'];
	//test.main(hash, 'Bakery', input);
	
	//HEADER: delete from inventory
	//var test = require('./deleteInv.js');
	//var input = ['Bakery', '01'];
	//test.main(hash, input);
	
	//HEADER: update item in inventory 
	//var test = require('./updateInv.js');
	//var input = ['stock', '01', '8'];
	////var input = ['contact', '323456789', 'Phone: 13362020202'];
	//test.main(hash, input);
	
	
	/**FOR EXPENSE DATA**/
	//HEADER: add to inventory
	//var test = require('./addInv.js');
	//var input = ['01', 'Strawberry Cheesecake', '$25.00', '10'];
	//test.main(hash, 'Bakery', input);
	
	//HEADER: delete from inventory
	//var test = require('./deleteInv.js');
	//var input = ['Bakery', '01'];
	//test.main(hash, input);
	
	//HEADER: update item in inventory 
	//var test = require('./updateInv.js');
	//var input = ['stock', '01', '8'];
	////var input = ['contact', '323456789', 'Phone: 13362020202'];
	//test.main(hash, input);
	
}

main();