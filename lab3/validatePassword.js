function validatePassword() {

  var value = document.getElementById("password").value;
  var message = document.getElementById("passwordMessage");
  message.innerText = ""; 
  
  for(var i = 0; i< value.length;i++){
    if(value.length < 4){ // if less than 4 characters
      message.innerText = "password is too short"; // error message
    }
  }
}