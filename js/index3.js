




// welcome
var arrEmail = []
arrEmail = JSON.parse(localStorage.getItem("email"));

var arrUserName = []
arrUserName = JSON.parse(localStorage.getItem("userName"));

var welcome = document.getElementById("welcome");

var test=localStorage.getItem("input");

var sayWelcome;
// welcome

var logOut = document.getElementById("logOut");




function sayHello() {
  for(var i=0;i<arrEmail.length;i++){
    if(test===arrEmail[i]){
       var sayWelcome = arrUserName[i];
    }
  }
  welcome.innerHTML ="welcome " + sayWelcome;
  localStorage.removeItem("input")

}

  sayHello();


  logOut.addEventListener("click",function(){
    window.open("index2.html","_self");
  })
  
  