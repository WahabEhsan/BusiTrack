/*controller calls for navigation and filling of data

will have all back end access here so any html calls for javascript
should be directed here.

for now just use screenswitch with the file name
onclick="screenSwitch('settings.html');" so it can navigate, will have
screenswitch later be a call that takes the file name converts it to its corrosponding
aws link and then moves through that

also add this which is the current location of the controller to each html code
<script src="../../controllers/webcontrollers/ScreenControl.js">
</script>


this may change need to ensure that ScreenControl.js remains reachable while on 
server but it should not be a hassle to update this line later.
*/

//window movement (temp)
//this is just for testing navigation final call should be one of the ones below this
//this will eventually be called for aws link conversion
function screenSwitch(htmlWindow){
	window.location = htmlWindow;
}

//login info calls
function login(){
}
function register(){
}
function passRecover(){
}

//account calls
function updateAccount(){
}

function updateSetting(){
	
}


//business card calls
function addBusiness(){
	
}
function deleteBusiness(){
	
}
function editBusiness(){
	
}

//business object calls
function addObject(){
	
}
function deleteObject(){
	
}
function updateObject() {
	
}
//any others can be added later but this should be a good start.


