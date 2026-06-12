document.getElementById(registrationform).addEventListener("Register",function(event){
  event.preventDefault();
  if(this.checkValidity()){
    alert("Registration Successful");
    this.reset();
  }
  else{
    this.classList.add("was-validated");
  }
});
