// creating variables
const input = document.querySelectorAll("input");
const billIn = document.querySelector("#bill-input");
const btnTips = document.querySelectorAll(".btn-tip");
const customIn = document.querySelector("#custom-tip");
const peopleIn = document.querySelector("#people-input");
const tipPerPerson = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-amount");
const btnReset = document.querySelector(".btn-reset");

const titleRight = document.querySelectorAll(".title-right");

// other variable
let billVal = 0, // stores the bill input value
  customVal = 0, // stores the value of customVal input value
  numOfPeopleVal = 0, // stores the value of number of people input value
  btnVal = 0; // stores the value of the clicked button

// reset the form
btnReset.addEventListener("click", (e) => {
  e.preventDefault();
  tipPerPerson.innerText = "$0.00";
  totalPerPerson.innerText = "$0.00";

  for (const inp of input) {
    inp.value = 0;
    input[1].value = "";
    inp.style.color = "hsl(184, 14%, 56%)";
    input[1].style.color = "hsl(183, 100%, 15%)";
  }
});

// get the value of the bill input
billIn.addEventListener("input", (e) => {
  //   e.preventDefault();

  checkInput(e);
  e.target.style.color = "hsl(183, 100%, 15%)";
  billVal = Number(e.target.value);
  console.log(billVal);

  //
  calculate();

  //
});

// get the value of custom tip input
customIn.addEventListener("input", (e) => {
  customVal = Number(e.target.value);
  console.log(customVal);
  //
  calculate();

  //
});

// get the value of number of people
peopleIn.addEventListener("input", (e) => {
  //   e.preventDefault();

  checkInput(e);
  e.target.style.color = "hsl(183, 100%, 15%)";
  numOfPeopleVal = Number(e.target.value);
  console.log(numOfPeopleVal);

  //
  calculate();

  //
});

// get the value of the clicked button value
btnTips.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnVal = Number(btn.value);
    console.log(btnVal);
  });

  //
  calculate();

  //
});

// check if input is not empty
function checkInput(e) {
  for (let i = 0; i < input.length; i++) {
    if (e.target.value === "" || Number(e.target.value) === 0) {
      e.target.style.outline = "2px solid rgb(197, 126, 34)";
      titleRight[1].style.display = "block";
    } else {
      e.target.style.outline = "2px solid hsl(172, 67%, 45%)";

      titleRight[1].style.display = "none";
    }
  }
}

// function to execute calculation
function calculate() {
  let totalBill = 0,
    totalTip = 0,
    totalSingle = 0,
    tiplSingle = 0;

  if (customIn.value === "" || customVal === 0) {
    totalTip = btnVal / 100;

    console.log(totalTip);

    totalBill = billVal * (1 + totalTip);

    tiplSingle = (billVal * totalTip) / numOfPeopleVal;

    totalSingle = totalBill / numOfPeopleVal;

    console.log(totalBill);
  } else {
    totalTip = customVal;
    console.log(totalTip);

    totalBill = billVal + totalTip;
    console.log(totalBill);
    tiplSingle = totalTip / numOfPeopleVal;
  }

  tipPerPerson.innerText = `$${tiplSingle.toFixed(2)}`;
  totalPerPerson.innerText = `$${totalSingle.toFixed(2)}`;
}
