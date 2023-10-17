var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var input;

var login = document.getElementById("login");

var incorrect = document.getElementById("incorrect");






loginButton.addEventListener("click", function () {
  input = emailInput.value;
  localStorage.setItem("input", input);

  if(emailInput.value=="" || passwordInput.value==""){
    incorrect.classList.replace("d-none","d-block");
  }
  if(localStorage.getItem('email').includes(emailInput.value)){
    if(JSON.parse(localStorage.getItem("password")).includes(passwordInput.value)){
      window.open("index3.html", "_self");
    }
  }
  if(localStorage.getItem('email').includes(emailInput.value)==false){
    incorrect.classList.replace("d-none","d-block");

  }
});
