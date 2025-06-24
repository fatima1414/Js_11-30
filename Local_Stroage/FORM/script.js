const signup = document.querySelector("#signup");
signup.addEventListener("submit", (e) => {
  e.preventDefault();

  //////All input  Data
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const password = document.getElementById("password").value;
  const city = document.querySelector("#city").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = document.querySelectorAll("#hobbies:checked");
  const address = document.querySelector("#address").value;

  //////All error  Data
  const name_error = document.querySelector("#name_error");
  const email_error = document.querySelector("#email_error");
  const mobile_error = document.querySelector("#mobile_error");
  const password_error = document.getElementById("password_error");
  const city_error = document.querySelector("#city_error");
  const gender_error = document.querySelector("#gender_error");
  const hobbies_error = document.querySelector("#hobbies_error");
  const address_error = document.querySelector("#address_error");

  let arr = [];
  hobbies?.forEach((hobby) => {
    arr.push(hobby.value);
  });
  // console.log(arr);

  const StringRegEx = /^[A-Za-z. ]*$/;
  // const  StringRegEx  = /^[A-Za-z. ]{2,}$/;
  // const StringRegEx = /^[A-Za-z. ]{2,15}$/;

  // const MobileRegEx = /^[0-9]{10}$/
  const EmailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const MobileRegEx = /^[6789][0-9]{9}$/;
  // const PasswordRegEx = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{6,16}$/;
  const PasswordRegEx = /^[A-Za-z0-9@#]{6,}$/;


  if (!name.trim()) {
    name_error.innerHTML = "please enter your name";
  } else if (!StringRegEx.test(name)) {
    name_error.innerHTML = "please enter only char";
  } else {
    name_error.innerHTML = "";
  }

  if (!email.trim()) {
    email_error.innerHTML = "please enter your name";
  } else if (!EmailRegEx.test(email)) {
    email_error.innerHTML = "please enter a valid email";
  } else {
    email_error.innerHTML = "";
  }

  if (!mobile.trim()) {
    mobile_error.innerHTML = "please enter your name";
  } else if (!MobileRegEx.test(mobile)) {
    mobile_error.innerHTML = "please enter only number";
  } else {
    mobile_error.innerHTML = "";
  }

  if (!password.trim()) {
    password_error.innerHTML = "Please enter your password";
  } else if (!PasswordRegEx.test(password)) {
    password_error.innerHTML = "Please enter correct password";
  } else {
    password_error.innerHTML = "";
  }

  if (!city) {
    city_error.innerHTML = "please enter your name";
  } else {
    city_error.innerHTML = "";
  }

  if (!gender) {
    gender_error.innerHTML = "please enter your name";
  } else {
    gender_error.innerHTML = "";
  }

  if (!address.trim()) {
    address_error.innerHTML = "please enter your name";
  } else {
    address_error.innerHTML = "";
  }

  if (hobbies.length > 0) {
    hobbies_error.innerHTML = "";
  } else {
    hobbies_error.innerHTML = "enter your hobbies";
  }

  if(StringRegEx.test(name) && EmailRegEx.test(email) && MobileRegEx.test(mobile) && PasswordRegEx.test(password) && city && gender && address && hobbies.length > 0 ){
    let userlist = JSON.parse(localStorage.getItem('userlist')) || []
    console.log("userlist...........");
    console.log(userlist);
    const user = {
        username:name,
        email,mobile,city,gender:gender.value,hobbies:arr,address
    }
    userlist.push(user)
    localStorage.setItem('userlist',JSON.stringify(userlist))
  }
});
