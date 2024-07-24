const para = document.querySelector("#text");
const button = document.querySelector("#change-text");

button.addEventListener("click", () => {
  para.textContent = "Change";
});

const image = document.querySelector("#image");
const button1 = document.querySelector("#toggleVisibility");

button1.addEventListener("dblclick", () => {
  image.style.display = image.style.display === "none" ? "block" : "none";
});
button1.addEventListener("dblclick", () => {
  button1.textContent =
    button1.textContent === "Double click to disappear image"
      ? "Double click to reappear image"
      : "Double click to disappear image";
});

const keydownEvent = document.querySelector("#keydown");

keydownEvent.addEventListener("keydown", (e) => {
  console.log("Key pressed: ", e.key);
  if (e.key === " ") {
    console.log("Space bar is pressed");
  }
});

const inputField = document.querySelector("#myInput");
const displayParagraph = document.querySelector("#displayText");

inputField.addEventListener("keyup", () => {
  displayParagraph.textContent = `Current Value: ${inputField.value}`;
});

const form = document.querySelector("#preventDefault");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});

const dropdown = document.getElementById("myDropdown");
const paragraph = document.getElementById("selectedValue");

dropdown.addEventListener("change", () => {
  paragraph.textContent = `Selected value: ${dropdown.value}`;
});


const myList = document.querySelector('#myList');

myList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Clicked on list item:', e.target.textContent);
    }
})

myList.addEventListener('click', function(event) {
    if (event.target && event.target.matches('li.item')) {
        alert(`Clicked on ${event.target.textContent}`);
    }
});


const newItem = document.createElement('li');
newItem.className = 'item';
newItem.textContent = 'Item 5';
myList.appendChild(newItem);