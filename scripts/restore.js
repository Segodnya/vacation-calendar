const saveContent = () => {
  localStorage.clear();
  const content = document.querySelector(".form");
  const inputs = content.querySelectorAll("input");
  const values = [];
  inputs.forEach((element) => {
    values.push(element.value);
  });
  localStorage.setItem("content", content.innerHTML);
  localStorage.setItem("values", values);
  localStorage.setItem("userid", currentUserId);
  localStorage.setItem("vacationid", currentVacationId);
};

const restoreContent = () => {
  const form = document.querySelector(".form");
  const content = localStorage.getItem("content");
  currentUserId = Number(localStorage.getItem("userid"));
  currentVacationId = Number(localStorage.getItem("vacationid"));
  if (content) {
    form.insertAdjacentHTML("afterbegin", content);
    const values = localStorage.getItem("values").split(",");
    const inputs = form.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = values[i];
    }
    // Restore Event Listeners
    // User name & Edit name button
    const formUsers = document.querySelectorAll(".form__user");
    formUsers.forEach((user) => {
      const buttonEditUser = user.querySelector(".form__button_type_user-edit");
      buttonEditUser.addEventListener("click", (e) => {
        editUserNameOnAddUser(e, user);
      });
      const btnHide = user.querySelector(".form__button_type_user-hide");
      btnHide.addEventListener("click", hideUserByHideButton);
      user.querySelector(".form__username").addEventListener("click", (e) => {
        if (e.target.parentNode.classList.contains("form__user_hidden")) {
          hideAllUsers(e);
          showUser(user);
        }
      });
    });
    // Delete user button
    const buttonsDeleteUser = document.querySelectorAll(".form__button_type_user-del");
    buttonsDeleteUser.forEach((element) => {
      element.addEventListener("click", deleteUser);
    });
    // Add vacation button
    const buttonsAddVacation = document.querySelectorAll(".form__button_type_vac-add");
    buttonsAddVacation.forEach((element) => {
      element.addEventListener("click", addVacation);
    });
    // Start & end date inputs
    const divsVacation = document.querySelectorAll(".form__vacation");
    divsVacation.forEach((element) => {
      enableValidation(element, validationConfig);
    });
    // Show vacation button
    const buttonsApplyVacation = document.querySelectorAll(".form__button_type_vac-apply");
    buttonsApplyVacation.forEach((element) => {
      element.addEventListener("click", renderVacationPeriod);
      // Press show vacation button to render it on calendar
      element.click();
    });
    // Delete vacation
    const buttonsDeleteVacation = document.querySelectorAll(".form__button_type_vac-del");
    buttonsDeleteVacation.forEach((element) => {
      element.addEventListener("click", deleteVacation);
    });
  } else {
    form.insertAdjacentHTML("afterbegin", "");
  }
  localStorage.clear();
};

document.addEventListener("click", saveContent);
//document.addEventListener("change", saveContent);
//document.addEventListener("wheel", saveContent);
//document.addEventListener("scroll", saveContent);
restoreContent();

function resetData() {
  const vacations = document.querySelectorAll(".form__vacation");
  vacations.forEach((element) => {
    element.remove();
  });
  const users = document.querySelectorAll(".form__user");
  users.forEach((element) => {
    element.remove();
  });
  currentUserId = Number(1);
  currentVacationId = Number(1);
  localStorage.clear();
  window.location.reload();
}
const btnReset = document.querySelector(".form__button_type_reset");
btnReset.addEventListener("click", resetData);
