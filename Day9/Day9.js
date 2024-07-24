const element = document.querySelector("#element");
const colChanger = document.querySelector(".bg-color");
const newDiv = document.createElement("div");
const ulElement = document.querySelector("#newUl");
const removeSpan = document.querySelector(".remove");
const srcChanger = document.getElementsByTagName("img");
const removePara = document.getElementById("myElement");
const removeCss = document.getElementById("myDiv");

function changeText() {
  element.textContent = "I am changed by dom manipulation";
}

function changeColor() {
  colChanger.style.backgroundColor = "blue";
}

function createDiv() {
  newDiv.textContent = "This div created by dom manipulation";
  document.body.appendChild(newDiv);
}
createDiv();

const addLi = () => {
  const li = document.createElement("li");
  li.textContent = "This li is added by dom manipulation";
  ulElement.appendChild(li);
};
addLi();

const removeElement = () => {
  removeSpan.parentNode.removeChild(removeSpan);
  //   removeSpan.remove();
};

function removeLastChild() {
  removePara.removeChild(removePara.lastElementChild);
}

function changeSrc() {
  console.log(srcChanger);
  srcChanger.src = "srcchanged";
}
changeSrc();

function removeColor() {
  removeCss.style.backgroundColor = "";
}

const button = document.getElementById("changeTextButton");
const paragraph = document.getElementById("text");

button.addEventListener("click", () => {
  paragraph.textContent = "Text after button click";
});


const box = document.querySelector(".box")

box.addEventListener("mouseover" , () => {
    box.style.border = "3px solid green";
})

box.addEventListener("mouseout" , () => {
    box.style.border = "3px solid red";
})