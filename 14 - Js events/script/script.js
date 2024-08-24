function buttonClicked() {
    console.log("Button clicked!");
    alert("Button clicked!");
};

// Another Method to click the button.
let button = document.getElementById("btn1");
button.style.marginTop = "1em";
button.onclick = function () {
    console.log("Button 1 clicked!");
    alert("Button click!");
};

// Event Listener Method
let button2 = document.getElementById("btn2");
button2.style.marginTop = "1em";
button2.addEventListener("click", function () {
    console.log("Button 2 is clicked!");
    alert("Button 2 click!");
});

// Another Method of calling event listener
let button3 = document.getElementById("btn3");
button3.style.marginTop = "1em";
function displayMsg(){
    alert("Button 3 click!");
    console.log("Button 3 is clicked!");
};
button3.addEventListener("click", displayMsg);