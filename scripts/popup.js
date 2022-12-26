const popup = document.querySelector(".popup");

renderPopupContent = (e) => {
  const popupContent = popup.querySelector(".popup__content");
  const textMonth = e.currentTarget.parentNode.parentNode.querySelector(".calendar__title").textContent;
  const textDay = e.currentTarget.firstChild.textContent;
  popup.querySelector(".popup__title").textContent = `Дата: ${textMonth}, ${textDay}`;
  const todayVacations = e.currentTarget.querySelectorAll(".calendar__span");
  if (todayVacations.length > 0) {
    popupContent.textContent = "Сегодня в отпуске:";
    todayVacations.forEach((vacation) => {
      vacationClassList = vacation.classList.value.split(" ");
      // console.log(vacationClassList);
      vacationClassList.forEach((element) => {
        if (element.indexOf("user") !== -1) {
          const todayUser = element;
          const todayUserColor = document.querySelector(`#${todayUser}`).querySelector(".form__color").value;
          const todayUserName = document.querySelector(`#${todayUser}`).querySelector(".form__username").textContent;
          // console.log(todayUserName, todayUserColor);
          const newPopupDiv = document.createElement("div");
          newPopupDiv.classList.add("popup__user");
          popupContent.append(newPopupDiv);
          const newDivUserColor = document.createElement("div");
          newDivUserColor.classList.add("popup__color");
          newDivUserColor.style = `background-color: ${todayUserColor};`;
          newPopupDiv.append(newDivUserColor);
          const newDivUserName = document.createElement("p");
          newDivUserName.classList.add("popup__name");
          newDivUserName.textContent = todayUserName;
          newPopupDiv.append(newDivUserName);
        }
      });
    });
  } else {
    popupContent.replaceChildren();
    popupContent.textContent = "Сегодня все на рабочих местах. Никто не в отпуске.";
  }
};

openPopup = (currentPopup) => {
  currentPopup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
};

function closePopup(currentPopup) {
  currentPopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
}

const closePopupByEsc = (event) => {
  if (event.key === "Escape") {
    const currentPopup = document.querySelector(".popup_opened");
    const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
    if (isNotCombinedKey && currentPopup.classList.contains("popup_opened")) {
      closePopup(currentPopup);
    }
  }
};

popup.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popup);
  }
  if (evt.target.classList.contains("popup__close-button")) {
    closePopup(popup);
  }
});
