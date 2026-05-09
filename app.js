let button = document.querySelector(".button-generator button");
let buttonCopy = document.querySelector(".button-copy button");
let input = document.querySelector(".input input");
let alertBox = document.querySelector(".alert");

button.addEventListener("click", (e) => {
  let password = generatePassword();
  input.value = password;
});

buttonCopy.addEventListener("click", (e) => {
  copyPassword();
  showAlertBox();
  setTimeout(hideAlertBox, 1500);
});

function generatePassword() {
  const upper = document.querySelector("#check1").checked;
  const upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numbers = document.querySelector("#check2").checked;
  const numbersChar = "1234567890";
  const special = document.querySelector("#check3").checked;
  const specialChar = "!@#$%^&*()";

  const lengthPass = lengthOfPassword();
  const allChar =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()";
  let arr = [];
  for (let i = 0; i < lengthPass; i++) {
    let randChar = Math.floor(Math.random() * allChar.length);
    arr[i] = allChar[randChar];
  }
  if (upper && !numbers && !special) {
    let rand = Math.floor(Math.random() * lengthPass);
    arr[rand] = upperChar[Math.floor(Math.random() * upperChar.length)];
  } else if (!upper && numbers && !special) {
    let rand = Math.floor(Math.random() * lengthPass);
    arr[rand] = numbersChar[Math.floor(Math.random() * numbersChar.length)];
  } else if (!upper && !numbers && special) {
    let rand = Math.floor(Math.random() * lengthPass);
    arr[rand] = specialChar[Math.floor(Math.random() * specialChar.length)];
  } else if (upper && numbers && !special) {
    let rand = Math.floor(Math.random() * lengthPass);
    arr[rand] = upperChar[Math.floor(Math.random() * upperChar.length)];
    let rand2 = Math.floor(Math.random() * lengthPass);
    while (rand2 == rand) {
      rand2 = Math.floor(Math.random() * lengthPass);
    }
    arr[rand2] = numbersChar[Math.floor(Math.random() * numbersChar.length)];
  } else if (upper && !numbers && special) {
    let rand = Math.floor(Math.random() * lengthPass);
    arr[rand] = upperChar[Math.floor(Math.random() * upperChar.length)];
    let rand2 = Math.floor(Math.random() * lengthPass);
    while (rand2 == rand) {
      rand2 = Math.floor(Math.random() * lengthPass);
    }
    arr[rand2] = specialChar[Math.floor(Math.random() * specialChar.length)];
  } else if (!upper && numbers && special) {
    let rand = Math.floor(Math.random() * lengthPass);
    arr[rand] = numbersChar[Math.floor(Math.random() * numbersChar.length)];
    let rand2 = Math.floor(Math.random() * lengthPass);
    while (rand2 == rand) {
      rand2 = Math.floor(Math.random() * lengthPass);
    }
    arr[rand2] = specialChar[Math.floor(Math.random() * specialChar.length)];
  } else if (upper && numbers && special) {
    let rand = Math.floor(Math.random() * lengthPass);
    arr[rand] = upperChar[Math.floor(Math.random() * upperChar.length)];
    let rand2 = Math.floor(Math.random() * lengthPass);
    while (rand2 == rand) {
      rand2 = Math.floor(Math.random() * lengthPass);
    }
    arr[rand2] = numbersChar[Math.floor(Math.random() * numbersChar.length)];
    let rand3 = Math.floor(Math.random() * lengthPass);
    while (rand3 == rand || rand3 == rand2) {
      rand3 = Math.floor(Math.random() * lengthPass);
    }
    arr[rand3] = specialChar[Math.floor(Math.random() * specialChar.length)];
  }
  return arr.join("");
}

function lengthOfPassword() {
  let length = parseInt(document.querySelector("#length").value);
  if (length <= 24 && length >= 4) return length;
}

function copyPassword() {
  navigator.clipboard.writeText(input.value);
}

function showAlertBox() {
  if (input.value != "") {
    alertBox.style.display = "block";
  }
}

function hideAlertBox() {
  alertBox.style.display = "none";
}
