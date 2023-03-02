function My_First_Function() {// an HTML element to call and display your function
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML=result;
}

function myFunction() {// a function that uses the += operator
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}

function colorFunction() {
document.getElementById("demo").style.color = "red";
}

    
