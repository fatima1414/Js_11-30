// ||(or) => undefined, null, blank string 

var b;
console.log(b || "first"); //first

var c = ""; // blank string
console.log(c || "second"); //second

var d = 56;
console.log(d || "100"); //56

var e = null;
console.log(e || "200");//200

var f = " ";
console.log(f || "first"); //space


// ?? (Nulllish) undefine , null 

var b;
console.log(b ?? "first"); //first

var c = ""; // blank string
console.log(c ?? "second"); // not identifying blank string //

var d = 56;
console.log(d ?? "100"); //56

var e = null;
console.log(e ?? "200");//200

var f = "  ";
console.log(f ?? "first"); //space

// UNDEFINE
console.log(a);
var a = 10;

// NOTDEFINE
console.log(a);

