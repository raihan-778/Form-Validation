const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const  email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordTwo = document.querySelector('#passwordtwo');

//display err

function displayError(element, errorMsg){
    element.parentElement.className = 'form-control error'
    const small = element.parentElement.querySelector('small').innerText = errorMsg 
}
//display success
function displaySuccess(element){
element.parentElement.className = ('form-control success');
}   
//validate userName
function validateUserName(userName, minlenth, maxLength){

    if(userName.value.length < minlenth){
        displayError(userName,'Username must be at least four caracters long' )
        
    }else if(userName.value.length > maxLength){
        displayError(userName, 'Username can not exceed 15 caracters')
    }
    else{
        displaySuccess(userName)

    }
}

//validate email address

function validateEmail(input){
    if(input.value== ''){
        displayError(input, 'please enter an email address')
    } 
    else if(!input.value.match(/\S+@\S+\.\S/)){
        displayError(input, 'please enter a valide email address')
    }
    else{
        displaySuccess(input)
    }
}

//validate password

function validatePassword(input){
    if(input.value== ''){
        displayError(input, 'please enter password')
    } 
    else if(!input.value.match(/(?=.{8,})./)){
        displayError(input, 'password should have at least eight character')
    }
    else if(!input.value.match(/(?=.*[A-Z])./)){
        displayError(input, 'password should have at least one Upercase')
    }
    else if(!input.value.match(/(?=.*[a-z])./)){
        displayError(input, 'password should have at least one Lowercase')
    }
    else if(!input.value.match(/(?=.*[0-9])./)){
        displayError(input, 'password should have at least one Number')
    }
    else if(!input.value.match(/([^A-Za-z0-9])./)){
        displayError(input, 'password should have at least one Special caracter')
    }
    else{
        displaySuccess(input)
    }
}

// validate confirmation password

function matchPassword(inputTwo, inputOne){
    if(inputTwo.value== ''){
        displayError(inputTwo, 'input can not be empty')
    } 
    else if(inputOne.value!= inputTwo.value){
        displayError(inputTwo, 'password does not match')
    }
    else{
        displaySuccess(inputTwo,inputOne)
    }
}




//Form submit event
form.addEventListener('submit', function(e){
    e.preventDefault();
    validateUserName(userName, 4, 24)
    validateEmail(email)
    validatePassword(password)
    matchPassword(passwordTwo, password)

})