
const forms = document.querySelector('#loginForm');


forms.addEventListener('submit', onSubmit);
function onSubmit(e){

  //get form values
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

//prevent actual submit
e.preventDefault();

}