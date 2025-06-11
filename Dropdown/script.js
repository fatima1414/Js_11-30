function calc() {
    let value1 = document.getElementById("value1").value
    let value2 = document.getElementById("value2").value
    let selc = document.getElementById("selc").value
    let output;
    let op;

    switch (selc) {
        case "1":
            output = Number(value1) + Number(value2);
            op = "Addition";
            break;

        case "2":
            output = (value1) - (value2);
            op = "Subtraction";
            break;

        case "3":
            output = (value1) * (value2);
            op = "Multiplication";
            break;

        case "4":
            output = ((value1) / (value2)).toFixed(2);
            op = "Division";
            break;

        case "5":
            output = (value1) % (value2);
            op = "Reminder";
            break;

        default:
            alert("wrong choice")
            break;
    }
    const result = `${op} ${value1} & ${value2} = ${output}`
    document.getElementById("output").innerHTML = result

}