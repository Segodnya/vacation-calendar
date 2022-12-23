const checkIsNotEmpty = (day) => {
  return day.textContent.length > 0;
};

const dayDivList = document.querySelectorAll(".calendar__day");
// const actualDayDivlist = dayDivList.filter(checkIsNotEmpty);

const renderVacationPeriod = (e) => {
  const vacationStartDay = showVacationStart(e);
  const vacationEndDay = showVacationEnd(e);
  const emptyDaysCount = countEmptyDays(vacationStartDay);
  console.log("vacation period", vacationStartDay, vacationEndDay);
  console.log("start day", dayDivList[vacationStartDay]);
  console.log("end day", dayDivList[vacationEndDay]);
  console.log("empty days count", emptyDaysCount);
  for (let i = vacationStartDay + emptyDaysCount; i <= vacationEndDay + emptyDaysCount; i++) {
    console.log(i);
    dayDivList[i].style = "background: red;";
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
  let totalDays = 365 + Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
};

const countEmptyDays = (vacationStartDay) => {
  let count = 0;
  for (let i = 0; i <= vacationStartDay; i++) {
    if (dayDivList[i].textContent.length === 0) {
      count += 1;
      vacationStartDay += 1;
    }
  }
  return count;
};
