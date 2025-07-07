 let signup = document.querySelector('#signup')
 let userData = JSON.parse(localStorage.getItem('userList')) 
 signup.addEventListener('submit',(e)=>{
    e.preventDefault()
  
const username = document.querySelector('#username').value
const password = document.querySelector('#password').value
const email = document.querySelector('#email').value
const mobile = document.querySelector('#mobile').value
const city = document.querySelector('#city').value
const address = document.querySelector('#address').value
const gender = document.querySelector('input[name="gender"]:checked')
const hobbies = document.querySelectorAll('#hobbies:checked')

//all error tages
const username_error = document.querySelector('#username_error')
const password_error = document.querySelector('#password_error')
const email_error = document.querySelector('#email_error')
const mobile_error = document.querySelector('#mobile_error')
const city_error = document.querySelector('#city_error')
const gender_error = document.querySelector('#gender_error')
const hobbies_error = document.querySelector('#hobbies_error')
const address_error = document.querySelector('#address_error')

const StringRegEx = /^[A-Za-z. ]*$/
const MobileRegEx = /^[6789][0-9]{9}$/
const EmailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PasswordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;

let arr = []
hobbies.forEach((hobby)=>{
    arr.push(hobby.value)
});


if (!username.trim()){
    username_error.innerHTML ="please enter Your Name"
}else if (!StringRegEx.test(username)){
      username_error.innerHTML = "please enter Your character" 
}
else{
    username_error.innerHTML = ""
}


if (!password.trim()) {
    password_error.innerHTML = "Please enter your password";
} else if (!PasswordRegEx.test(password)) {
    password_error.innerHTML = "Password must be 6-16 characters, include at least 1 letter, 1 number & 1 special character";
} else {
    password_error.innerHTML = "";
}

if (!email.trim()) {
    email_error.innerHTML = "Please enter your email";
} else if (!EmailRegEx.test(email)) {
    email_error.innerHTML = "Please enter a valid email";
} else {
    email_error.innerHTML = "";
}

if(!mobile.trim()){
    mobile_error.innerHTML = "please enter Your Number!"
}else if (!MobileRegEx.test(mobile)){
      mobile_error.innerHTML = " enter Your coorect digite Number" 
}else{
    mobile_error.innerHTML = ""
}

if(!city.trim()){
    city_error.innerHTML = "please enter Your city Name!"
}else{
    city_error.innerHTML = ""
}

if(!gender){
    gender_error.innerHTML = "please enter Your gender!"
}else{
    gender_error.innerHTML = ""
}

if(hobbies.length>0){
    hobbies_error.innerHTML = ""
}else{
     hobbies_error.innerHTML = "please enter Your hobbies!"
}

if(!address.trim()){
    address_error.innerHTML = "please enter Your address!"
}else{
    address_error.innerHTML = ""
}


if(StringRegEx.test(username) && 
    email &&
     MobileRegEx.test(mobile) && 
     password && 
     city && 
     gender && 
     hobbies.length > 0 && 
     address)
     {
    let userList = JSON.parse(localStorage.getItem('userList'))  || []
    console.log("userList....");
    console.log(userList);
    
    const user = {
        username,email,mobile,city,gender:gender.value,hobbies:arr,address
    }

    userList.push(user)
    localStorage.setItem('userList',JSON.stringify(userList))
  }
});