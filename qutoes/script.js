var text = [
    "“If you tell the truth, you don't have to remember anything.”",
    "Mae West“You only live once, but if you do it right, once is enough.”",
    "“A room without books is like a body without a soul.”",
    "“Be yourself; everyone else is already taken.”",
]
function newquote() {

    var randomindex = Math.floor(Math.random() * text.length);
    var newq = text[randomindex];
    document.getElementById("quote").innerHTML = text[randomindex];

}