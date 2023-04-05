
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

//array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";

}

function constant_function() {
    const Musical_Instrument = { type: "guitar ", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + "was " + Musical_Instrument.price;
    }
    
       
          //return statement
    function myFunction(name) {
      return "Hello " + name;
    }
    document.getElementById("demo").innerHTML = myFunction("John");

    //object property function

    function object_property_function() {
    let car = {
        make:"Dodge",
        model: "Viper",
        year: "2021 ",
        color: "red ",
        description: function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
         }
     }
        document.getElementById("car_object").innerHTML = car.description();

    }