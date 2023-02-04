
const forms = document.querySelector('#loginForm');

//ui class
class ui {
  //show error message
  static showError(message, className){
    const div = document.createElement('div');  
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const formError = document.querySelector('#forms');
    container.insertBefore(div, formError);
    // Vanish in 3 Seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }
  //clearfields
  static clearFields(){
    document.querySelector('#username').value = '';
    document.querySelector('#password').value = '';
  }

  //delay after success
  static delay(){
    setTimeout(() => window.location.href="home.html", 2000);
  }
}

//submit event
forms.addEventListener('submit', onSubmit);
function onSubmit(e){

  //get form values
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

//prevent actual submit
e.preventDefault();

if(username != 'foo' || password != 'bar'){
  //show failed alert
  ui.showError('Please insert correct Username and Password!', 'danger');
  ui.clearFields();
} else{

  // show success alert
  ui.showError('Login Successful!', 'success')
  ui.delay();  
}

}



