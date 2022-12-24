const form = document.querySelector(".form");
const userDiv = document.querySelector(".form__user");
const buttonAddUser = document.querySelector(".form__button_type_user-add");
const templateUser = document.querySelector("#template-user").content;
const templateVacation = document.querySelector("#template-vacation").content;
let currentUserId = new Number(1);
let currentVacationId = new Number(1);

/* const setListenerInputDate = (currentVacationDiv) => {
  const inputDateList = currentVacationDiv.querySelectorAll(".form__date");
  inputDateList.forEach((inputDate) => {
    inputDate.addEventListener("change", () => {
      console.log("change date");
    });
  });
}; */

const addVacation = (e) => {
  const newVacationDiv = templateVacation.querySelector(".form__vacation").cloneNode(true);
  const buttonApplyVacation = newVacationDiv.querySelector(".form__button_type_vac-apply");
  buttonApplyVacation.addEventListener("click", renderVacationPeriod);
  const buttonDeleteVacation = newVacationDiv.querySelector(".form__button_type_vac-del");
  buttonDeleteVacation.addEventListener("click", deleteVacation);
  // setListenerInputDate(newVacationDiv);
  newVacationDiv.id = `vacationid_${currentVacationId}`;
  currentVacationId += 1;
  e.target.parentNode.append(newVacationDiv);
};

const deleteVacation = (e) => {
  const currentVacationId = e.target.parentNode.id;
  const VacationIdString = `.${currentVacationId}`;
  removePrevVacationSpans(e, VacationIdString);
  e.target.parentNode.remove();
};

const addUser = () => {
  const newUserDiv = templateUser.querySelector(".form__user").cloneNode(true);
  const buttonDeleteUser = newUserDiv.querySelector(".form__button_type_user-del");
  if (document.querySelectorAll(".form__user").length > 0) {
    buttonDeleteUser.addEventListener("click", deleteUser);
  } else {
    buttonDeleteUser.remove();
  }
  const buttonEditUser = newUserDiv.querySelector(".form__button_type_user-edit");
  buttonEditUser.addEventListener("click", (e) => {
    const textElement = newUserDiv.querySelector(".form__username");
    textElement.contentEditable = true;
    textElement.focus();
    const editUserName = (e) => {
      e.preventDefault();
      textElement.contentEditable = false;
      textElement.removeEventListener("blur", editUserName);
    };
    textElement.addEventListener("blur", editUserName);
  });
  const buttonAddVacation = newUserDiv.querySelector(".form__button_type_vac-add");
  buttonAddVacation.addEventListener("click", addVacation);
  // setListenerInputDate(newUserDiv);
  newUserDiv.id = `userid_${currentUserId}`;
  currentUserId += 1;
  form.append(newUserDiv);
};

const deleteUser = (e) => {
  const userIdString = `.${e.target.parentNode.id}`;
  if (document.querySelectorAll(userIdString).length > 0) {
    removePrevVacationSpans(e, userIdString);
  }
  e.target.parentNode.remove();
};

addUser();
buttonAddUser.addEventListener("click", addUser);
