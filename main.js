// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBZKL5VQUEjbTf1paWA-keOQmhBh6f6HY",
    authDomain: "zaynebpro-f44b3.firebaseapp.com",
    databaseURL: "https://zaynebpro-f44b3.firebaseio.com",
    projectId: "zaynebpro-f44b3",
    storageBucket: "zaynebpro-f44b3.appspot.com",
    messagingSenderId: "60680519176"
  };
  firebase.initializeApp(config);

function getInputVal(id) {
	return document.getElementById(id).value
}
document.getElementById("contactForm").addEventListener("submit",submitForm)
function submitForm(e){
	e.preventDefault()
	alert("hey")
	var name=getInputVal("name")
	var prénom=getInputVal("prénom")
	var tel=getInputVal("tel")
	var country=getInputVal("country")
	var color=getInputVal("color")
	var date=getInputVal("date")

saveMessage(name,prénom,tel,country,color,date)
}
var message = firebase.database().ref("3idmiled")
function saveMessage(name,prénom,tel,country,color,date){
    var newMessage = message.push()
    newMessage.set({
    	name:name,
    	prénom:prénom,
    	tel:tel,
    	country:country,
    	color:color,
    	date:date,



    })


}