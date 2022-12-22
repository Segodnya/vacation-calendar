const form = document.querySelector(".form");
const userDiv = document.querySelector(".form__user");
const buttonAddUser = document.querySelector(".form__button_type_user");
const templateUser = document.querySelector("#template-user").content;
const templateVacation = document.querySelector("#template-vacation").content;

const addVacation = (e) => {
  const newVacationDiv = templateVacation.querySelector(".form__vacation").cloneNode(true);
  const buttonDeleteVacation = newVacationDiv.querySelector(".form__button_type_vaс-del");
  buttonDeleteVacation.addEventListener("click", deleteVacation);
  e.target.parentNode.append(newVacationDiv);
};

const deleteVacation = (e) => {
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
  const buttonAddVacation = newUserDiv.querySelector(".form__button_type_vac");
  buttonAddVacation.addEventListener("click", addVacation);
  form.append(newUserDiv);
};

const deleteUser = (e) => {
  e.target.parentNode.remove();
};

addUser();
buttonAddUser.addEventListener("click", addUser);
