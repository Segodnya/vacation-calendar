// Forms Logic

const form = document.querySelector(".form");
const userDiv = document.querySelector(".form__user");
const buttonAddUser = document.querySelector(".form__button_type_user-add");
const templateUser = document.querySelector("#template-user").content;
const templateVacation = document.querySelector("#template-vacation").content;
let currentUserId = new Number(1);
let currentVacationId = new Number(1);

const addVacation = (e) => {
  const newVacationDiv = templateVacation.querySelector(".form__vacation").cloneNode(true);
  const buttonApplyVacation = newVacationDiv.querySelector(".form__button_type_vac-apply");
  buttonApplyVacation.addEventListener("click", renderVacationPeriod);
  const buttonDeleteVacation = newVacationDiv.querySelector(".form__button_type_vac-del");
  buttonDeleteVacation.addEventListener("click", deleteVacation);
  newVacationDiv.id = `vacationid_${currentVacationId}`;
  currentVacationId += 1;
  e.target.parentNode.append(newVacationDiv);
  enableValidation(newVacationDiv, validationConfig);
  if (e.target.parentNode.querySelector(".form__user-total")) {
    e.target.parentNode.querySelector(".form__user-total").remove();
  }
  if (e.target.parentNode.querySelector(".form__user-total-workdays")) {
    e.target.parentNode.querySelector(".form__user-total-workdays").remove();
  }
};

const deleteVacation = (e) => {
  const currentVacationId = e.target.parentNode.id;
  const VacationIdString = `.${currentVacationId}`;
  removePrevVacationSpans(e, VacationIdString);
  if (e.target.parentNode.parentNode.querySelector(".form__user-total")) {
    e.target.parentNode.parentNode.querySelector(".form__user-total").remove();
  }
  if (e.target.parentNode.parentNode.querySelector(".form__user-total-working")) {
    e.target.parentNode.parentNode.querySelector(".form__user-total-working").remove();
  }
  e.target.parentNode.remove();
};

const hideUserByHideButton = (e) => {
  const div = e.target.parentNode;
  div.classList.add("form__user_hidden");
  div.style = `color: #fff; background-color: ${div.querySelector(".form__color").value};`;
  for (const child of div.children) {
    if (!child.classList.contains("form__username")) {
      child.style = `visibility: collapse; opacity: 0;`;
    }
  }
};

const addUser = (e) => {
  const newUserDiv = templateUser.querySelector(".form__user").cloneNode(true);
  const buttonDeleteUser = newUserDiv.querySelector(".form__button_type_user-del");
  buttonDeleteUser.addEventListener("click", deleteUser);
  const buttonEditUser = newUserDiv.querySelector(".form__button_type_user-edit");
  buttonEditUser.addEventListener("click", (e) => {
    editUserNameOnAddUser(e, newUserDiv);
  });
  const buttonAddVacation = newUserDiv.querySelector(".form__button_type_vac-add");
  buttonAddVacation.addEventListener("click", addVacation);
  newUserDiv.id = `userid_${currentUserId}`;
  currentUserId += 1;
  // select random hex-color for user
  let userColor = newUserDiv.querySelector(".form__color");
  userColor.value = returnRandomHexColorString();
  const btnHide = newUserDiv.querySelector(".form__button_type_user-hide");
  btnHide.addEventListener("click", hideUserByHideButton);
  newUserDiv.querySelector(".form__username").addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("form__user_hidden")) {
      hideAllUsers(e);
      showUser(newUserDiv);
    }
  });
  form.append(newUserDiv);
  editUserNameOnAddUser(e, newUserDiv);
};

const deleteUser = (e) => {
  const userIdString = `.${e.target.parentNode.id}`;
  if (document.querySelectorAll(userIdString).length > 0) {
    removePrevVacationSpans(e, userIdString);
  }
  e.target.parentNode.remove();
};

const editUserNameOnAddUser = (e, newUserDiv) => {
  const textElement = newUserDiv.querySelector(".form__username");
  textElement.addEventListener("keydown", checkContentEditableLenght);
  textElement.contentEditable = true;
  textElement.focus();
  // the way to select all the text in non-input element
  window.getSelection().selectAllChildren(textElement);
  const editUserName = (e) => {
    e.preventDefault();
    textElement.contentEditable = false;
    textElement.removeEventListener("blur", editUserName);
  };
  textElement.addEventListener("blur", editUserName);
  textElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      editUserName(e);
    }
  });
};

// Collapse user forms
const hideUser = (div, userColor) => {
  div.classList.add("form__user_hidden");
  div.style = `color: #fff; background-color: ${userColor.value};`;
  for (const child of div.children) {
    if (!child.classList.contains("form__username")) {
      child.style = `visibility: collapse; opacity: 0;`;
    }
  }
};

const showUser = (div) => {
  div.classList.remove("form__user_hidden");
  div.style = "color: --color-text-primary; background-color: --color-bg-forms";
  for (const child of div.children) {
    if (!child.classList.contains("form__username")) {
      child.style = "visibility: visible; opacity: 1;";
    }
  }
};

// Random Color for Every User
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const returnRandomHexColorString = () => {
  let hexColor = "#";
  let hexColorIndexes = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
    hexColorIndexes.push(randomNumber);
  }
  // check is color too white compare to background color
  if (hexColorIndexes[0] >= 10 && hexColorIndexes[2] >= 10 && hexColorIndexes[4] >= 10) {
    returnRandomHexColorString();
  }
  return hexColor;
};

// Prevent Long Names
function checkContentEditableLenght(event) {
  /* Any Shortcut except Ctrl + V */
  const isValidShortcut = event.ctrlKey && event.keyCode != 86;
  /* Backspace - Delete - Arrow Keys - Ctrl - Shift */
  const isValidKeyCode = [8, 16, 17, 37, 38, 39, 40, 46].includes(event.keyCode);
  const maxLength = parseInt(event.srcElement.getAttribute("maxlength"));
  const text = event.srcElement.innerText;
  if (text.length >= maxLength && !isValidKeyCode && !isValidShortcut) {
    event.preventDefault();
  }
}

// Start-Up Calls

const hideAllUsers = (e) => {
  const usersTemp = document.querySelectorAll(".form__user");
  let counterTemp = 0;
  let marker = 0;
  if (e.target.classList.contains("form__button_type_user-add") && usersTemp.length !== 0) {
    marker = usersTemp.length;

    for (let i = 0; i < usersTemp.length; i++) {
      let userColor = usersTemp[i].querySelector(".form__color");
      hideUser(usersTemp[i], userColor);
      counterTemp += 1;
    }
  } else {
    usersTemp.forEach((element) => {
      let userColor = element.querySelector(".form__color");
      if (e.target.currentTarget !== element) {
        hideUser(element, userColor);
      } else {
        showUser(element);
      }
    });
  }
};

buttonAddUser.addEventListener("click", (e) => {
  hideAllUsers(e);
  addUser();
});
