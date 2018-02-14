function validateUsername() {

  var value = document.getElementById("userName").value;
  var message = document.getElementById("userNameMessage");
  message.innerText = ""; 
  
  for(var i = 0; i < value.length; i++){
    
    var character = value.charAt(i);

    if(!((character >= "a" && character <= "z")  // if not in my rulest print error to message.innerText
      || (character >= "A" && character <= "Z")
      || (character >= "0" && character <= "9")
      || (character == "@"))){
      message.innerText = "character: " + character +  " is invalid"; // error message
    }
  }
}