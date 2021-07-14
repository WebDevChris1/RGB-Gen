const body = document.getElementById("bg");
const btn = document.getElementById("btn");
const rgbText = document.getElementById("rgb-text");
const colors = 255;

// Click Me event listener
btn.addEventListener("click", function () {
  // get random numbers
  const r = randomNum();
  const g = randomNum();
  const b = randomNum();
  // add background color atr
  body.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b})`);
  // add rgb color code
  rgbText.textContent = `rgb(${r}, ${g}, ${b})`;
});

// generate random num 0-255
function randomNum() {
  const num = Math.floor(Math.random() * colors);
  return num;
}
