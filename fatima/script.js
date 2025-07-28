let signup = document.querySelector("#signup");

let userData = JSON.parse(localStorage.getItem("userList"));

signup.addEventListener("submit", (e) => {
    e.preventDefault();

    const recipename = document.querySelector("#recipename").value;
    const title = document.querySelector("#title").value;
    const ingredients = document.querySelector("#ingredients").value;
    const instructions = document.querySelector("#instructions").value;
    const cuisine = document.querySelector("#cuisine").value;

    const recipename_error = document.querySelector("#recipename_error");
    const title_error = document.querySelector("#title_error");
    const ingredients_error = document.querySelector("#ingredients_error");
    const instructions_error = document.querySelector("#instructions_error");

    const StringRegEx = /^[A-Za-z. ]*$/;

    if (!recipename.trim()) {
        recipename_error.innerHTML = "please enter Your recipe-Name";
    } else if (!StringRegEx.test(recipename)) {
        recipename_error.innerHTML = "please enter Your character";
    } else {
        recipename_error.innerHTML = "";
    }

    if (!title.trim()) {
        title_error.innerHTML = "please enter Your title";
    } else if (!StringRegEx.test(title)) {
        title_error.innerHTML = "please enter Your character";
    } else {
        title_error.innerHTML = "";
    }

    if (!ingredients.trim()) {
        ingredients_error.innerHTML = "please enter ingredients as your choice";
    } else if (!StringRegEx.test(ingredients)) {
        ingredients_error.innerHTML = "please enter Your character";
    } else {
        ingredients_error.innerHTML = "";
    }


    if (!instructions.trim()) {
        instructions_error.innerHTML = "please enter Your instructions";
    } else if (!StringRegEx.test(instructions)) {
        instructions_error.innerHTML = "please enter Your character";
    } else {
        instructions_error.innerHTML = "";
    }



    if (
        StringRegEx.test(recipename) &&
        title &&
        ingredients &&
        instructions

    ) {
        let userList = userData || [];


        let id = userList.length + 1;

        const user = {
            id,
            recipename: recipename,
            title,
            ingredients,
            instructions,
            cuisine,
        };

        userList.push(user);
        localStorage.setItem("userList", JSON.stringify(userList)) || [];
        signup.reset();
        show();
    }
});

let searchItem = "";
let sortItem = "";

document.querySelector('#searchInput').addEventListener('input', (e) => {
    searchItem = e.target.value;
    show()
})

document.querySelector('#sorting').addEventListener('change', (e) => {
    sortItem = e.target.value;
    show()
})


function show() {
       let userList = JSON.parse(localStorage.getItem("userList")) || [];
    console.table(userList);
    let output = "";

    const filterData = userList
        .filter((usersearch) => {
            return usersearch.recipename.toLowerCase()
                .includes(searchItem.toLowerCase());
        })
        .sort((a, b) => {
            if (sortItem == 'userAsc') {
                return a.recipename.localeCompare(b.recipename);
            } else if (sortItem == 'userDesc') {
                return b.recipename.localeCompare(a.recipename);
            } else {
                return 0; // no sorting
            }
        })
    filterData?.forEach((user, index) => {
        output += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.recipename}</td>
            <td>${user.title}</td>
            <td>${user.ingredients}</td>
            <td>${user.instructions}</td>
            <td>${user.cuisine}</td>
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
    document.querySelector("#submit");
    document.querySelector("#update").style.display = "block";

    const singleUser = userData.find((user) => {
        return user.id === id;
    });
    console.log(singleUser);

    let recipename = document.querySelector("#recipename");
    let title = document.querySelector("#title");
    let ingredients = document.querySelector("#ingredients");
    let instructions = document.querySelector("#instructions");
    let cuisine = document.querySelector("#cuisine");

    recipename.value = singleUser.recipename;
    title.value = singleUser.title;
    ingredients.value = singleUser.ingredients;
    instructions.value = singleUser.instructions;
    cuisine.value = singleUser.cuisine;

    document.querySelector("#update").addEventListener("click", () => {
        const newUser = {
            id,
            recipename: recipename.value,
            title: title.value,
            ingredients: ingredients.value,
            instructions: instructions.value,
            cuisine: cuisine.value,
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
