function my_dictionary() {//a dictionary with a function that outputs a key-value pair into an HTML element

    var Animal= {      
        species:"Dog",
        color:"black",
        breed:"labrador",
        age:3,
        sound:"bark!"
    };
    delete Animal.sound;// statement that removes the key before its value is displayed
    document.getElementById("Dictionary").innerHTML="animal sound is:"+Animal.sound;
}