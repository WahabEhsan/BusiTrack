var bcrypt = require('bcrypt');
var saltRounds = 10;


function hashGenerator(user, pass){
	var bcrypt = require('bcrypt');
var saltRounds = 10;
	slam = user+pass;
	bcrypt.hash(slam, saltRounds, (err, hash) => {
	if (err) {
    console.error(err)
    return
  }
  console.log(hash)
})
}
