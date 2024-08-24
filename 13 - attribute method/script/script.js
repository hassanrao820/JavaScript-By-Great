let inputBox = document.getElementById("myInput");
console.log(inputBox.getAttribute("type")); //To get the attribute value
console.log(inputBox.getAttribute("placeholder"));

let inputBox2 = document.getElementById("myInput");
inputBox2.setAttribute("class", "user"); //To set the attribute value
console.log(inputBox2);

let inputBox3 = document.getElementById("myInput");
console.log(inputBox3.hasAttribute("type")); //To check the attribute is available or not.
console.log(inputBox3.hasAttribute("required")); //It return False, because the required attribute is not present in the input box

let inputBox4 = document.getElementById("myInput");
inputBox4.removeAttribute("class"); //To remove the attribute
console.log(inputBox4);

let inputBox5 = document.getElementById("myInput");
inputBox5.style.padding = "10px"; //To set the style of the element
inputBox5.style.borderRadius = "2em";
inputBox5.style.border = "2px solid red";
inputBox5.style.backgroundColor = "black";
inputBox5.style.color = "white";
inputBox5.style.outline = "white";
inputBox5.style.cssText += "margin: 2em; font-size: 1em";
console.log(inputBox5);

let inputBox6 = document.getElementById("myInput");
inputBox6.className += " user"; //To add the class
console.log(inputBox6);

let inputBox7 = document.getElementById("myInput");
inputBox7.classList.add("new" , "data"); //To add the multiple class
console.log(inputBox7);

let inputBox8 = document.getElementById("myInput");
inputBox8.classList.remove("new" , "user"); //To remove the multiple class
console.log(inputBox8);

let inputBox9 = document.getElementById("myInput");
inputBox9.classList.replace("data" , "user"); //To replace the multiple class
console.log(inputBox9);

let inputBox10 = document.getElementById("myInput");
inputBox10.classList.contains("user"); //To check the class is present or not.
console.log(inputBox10);

let inputBox11 = document.getElementById("myInput");
inputBox11.classList.toggle("user"); //To toggle the class, it means if we use toggle it will delete the the class with the same name present there before, otherwise it will add the class.
console.log(inputBox11);
