// 1    Access the element with ID "title" and update its innerText to "Welcome to JavaScript!".

document.getElementById("title").innerText="Welcome to JavaScript!";

   // Use querySelector to select the first <h2> element and make its text italic using style.fontStyle.

document.querySelector("h2").style.fontStyle = "italic";


//    Change the innerHTML of an element with ID "info" to include a <u>Click here</u> link.

document.getElementById("info").innerHTML = "<u>Click here</u>";

//Add an event listener to a button with ID "hoverBtn" that changes the background of a <div> with ID "box" to "orange" when hovered.

let hoverBtn = document.getElementById("hoverBtn");
let box = document.getElementById("box");
if (hoverBtn && box) {
  hoverBtn.addEventListener("mouseover", function () {
    box.style.backgroundColor = "orange";
  });
}
