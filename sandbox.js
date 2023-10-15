const cardName = document.querySelector("#name");
const nameInp = document.querySelector("#card-name");

const cardNumber = document.querySelector("#number");
const numberInp = document.querySelector("#card_number");

const cardCvc = document.querySelector("#cvc");
const cvcInp = document.querySelector("#card_cvc");

const cardMonth = document.querySelector("#month");
const monthInp = document.querySelector("#card_month");

const cardYear = document.querySelector("#year");
const yearInp = document.querySelector("#card_year");

const submitBtn = document.querySelector("#submit-btn");
const completed = document.querySelector(".thank");
const form = document.querySelector("form");

const numberInpReg = "^[0-9]{16}$";

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}

function setCardName(e) {
  cardName.innerText = e.target.value;
}

function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
  cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
  cardCvc.innerText = e.target.value;
}

function format(s) {
  return s
    .toString()
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  // return s.toString().replace(/\d{4}(?=.)/g, "$&");
  //   return s.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "$&");
}

function handleSubmit(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;

    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "can't be blank";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
    if (
      numberInp.value &&
      nameInp.value &&
      monthInp.value &&
      yearInp.value &&
      cvcInp.value
    ) {
      completed.classList.remove("hidden");
      form.classList.add("hidden");
    }
  });

  return validator;
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);

submitBtn.addEventListener("click", handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   if (!nameInp.value) {
//     nameInp.classList.add("error");
//     nameInp.parent.querySelector("small").innerText =
//       parentElement.add("error_message");
//   } else {
//     nameInp.classList.remove("error");
//     nameInp.parentElement.remove("error_message");
//   }
//   if (!monthInp.value) {
//     monthInp.classList.add("error");
//     monthInp.parentElement.add("error_message");
//   } else if (!monthInp === monthInpReg) {
//     monthInp.classList.add("error");
//     parent.querySelector("small").innerText = "wrong format";
//   } else {
//     monthInp.classList.remove("error");
//     monthInp.parentElement.remove("error_message");
//   }
//   if (!numberInp.value) {
//     numberInp.classList.add("error");
//     numberInp.parentElement.add("error_message");
//   } else {
//     numberInp.classList.remove("error");
//     numberInp.parentElement.remove("error_message");
//   }
//   if (!yearInp.value) {
//     yearInp.classList.add("error");
//     yearInp.parentElement.add("error_message");
//   } else {
//     yearInp.classList.remove("error");
//     yearInp.parentElement.remove("error_message");
//   }
//   if (!cvcInp.value) {
//     cvcInp.classList.add("error");
//     cvcInp.parentElement.add("error_message");
//   } else {
//     cvcInp.classList.remove("error");
//     cvcInp.parentElement.remove("error_message");
//   }

//   if (
//     numberInp.value &&
//     nameInp.value &&
//     monthInp.value &&
//     yearInp.value &&
//     cvcInp.value
//   ) {
//     completed.classList.remove("hidden");
//     form.classList.add("hidden");
//   }
// }

// function validForm() {
//   const inputs = document.querySelectorAll("input");
//   let validator = true;
//   inputs.forEach((i) => {
//     const parent = i.parentElement;

//     if (!i.value) {
//       i.style.borderColor = "red";
//       parent.querySelector("small").innerText = "can't be blank";
//       validator = false;
//     } else if (monthInp.value > 12) {
//       monthInp.style.borderColor = "red";
//       monthInp.querySelector("small").innerText = "must be a valid month.";
//       validator = false;
//     } else if (dayInp.value > 31) {
//       dayInp.style.borderColor = "red";
//       dayInp.querySelector("small").innerText = "must be a valid day.";
//       validator = false;
//     } else {
//       i.style.borderColor = "black";
//       parent.querySelector("small").innerText = "";
//       validator = true;
//     }

//   });

//   return validator;
// }
