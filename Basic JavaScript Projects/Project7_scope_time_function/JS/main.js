/*var X = 10;
function Add_numbers_1() {
    document.write (20+X+ "<br>");
   
}
function Add_numbers_2(){
    document.write (X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();
//example of Global variable



function Add_numbers_1() {
    var Y = 10;
    document.write (20 + Y + "<br>");
    }
function Add_numbers_2() {
    document.write (Y + 100);
}
Add_numbers_1();
Add_numbers_2();
//example of a local variable

function Add_numbers_1() {
    var Z = 10;
    console.log (15 + Z + "<br>");
    }
function Add_numbers_2() {
    console.log (Z + 100);
}
Add_numbers_1();
Add_numbers_2();
//example of console.log() method to debug code, Z is not defined 
*/
function get_Date() {
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
    
} //function that includes an if statement


function Age_Function() {
    Age= document.getElementById("Age").value;
    if (Age>= 18) {
        Mature = "You are old enough to watch this short film!";
    }
    else {
        Mature = "I am sorry. You are not old enough to watch this short film!"
    }
    document.getElementById ("How_old_are_you?").innerHTML = Mature;
} //function with if- else statement

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 ==Time >0) {
        Reply = "It is the afternoon.";
            }
    else if (Time > 12 == Time<18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
} //else if statement
