const signup = document.querySelector("#signup")
signup.addEventListener('submit', (e) => {
    e.preventDefault()
    


//////All input  Data 
const name = document.querySelector("#name").value
const email = document.querySelector("#email").value
const mobile = document.querySelector("#mobile").value
const city = document.querySelector("#city").value
const gender = document.querySelector('input[name="gender"]:checked')
const hobbies = document.querySelectorAll('#hobbies:checked')
const address = document.querySelector("#address").value

//////All error  Data 
const name_error = document.querySelector("#name_error")
const email_error = document.querySelector("#email_error")
const mobile_error = document.querySelector("#mobile_error")
const city_error = document.querySelector("#city_error")
const gender_error = document.querySelector('#gender_error')
const hobbies_error = document.querySelector('#hobbies_error')
const address_error = document.querySelector("#address_error")


let arr =[];
hobbies?.forEach((hobby) => {
    arr.push (hobby.value)
});
// console.log(arr);


if (!name.trim()) {
    name_error.innerHTML = "please enter your name"
} else {
    name_error.innerHTML = ""
}

if (!email.trim()) {
    email_error.innerHTML = "please enter your name"
} else {
   email_error.innerHTML = ""
}

if (!mobile.trim()) {
    mobile_error.innerHTML = "please enter your name"
} else {
   mobile_error.innerHTML = ""
}

if (!city) {
    city_error.innerHTML = "please enter your name"
} else {
   city_error.innerHTML = ""
}

if (!gender) {
    gender_error.innerHTML = "please enter your name"
} else {
    gender_error.innerHTML = ""
}

if (!address.trim()) {
    address_error.innerHTML = "please enter your name"
} else {
    address_error.innerHTML = ""
}

if (hobbies.length>0){
    hobbies_error.innerHTML=""
}else{
   hobbies_error.innerHTML="enter your hobbies" 
}
})