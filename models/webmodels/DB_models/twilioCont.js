//const MongoClient = require('mongodb').MongoClient;
const con = require('./connect.js');
const addNew = require('./addExp.js');
const update = require('./updateExp.js');

function twilioCont(phone, command) {
	
	var temp = command.split(' ');
	
	addNew.main(phone, temp[con.three]);
	
	function wait() {
		update.main(phone, temp[con.three], temp[con.zero], temp[con.one]);
	}
	setTimeout(wait, 2000);
	
	
}

ph = '13364024550';
co = 'Add 3.99 to Gift';
//co = 'Withdraw 2.99 from Gift';

twilioCont(ph, co);


