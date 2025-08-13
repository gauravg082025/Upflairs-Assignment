// 1    Access the element with ID "title" and update its innerText to "Welcome to JavaScript!".

document.getElementById("title").innerText="Welcome to JavaScript!";

   // Use querySelector to select the first <h2> element and make its text italic using style.fontStyle.

document.querySelector("h2").style.fontStyle = "italic";


//    Change the innerHTML of an element with ID "info" to include a <u>Click here</u> link.

document.getElementById("info").innerHTML = "<u>Click here</u>";




const cards = document.querySelectorAll('.card');
if (cards.length >= 3) {
  cards[2].style.backgroundColor = 'lightgray';
}



// 1. Set font size of element with ID "heading" to 40px
function setHeadingFontSize() {
  const heading = document.getElementById('heading');
  if (heading) {
    heading.style.fontSize = '40px';
  }
}

// 2. Add hover event to button that changes background of <div id="box"> to orange
const hoverBtn = document.getElementById('hoverBtn');
const box = document.getElementById('box');
if (hoverBtn && box) {
  hoverBtn.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'orange';
  });
}

// 3. On clicking #hideBtn, hide paragraph with ID "description"
const hideBtn = document.getElementById('hideBtn');
const description = document.getElementById('description');
if (hideBtn && description) {
  hideBtn.addEventListener('click', () => {
    description.style.display = 'none';
  });
}

// 4. On clicking #showBtn, show the hidden paragraph
const showBtn = document.getElementById('showBtn');
if (showBtn && description) {
  showBtn.addEventListener('click', () => {
    description.style.display = 'block';
  });
}

// 5. Select all <li> and change last item's text to "Done"
const listItems = document.getElementsByTagName('li');
if (listItems.length > 0) {
  listItems[listItems.length - 1].textContent = 'Done';
}

// 6. Select all elements with class "highlight" and set text color to purple
const highlights = document.querySelectorAll('.highlight');
highlights.forEach(el => {
  el.style.color = 'purple';
});
