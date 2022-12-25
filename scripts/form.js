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
};

const deleteVacation = (e) => {
  const currentVacationId = e.target.parentNode.id;
  const VacationIdString = `.${currentVacationId}`;
  removePrevVacationSpans(e, VacationIdString);
  if (e.target.parentNode.parentNode.querySelector(".form__user-total")) {
    e.target.parentNode.parentNode.querySelector(".form__user-total").remove();
  }
  e.target.parentNode.remove();
};

const addUser = (e) => {
  const newUserDiv = templateUser.querySelector(".form__user").cloneNode(true);
  const buttonDeleteUser = newUserDiv.querySelector(".form__button_type_user-del");
  if (document.querySelectorAll(".form__user").length > 0) {
    buttonDeleteUser.addEventListener("click", deleteUser);
  } else {
    buttonDeleteUser.remove();
  }
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
  form.append(newUserDiv);
  // auto-edit user name on addUser event
  if (document.querySelectorAll(".form__user").length > 1) {
    editUserNameOnAddUser(e, newUserDiv);
  }
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
};

// Random Color for Every User
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const returnRandomHexColorString = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
};

// Start-Up Calls

addUser();
buttonAddUser.addEventListener("click", addUser);
