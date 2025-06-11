function show() {
    const obj = {
        name: "test",
        imgages: [
            "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?     auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",

        ]


    }

    console.log(obj.imgages);
    const image = obj.imgages
    var output = "";
    image.forEach((image) => {
        output += `<img src = ${image} alt="images" width="200" height="200"/>`

    });
    console.log(output);
    document.getElementById("showImg").innerHTML = output

}