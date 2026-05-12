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
  const lengthPass = lengthOfPassword();
  const allSmallChar = "qwertyuiopasdfghjklzxcvbnm";
  const selectedCharGroups = [];

  if (document.querySelector("#check1").checked) {
    selectedCharGroups.push("QWERTYUIOPASDFGHJKLZXCVBNM");
  }

  if (document.querySelector("#check2").checked) {
    selectedCharGroups.push("1234567890");
  }

  if (document.querySelector("#check3").checked) {
    selectedCharGroups.push("!@#$%^&*()");
  }

  let arr = [];

  for (let i = 0; i < lengthPass; i++) {
    let randChar =
      crypto.getRandomValues(new Uint32Array(1))[0] % allSmallChar.length;
    arr[i] = allSmallChar[randChar];
  }

  let usedIndexes = [];

  selectedCharGroups.forEach((charGroup) => {
    let passwordIndex =
      crypto.getRandomValues(new Uint32Array(1))[0] % lengthPass;

    while (usedIndexes.includes(passwordIndex)) {
      passwordIndex =
        crypto.getRandomValues(new Uint32Array(1))[0] % lengthPass;
    }

    const charIndex =
      crypto.getRandomValues(new Uint32Array(1))[0] % charGroup.length;

    arr[passwordIndex] = charGroup[charIndex];
    usedIndexes.push(passwordIndex);
  });

  return arr.join("");
}

function lengthOfPassword() {
  let length = parseInt(document.querySelector("#length").value);
  if (length <= 24 && length >= 4) return length;
}

function copyPassword() {
  if (input.value === "") return;
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
