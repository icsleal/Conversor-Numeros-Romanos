let number = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
let output = document.getElementById("output");

const numbersRomans = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function converRoman() {
  let userInput = Number(number.value);
  output.innerText = "";
  output.style.paddingTop = "30px";

  if (number.value === "") {
    output.innerText = "Please enter a valid number";

    return;
  } else if (number.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (number.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  for (let i = 0; i < numbersRomans.length; i++) {
    while (userInput >= arabic[i]) {
      userInput -= arabic[i];
      output.innerText += numbersRomans[i];
    }
  }
}

window.addEventListener("load", () => {
  output.style.padding = "0px";
});
convertBtn.addEventListener("click", converRoman);
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    converRoman();
  }
});
