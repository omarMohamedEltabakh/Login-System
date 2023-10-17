var userNameInput = document.getElementById("userName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signUp = document.getElementById("signUp");
var wrongAccount = document.getElementById("wrongAccount");
var success = document.getElementById("success");
var userName = [];
var password = [];
var email =[];




localStorage.clear()

signUp.addEventListener("click", function () {
  if (validatePassword() == true && validateUseName() == true && validateEmail()==true){
     if (localStorage.getItem("email")==null){
      addClient()
      success.classList.replace("d-none","d-block");
    }
     else if(localStorage.getItem('email').includes(emailInput.value)){
      wrongAccount.classList.replace("d-none","d-block");
      success.classList.replace("d-block","d-none");
      
        
    }
    else{
      addClient();
      success.classList.replace("d-none","d-block");
      wrongAccount.classList.replace("d-block","d-none");
      
    }
    
  }
});








function addClient() {
  userName.push(userNameInput.value);
  password.push(passwordInput.value);
  email.push(emailInput.value);
  localStorage.setItem("userName", JSON.stringify(userName));
  localStorage.setItem("email", JSON.stringify(email));
  localStorage.setItem("password", JSON.stringify(password));
}














// start regex
function validateUseName() {
  var regex = /^[A-Z][a-z]{1,10}$/;
  return regex.test(userNameInput.value);
}

function validatePassword() {
  var regex = /^[a-z 0-9 -_.,&]{5,20}[1-9]{2,10}$/;
  return regex.test(passwordInput.value);
}
function validateEmail() {
  var regex = /^[a-z 1-9]{4,10}(@)(gmail.com)$/;
  return regex.test(emailInput.value);
}
// end regex









