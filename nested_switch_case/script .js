let mainChoice = "fruit";
let subChoice = "apple";

switch (mainChoice) {
  case "fruit":
    console.log("Category: Fruit");

    switch (subChoice) {
      case "apple":
        console.log("You selected Apple.");
        break;
      case "banana":
        console.log("You selected Banana.");
        break;
      default:
        console.log("Unknown fruit.");
    }
    break;

  case "vegetable":
    console.log("Category: Vegetable");

    switch (subChoice) {
      case "carrot":
        console.log("You selected Carrot.");
        break;
      case "broccoli":
        console.log("You selected Broccoli.");
        break;
      default:
        console.log("Unknown vegetable.");
    }
    break;

  default:
    console.log("Unknown category.");
}
