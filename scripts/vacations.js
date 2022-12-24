const renderVacationPeriod = (e) => {
  const currentVacationId = e.target.parentNode.id;
  const VacationIdString = `.${currentVacationId}`;
  console.log(document.querySelectorAll(VacationIdString).length);
  if (document.querySelectorAll(VacationIdString).length > 0) {
    removePrevVacationSpans(e, VacationIdString);
  }
  const vacationStartDay = showVacationStart(e);
  const vacationEndDay = showVacationEnd(e);
  const currentColor = e.target.parentNode.parentNode.querySelector(".form__color").value;
  for (let i = vacationStartDay; i <= vacationEndDay; i++) {
    const dayIdString = `#dayid_${i}`;
    const currentDayDiv = document.querySelector(dayIdString);
    const newDivSpan = document.createElement("span");
    newDivSpan.classList.add("calendar__span");
    currentDayDiv.append(newDivSpan);
    newDivSpan.textContent = ".";
    newDivSpan.style = `color: ${currentColor};`;
    newDivSpan.classList.add(e.target.parentNode.id);
    newDivSpan.classList.add(e.target.parentNode.parentNode.id);
    // scroll to the start of current vacation
    if (i === vacationStartDay) {
      scrollToVacationStartDiv(currentDayDiv);
    }
  }
};

const showVacationStart = (e) => {
  const currentVacationDiv = e.target.parentNode;
  const vacationStartDate = new Date(currentVacationDiv.querySelector(".form__date_type_start").value);
  const vacationStartDay = countDaysFromYearStart(vacationStartDate, startDate);
  return vacationStartDay;
};

const showVacationEnd = (e) => {
  const currentVacationDiv = e.target.parentNode;
  const vacationEndDate = new Date(currentVacationDiv.querySelector(".form__date_type_end").value);
  const vacationEndDay = countDaysFromYearStart(vacationEndDate, startDate);
  return vacationEndDay;
};

const countDaysFromYearStart = (currentDate, yearStartDate) => {
  let difference = currentDate.getTime() - yearStartDate.getTime();
  let totalDays = 365 + 1 + Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
};

const removePrevVacationSpans = (e, VacationIdString) => {
  const divsToDelete = document.querySelectorAll(VacationIdString);
  divsToDelete.forEach((element) => {
    element.remove();
  });
};

const scrollToVacationStartDiv = (currentDayDiv) => {
  currentDayDiv.parentNode.scrollIntoView({ behavior: "smooth" });
};
