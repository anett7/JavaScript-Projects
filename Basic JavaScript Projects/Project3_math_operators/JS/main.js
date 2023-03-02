function addition_Function() {
    var addition = 2 + 2;
document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}//addition

function subtraction_Function() {
    var subtraction = 5 - 2;
document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}//subtraction

function multi_Function() {
    var simple_Math = 6*8;
document.getElementById("MathS").innerHTML = "6 * 8 = " + simple_Math;
}//multiplication

function division_Function() {
    var simple_Math = 48/6;
document.getElementById("MathD").innerHTML = "48/6 = " + simple_Math;
}//division

function more_Function() {
    var simple_Math = (1+2)*10/2-5;
document.getElementById("more_Math").innerHTML = "(1+2)*10/2-5 = " + simple_Math;
}//multiple operations

//1 plus 2, multiplied by 10, divided in half and then substracted by 5 equals" + simple_Math;

function modulus_operator() {
    var simple_Math = 25 % 6;
document.getElementById("mod_Math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math;
}//remainder by division

function negation_operator() {
    var x = 10;
document.getElementById("unary_Math").innerHTML = -x 
}//opposite of the number

function increment_operator() {
var x= 5;
x++
document.getElementById ("incr_Math").innerHTML= (x)
}//increased by 1

function decrement_operator() {
var x= 5.25;
x--
document.getElementById ("decr_Math").innerHTML= (x)
}//decreased by 1


function round_math() {
document.getElementById("RMath").innerHTML = Math.round(4.6);
}//round to nearest

function random_math() {
    document.getElementById("RandomMath").innerHTML= (Math.random() *100);
    }//random number up to 100