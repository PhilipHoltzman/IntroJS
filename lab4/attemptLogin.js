function attemptLogin(){

  var userName = document.getElementById("userName").value;
  var password = document.getElementById("password").value;

  if(userName == ADMIN_USERNAME && password == SECRET_PASSWORD){
    window.open("success.html","_self")
  }
  else {
    loginCounter++;
    
    if(loginCounter >= 10){
      window.open("failure.html","_self");
    }
  }
  
}