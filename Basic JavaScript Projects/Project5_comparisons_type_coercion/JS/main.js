document.write ("What type of variable is 'word'?")
document.write(typeof "word")

// “document.write()” method and “type of” operator to display the data type of a variable of your choosing

document.write ("  A number larger than 1.7976931348623157E308:")
document.write(2E310);

document.write ("  A number smaller than -1.7976931348623157E308:")
document.write(-2E310);
document.write (10>2);
console.log(2+2);
document.write("10"+5);
console.log(10<2);
document.write(15 == [10+5]);
a=6
b=6
document.write(6===6)//Return true by ensuring to match the data type and value.
a="6"
b=6
document.write("six"===6)//o	Return false by writing a different data type and different value.
a="6"
b=6

document.write("6"===6)//Return false by writing a different data type but the same value for both.
document.write(9===6)//Return false by writing the same data type but a different value for both
document.write(5>4 && 10>2) //and operator
document.write(3>4 && 10>2)
document.write(3>4 || 10>2)//or operator
document.write(3>4 || 1>2)
//Not operator returns false:
function not_Function() {
    document.getElementById("Not").innerHTML=! (20>10);
}
//Not operator returns true:
function not_Function() {
    document.getElementById("Not2").innerHTML=! (5>10);
}
