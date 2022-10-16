const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;


function validateForm(){
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid){
    message.textContent = 'Please fill out all field correctly';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
    }
    // Check to see if password match
    if(password1Element.value === password2Element.value){
        passwordsMatch = true;
        password1Element.style.borderColor = 'green';
        password2Element.style.borderColor = 'green';
    }else{
        passwordsMatch = false;
        password1Element.style.borderColor = 'red';
        password2Element.style.borderColor = 'red';
        message.textContent = 'make sure password is match'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // if form is valid and password match
    if(isValid && passwordsMatch){
        message.textContent = 'Successfully register'
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}


function storeFormData(){
    const user = {
        name: form.name.value,
        countryCode: `+${form.countryCode.value}`,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    
}





function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit data IF valid
    if(isValid && passwordsMatch){
        storeFormData();
    }
}


// Event listener
form.addEventListener('submit', processFormData);