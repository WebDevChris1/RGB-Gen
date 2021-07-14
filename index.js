const body = document.getElementById("bg");
const btn = document.getElementById("btn");
const rgbText = document.getElementById("rgb-text");
let colors = 255;

btn.addEventListener("click", function () {
  let r = randomNum();
  let g = randomNum();
  let b = randomNum();
  body.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b})`);
  rgbText.textContent = `rgb(${r}, ${g}, ${b})`;
});

function randomNum() {
  let num = Math.floor(Math.random() * colors);
  return num;
}
