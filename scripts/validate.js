// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const validationConfig = {
  formSelector: ".form__vacation",
  inputSelector: ".form__date",
  startDate: ".form__date_type_start",
  endDate: ".form__date_type_end",
  submitButtonSelector: ".form__button_type_vac-apply",
  inactiveButtonClass: "form__button_type_vac-apply_disabled",
  inputErrorClass: "form__date_type_error",
  errorClass: "form__error_visible",
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

const showInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(settings.errorClass);
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const checkDateSequence = (formElement, settings) => {
  const startDate = formElement.querySelector(settings.startDate);
  const endDate = formElement.querySelector(settings.endDate);
  // it works with 1-day vacation
  if (startDate.value > endDate.value) {
    endDate.setCustomValidity("Дата окончания отпуска не может быть меньше даты начала отпуска");
    showInputError(formElement, endDate, settings);
  } else {
    endDate.setCustomValidity("");
    hideInputError(formElement, endDate, settings);
  }
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const enableValidation = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkDateSequence(formElement, settings);
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};
