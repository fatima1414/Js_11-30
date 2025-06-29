const signup = document.querySelector("#signup");

signup.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const city = document.querySelector("#city").value;
  const address = document.querySelector("#address").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = document.querySelectorAll("#hobbies:checked");

  // error tags
  const username_error = document.querySelector("#username_error");
  const email_error = document.querySelector("#email_error");
  const mobile_error = document.querySelector("#mobile_error");
  const city_error = document.querySelector("#city_error");
  const gender_error = document.querySelector("#gender_error");
  const hobbies_error = document.querySelector("#hobbies_error");
  const address_error = document.querySelector("#address_error");

  const StringRegEx = /^[A-Za-z. ]+$/;
  const MobileRegEx = /^[6789][0-9]{9}$/;
  const EmailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let arr = [];
  hobbies.forEach((hobby) => {
    arr.push(hobby.value);
  });

  let valid = true;

  if (!username.trim()) {
    username_error.innerHTML = "Please enter your name";
    valid = false;
  } else if (!StringRegEx.test(username)) {
    username_error.innerHTML = "Please enter only letters";
    valid = false;
  } else {
    username_error.innerHTML = "";
  }

  if (!email.trim()) {
    email_error.innerHTML = "Please enter your email";
    valid = false;
  } else if (!EmailRegEx.test(email)) {
    email_error.innerHTML = "Please enter a valid email";
    valid = false;
  } else {
    email_error.innerHTML = "";
  }

  if (!mobile.trim()) {
    mobile_error.innerHTML = "Please enter your number";
    valid = false;
  } else if (!MobileRegEx.test(mobile)) {
    mobile_error.innerHTML = "Please enter a valid 10-digit number";
    valid = false;
  } else {
    mobile_error.innerHTML = "";
  }

  if (!city.trim()) {
    city_error.innerHTML = "Please enter your city name";
    valid = false;
  } else {
    city_error.innerHTML = "";
  }

  if (!gender) {
    gender_error.innerHTML = "Please select your gender";
    valid = false;
  } else {
    gender_error.innerHTML = "";
  }

  if (arr.length === 0) {
    hobbies_error.innerHTML = "Please select at least one hobby";
    valid = false;
  } else {
    hobbies_error.innerHTML = "";
  }

  if (!address.trim()) {
    address_error.innerHTML = "Please enter your address";
    valid = false;
  } else {
    address_error.innerHTML = "";
  }

  if (valid) {
    let userList = JSON.parse(localStorage.getItem("userList")) || [];

    const id = userList.length + 1;

    const user = {
      id,
      username,
      email,
      mobile,
      city,
      gender: gender.value,
      hobbies: arr,
      address,
    };

    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));

    alert("User added successfully");

    signup.reset();
    show(); // Re-render the table
  }
});

function show() {
  const userData = JSON.parse(localStorage.getItem("userList")) || [];
  let output = "";

  userData.forEach((user, index) => {
    output += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.mobile}</td>
        <td>${user.city}</td>
        <td>${user.gender}</td>
        <td>${user.hobbies.join(", ")}</td>
        <td>${user.address}</td>
        <td>
          <button onclick="trash(${user.id})" class="btn btn-danger">
           <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  });

  document.querySelector("#showUser").innerHTML = output;
}

function trash(id) {
  if (confirm("Do you want to delete this user?")) {
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList = userList.filter((user) => user.id !== id);
    localStorage.setItem("userList", JSON.stringify(userList));
    show(); // Re-render without reload
  }
}

// Initial display
show();
