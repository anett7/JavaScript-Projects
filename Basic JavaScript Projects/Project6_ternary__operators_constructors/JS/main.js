function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
    }
// ternary operation using input from the browser
function Vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote = (Age<18) ? "You are too young": "You are old enough";
    document.getElementById("Vote").innerHTML= Can_vote + " to vote.";
}
// ternary operation using input from the browser
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
} 
//constructor function that uses the “new” and “this” keywords
// and display the results of the constructor function within an HTML element


function nested_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point +=1;}
            Plus_one();
            return Starting_point
        }
    }
// a nested function


