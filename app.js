// Form Blur Event Listeners
document.querySelector('#first').addEventListener('blur', validateFirst);
document.querySelector('#last').addEventListener('blur', validateLast);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);
document.querySelector('#password').addEventListener('blur', validatePassword);
document.querySelector('#confirm').addEventListener('blur', validateConfirm);
// document.querySelector('#submit').addEventListener('click', validateSubmit);

 

function validateFirst() {
 // Get the value of the  Name field
 const name = document.querySelector('#first');
 const re = /^[a-zA-Z]{2,15}$/;
//  const re = /^[a-zA-Z ]{2,15}$/; // This accept both first and last name in same input field

 if (!re.test(name.value)) {
    name.classList.add('is-invalid'); 
 }else {
    name.classList.remove('is-invalid');
 }
}


function validateLast() {
     // Get the value of the  Name field
    const name = document.querySelector('#last');
    // Regular Expression
    const re = /^[a-zA-Z]{2,15}$/;
   
    if (!re.test(name.value)) {
       name.classList.add('is-invalid'); 
    }else {
       name.classList.remove('is-invalid');
    }
   }
   
function validateEmail() {
     // Get the value of the  Email field
    const email = document.querySelector('#email');
    // Regular Expression
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   
    if (!re.test(email.value)) {
       email.classList.add('is-invalid'); 
    }else {
       email.classList.remove('is-invalid');
    }  
}

function validatePhone() {
     // Get the value of the  phone field
    const phone = document.querySelector('#phone');
    // Regular Expression
    const re = /^\(?\d{3}\)?[-. ]?\d{4}[-. ]?\d{4}$/;
   
    if (!re.test(phone.value)) {
       phone.classList.add('is-invalid'); 
    }else {
       phone.classList.remove('is-invalid');
    }  
}

function validatePassword() {
    // Get the value of the  password field
    const password = document.querySelector('#password');
    // Regular Expression
    const re = /^([a-zA-Z0-9]){8}$/;
   
    if (!re.test(password.value)) {
       password.classList.add('is-invalid'); 
    }else {
      password.classList.remove('is-invalid');
    }
}

function validateConfirm() {
    // Get the value of the Confirm password field
    const password = document.querySelector('#confirm');
    // Regular Expression
    const re = /^([a-zA-Z0-9]){8}$/;
   
    if (!re.test(password.value)) {
       password.classList.add('is-invalid'); 
    }else {
      password.classList.remove('is-invalid');
    } 
}


class Form {
    constructor (firstName, lastName, email, phoneNumber, password, confirmPassword) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.confirmPassword = confirmPassword;
}
}

class UI {

    showAlert(message, className) {
        // create div  
        const messageDiv = document.createElement('div');
        // Add classes
        messageDiv.className = `alert ${className}`;
        // messageDiv.className = 'alert alert-danger';

        // Add test
        messageDiv.appendChild(document.createTextNode(message));

        // Get elements
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');
        // Insert Alert
        card.insertBefore(messageDiv, heading);
       
        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
        }

       clearFields () {
        document.querySelector('#first').value = '';
        document.querySelector('#last').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#password').value = '';
        document.querySelector('#confirm').value = '';
      } 
    
}

// Event Listeners for Details Submitted
document.getElementById('sign-up').addEventListener('submit', function(e) {
    // Get form values
   const firstName = document.querySelector('#first').value,
         lastName = document.querySelector('#last').value,
         email = document.querySelector('#email').value,
         phoneNumber = document.querySelector('#phone').value,
         password = document.querySelector('#password').value,
         confirmPassword = document.querySelector('#confirm').value;
          

    // Instantiate UI
    const ui = new UI();
    // console.log(ui);

    // Validate
    if (firstName === '' || lastName === '' ||  email === ''  ||  phoneNumber === ''  ||  password === ''  ||  confirmPassword === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error')
    } 
    else  if (password !== password  ||  confirmPassword !== password) {
        // Error alert
        ui.showAlert('Check Password', 'error')
    }
     else if (firstName.value === first.value  || lastName.value === last.value ||  email.value === email.value  ||  phoneNumber.value === phone.value  ||  password.value === password.value  ||  confirmPassword.value === password.value) {
    // Show success
    ui.showAlert('Submitted', 'success');

    ui.showAlert('Check Email for Verification!', 'light');
    
     // Clear fields
    ui.clearFields();

    }

    e.preventDefault();
  });




// function validateSubmit(e) {

//     if (name.value == ''|| email.value == '' || phone.value == '' || password.value == '') {
//        // Error message
//         showError('Please input your details'); 
//      }
//       else if (name.value == name.value && email.value == email.value && phone.value == phone.value && password.value == password.value ) {
//        // Success message
//         setMessage ('Details Submitted');
//     } 
    
//   e.preventDefault();
// }


// function setMessage(msg){
           
//     // Craete a div
//     const msgDiv = document.createElement('div');
   
//     // Get elements
//     const card = document.querySelector('.card');
//     const heading = document.querySelector('.heading');
   
//     // Add class
//     msgDiv.className = 'alert alert-success';
   
//     // Create text node and append to div
//     msgDiv.appendChild(document.createTextNode(msg));
   
//     // Insert error above heading
//     card.insertBefore(msgDiv, heading);
   
//     // Clear error after 3 seconds
//     setTimeout(clearError, 3000);
//    }
   

// function showError(error){
           
//     // Craete a div
//     const errorDiv = document.createElement('div');
   
//     // Get elements
//     const card = document.querySelector('.card');
//     const heading = document.querySelector('.heading');
   
//     // Add class
//     errorDiv.className = 'alert alert-danger';
   
//     // Create text node and append to div
//     errorDiv.appendChild(document.createTextNode(error));
   
//     // Insert error above heading
//     card.insertBefore(errorDiv, heading);
   
//     // Clear error after 3 seconds
//     setTimeout(clearError, 3000);
//    }
   
//    // Clear error
//    function clearError(){
//    document.querySelector('.alert').remove();
//  }
