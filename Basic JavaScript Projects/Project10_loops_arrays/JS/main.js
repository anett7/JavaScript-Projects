//counting loop

function Call_Loop() {

    var Digit="";
    var X= 1;
    while (X <11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;

}


//for loop
var Instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute" ];
var Content="";
var Y;
function for_Loop() {
    for (Y = 0; Y< Instruments.length; Y++) {
        Content += Instruments[Y]+ "<br>";
            }
document.getElementById ("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is" + Cat_Picture[2] + ".";

}