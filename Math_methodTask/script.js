let num = [];
function addnumber() {
  let value = parseInt(document.getElementById("value1").value);


  value = Number(value)
  num.push(value);
  document.getElementById("out").innerHTML = num.join(",");

  let addition = num.reduce((acc, curr) => {
    return acc + curr
  })
  console.log(addition);
  document.getElementById("output").innerHTML = addition;

  let avg = addition / num.length;
  document.getElementsByTagName("span")[2].innerHTML = avg.toFixed(2);

  const min = Math.min(...num);
  const max = Math.max(...num);
  document.getElementsByTagName("span")[3].innerHTML = min;
  document.getElementsByTagName("span")[4].innerHTML = max;
  document.getElementById("myform").reset();
}