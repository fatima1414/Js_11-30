let signup = document.querySelector("#signup");

let userData = JSON.parse(localStorage.getItem("userList"));

signup.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;

  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const city = document.querySelector("#city").value;
  const address = document.querySelector("#address").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = document.querySelectorAll("#hobbies:checked");

  //all error tages
  const username_error = document.querySelector("#username_error");

  const email_error = document.querySelector("#email_error");
  const mobile_error = document.querySelector("#mobile_error");
  const city_error = document.querySelector("#city_error");
  const gender_error = document.querySelector("#gender_error");
  const hobbies_error = document.querySelector("#hobbies_error");
  const address_error = document.querySelector("#address_error");

  const StringRegEx = /^[A-Za-z. ]*$/;
  const MobileRegEx = /^[6789][0-9]{9}$/;
  const EmailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let arr = [];
  hobbies.forEach((hobby) => {
    arr.push(hobby.value);
  });

  if (!username.trim()) {
    username_error.innerHTML = "please enter Your Name";
  } else if (!StringRegEx.test(username)) {
    username_error.innerHTML = "please enter Your character";
  } else {
    username_error.innerHTML = "";
  }

  if (!email.trim()) {
    email_error.innerHTML = "Please enter your email";
  } else if (!EmailRegEx.test(email)) {
    email_error.innerHTML = "Please enter a valid email";
  } else {
    email_error.innerHTML = "";
  }

  if (!mobile.trim()) {
    mobile_error.innerHTML = "please enter Your Number!";
  } else if (!MobileRegEx.test(mobile)) {
    mobile_error.innerHTML = " enter Your coorect digite Number";
  } else {
    mobile_error.innerHTML = "";
  }

  if (!city.trim()) {
    city_error.innerHTML = "please enter Your city Name!";
  } else {
    city_error.innerHTML = "";
  }

  if (!gender) {
    gender_error.innerHTML = "please enter Your gender!";
  } else {
    gender_error.innerHTML = "";
  }

  if (hobbies.length > 0) {
    hobbies_error.innerHTML = "";
  } else {
    hobbies_error.innerHTML = "please enter Your hobbies!";
  }

  if (!address.trim()) {
    address_error.innerHTML = "please enter Your address!";
  } else {
    address_error.innerHTML = "";
  }

  if (
    StringRegEx.test(username) &&
    email &&
    MobileRegEx.test(mobile) &&
    city &&
    gender &&
    hobbies.length > 0 &&
    address
  ) {
    let userList = userData || [];
    // console.log("userList....");
    // console.log(userList);

    let id = userList.length + 1;

    const user = {
      id,
      username: username,
      email,
      mobile,
      city,
      gender: gender.value,
      hobbies: arr,
      address,
    };

    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList)) || [];

    alert("user added");
    signup.reset();
    show();
  }
});

let searchItem ="";
let sortItem = "";

document.querySelector('#searchInput').addEventListener('input',(e)=>{
  console.log(e.target.value);
  searchItem = e.target.value;
  show() 
})

document.querySelector('#sorting').addEventListener('change',(e)=>{
  sortItem  = e.target.value;
  show() 
})


function show() {
  console.table(userData);
  let output = "";

  ///////////////search filter 
  const filterData = userData
  .filter((user)=>{
    return user.username.toLowerCase().includes(searchItem.toLowerCase())
  })
  .sort((a,b)=>{
    console.log(`a=${a.mobile}, b=${b.mobile}`); 

  if(sortItem =='asc'){
    return a.mobile-b.mobile
  }else if(sortItem == 'desc'){
    return b.mobile-a.mobile
  }else if(sortItem == 'userAsc'){
    return a.username.localeCompare(b.username)
  }else if(sortItem == 'userDesc'){
    return b.username.localeCompare(a.username)
  }
   })
  filterData?.forEach((user, index) => {
    output += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.city}</td>
            <td>${user.gender}</td>
            <td>${user.hobbies}</td>
            <td>${user.address}</td>
            <td>
                <button onclick="trash(${user.id})" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                </button>
                 <button onclick="update(${user.id})" class="btn btn-warning">
                    <i class="fa-solid fa-pen"></i>
                </button>

            </td>
        </tr>
        `;
  });

  document.querySelector("#showUser").innerHTML = output;
}
show();

//------------ or ---------------------esay wayyyyy
function trash(id) {
  if (confirm("do you want to delete this product?")) {
    const filterProduct = userData.filter((user) => {
      return user.id !== id;
    });
    console.log(filterProduct);
    localStorage.setItem("userList", JSON.stringify(filterProduct));
    location.reload();
    show();
  }
}

function update(id) {
  document.querySelector("#submit").style.display = "none";
  document.querySelector("#update").style.display = "block";

  //    const singleUser = userData.filter((user) =>{
  //     return user.id===id
  // })
  // console.log(...singleUser)

  const singleUser = userData.find((user) => {
    return user.id === id;
  });
  console.log(singleUser);

  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let mobile = document.querySelector("#mobile");
  let city = document.querySelector("#city");
  let address = document.querySelector("#address");
  let gender = document.querySelector('input[name="gender"]');
  let hobbies = document.querySelectorAll("#hobbies:checked");

  console.log(gender);
  console.log(singleUser.gender);

  // alert(id)
  username.value = singleUser.username;
  email.value = singleUser.email;
  mobile.value = singleUser.mobile;
  city.value = singleUser.city;
  gender.value = singleUser.gender;
  hobbies.value = singleUser.hobbies;
  address.innerHTML = singleUser.address;

  document.querySelector("#update").addEventListener("click", () => {
    alert("update.........");

    const newUser = {
      id,
      username: username.value,
      email: email.value,
      mobile: mobile.value,
      city: city.value,
      gender: gender.value,
      hobbies: hobbies.value,
      address: address.value,
    };
    console.log(newUser);

    const Index = userData.findIndex((user) => {
      return user.id === id;
    });
    userData[Index] = newUser;
    localStorage.setItem("userList", JSON.stringify(userData));
    location.reload();
    show();
  });
}