//concat() method:

function full_Sentence() {
    var part_1="I have ";
    var part_2 ="made this ";
    var part_3 ="into a complete ";
    var part_4 ="sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

//slice method:

function slice_Method() {
    var Sentence ="All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() Method

function UpperCase_Method() {

    let text = "Hello World!";
    let result =text.toUpperCase();
    document.getElementById("toUpperCase").innerHTML = result;
    }

    //search method
function SearchMethod(){
let text = "Mr. Blue has a blue house"
let position = text.search("blue");

document.getElementById("Search").innerHTML = position;
}
//Presision method:
function PrecisionMethod(){
    var x = 12938.78342111344
     
    document.getElementById("Precision").innerHTML = x.toPrecision(7);
    }

    //toFixed method:
function toFixedMethod(){
let num = 5.56789;
let n = num.toFixed(2);

document.getElementById("Fixed").innerHTML = n;
}

//value of :
function valueOfMethod(){
let text = "Hello World!";
let result = text.valueOf();

document.getElementById("Value").innerHTML = result;
}