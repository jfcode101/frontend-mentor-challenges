const billIn = document.querySelector("#bill-input");
const btnTips = document.querySelectorAll(".btn-tip");
const customTipIn = document.querySelector("#custom-tip");
const peopleIn = document.querySelector("#people-input");
const tipSingle = document.querySelector("#tip-amount");
const totalSingle = document.querySelector("#total-amount");
const btnReset = document.querySelector(".btn-reset");
const titleRight = document.querySelectorAll(".title-right");

// variable
let billVal = 0,
  customTipVal = 0,
  peopleVal = 0,
  btnTipVal = 0;

// populate default value
tipSingle.innerHTML = `$0.00`;
totalSingle.innerHTML = `$0.00`;

btnReset.addEventListener("click", (e) => {
  e.preventDefault();
  calculate();
  tipSingle.innerHTML = `$0.00`;
  totalSingle.innerHTML = `$0.00`;
  customTipIn.value = "";

  const inputs = [billIn, peopleIn];
  for (const inp of inputs) {
    inp.value = 0;
    inp.style.color = "hsl(184, 14%, 56%)";
  }
  billVal = 0;
  peopleVal = 0;

  btnTips.forEach((btn) => {
    btn.classList.remove("active");
  });
});

// adding event listeners
billIn.addEventListener("input", () => {
  checkInput();
  billVal = Number(parseFloat(billIn.value));
  calculate();
});

btnTips.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    for (let b = 0; b < btnTips.length; b++) {
      btnTips[b].classList.remove("active");
    }
    e.target.classList.add("active");
    btnTipVal = Number(parseFloat(btn.value)) / 100;
    if (e.target.classList.contains("active")) {
      customTipVal = 0;
      customTipIn.innerHTML = "0";
      btnTipVal = Number(parseFloat(btn.value)) / 100;
      calculate();
    }
  });
});

customTipIn.addEventListener("input", () => {
  customTipVal = Number(parseFloat(customTipIn.value)) / 100;
  btnTips.forEach((btn) => {
    btn.classList.remove("active");
  });
  calculate();
});

peopleIn.addEventListener("input", () => {
  checkInput();
  peopleVal = Number(parseInt(peopleIn.value));
  calculate();
});

// function to check whether an input is a valid number or not
// Bill and Number of people
function checkInput() {
  const inputs = [billIn, peopleIn];
  let focusedInput = document.activeElement;
  for (let i = 0; i < inputs.length; i++) {
    if (
      focusedInput.value === "" ||
      Number(focusedInput.value) === 0 ||
      Number(focusedInput.value) < 0
    ) {
      focusedInput.style.outline = "2px solid rgb(197, 126, 34)";
      titleRight[1].style.display = "block";
    } else {
      focusedInput.style.outline = "2px solid hsl(172, 67%, 45%)";
      titleRight[1].style.display = "none";
    }
  }
}

// function that calculate an individual tip and total payments
// and then populates their appropriate
function calculate() {
  let tipSingleVal = 0,
    totalSingleVal = 0;
  if (customTipIn.value === "" || customTipVal === 0) {
    tipSingleVal = (billVal * btnTipVal) / peopleVal;
    // totalSingleVal = billVal / peopleVal + tipSingleVal;
  } else {
    tipSingleVal = (billVal * customTipVal) / peopleVal;
  }
  totalSingleVal = billVal / peopleVal + tipSingleVal;

  tipSingle.innerHTML = `$${tipSingleVal.toFixed(2)}`;
  totalSingle.innerHTML = `$${totalSingleVal.toFixed(2)}`;
}
