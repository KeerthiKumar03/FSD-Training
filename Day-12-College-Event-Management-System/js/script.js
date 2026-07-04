document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("registrationForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("successMessage")
.classList.remove("d-none");

form.reset();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

});