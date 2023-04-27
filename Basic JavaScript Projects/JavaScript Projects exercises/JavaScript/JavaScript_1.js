function Color_Function() {
    var Color_Output;
    var Colors= document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
                Color_Output = "Green" + Color_String;
        break;
        case "Blue":
                Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
                Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";

    }
    document.getElementById ("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName ("Click");
    A[0].innerHTML = "The text has changed!";
}

//Canvas

var c = document.getElementById("Canv");
var ctx = c.getContext("2d");

// Create gradient
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "red");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);

//draw circle
ctx.beginPath();
ctx.arc(250, 70, 40, 0, 2 * Math.PI);
ctx.stroke();

//validating form
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }