function form_check() {
    alert("first")
    let name1 = document.getElementById("name1").value;
    console.log(name1);

    let email = document.getElementById("email").value;
    console.log(email);

    let phoneNO = document.getElementById("number").value;
    console.log(phoneNO);

    const result = `<b>name :</b> ${name1}, <b>Email :</b> ${email}, <b>Phone :</b> ${phoneNO}`;
    document.getElementById("output").innerHTML = result;
}