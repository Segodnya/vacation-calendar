// Render Calendar

const calendarContainer = document.querySelector(".calendar");
const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");
const daysOfYear = [];
const months = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь",
};

// console.log(startDate.getFullYear(), "current yer");
// console.log(startDate.getMonth(), "current month");
// console.log(startDate.getDate(), "current day of month");
// console.log(startDate.getDay(), "current day of week");
// 0 for sunday, 6 for saturday

for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
  daysOfYear.push(new Date(d));
}

function createMonth(month) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("calendar__month");
  const newTitle = document.createElement("h2");
  newTitle.classList.add("calendar__title");
  newTitle.textContent = month;
  const newArea = document.createElement("div");
  newArea.classList.add("calendar__area");
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newArea);
  return newDiv;
}

function insertMonth(newDiv) {
  calendarContainer.append(newDiv);
}

function createDay(day) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("calendar__day");
  newDiv.textContent = day;
  return newDiv;
}

function insertDay(dayDiv, currentMonth) {
  let currentMonthElement = document.querySelectorAll(".calendar__month")[currentMonth];
  let areaElement = currentMonthElement.querySelector(".calendar__area");
  areaElement.append(dayDiv);
}

daysOfYear.forEach((day) => {
  let currentMonthNumber = day.getMonth();
  let currentMonth = months[currentMonthNumber];
  let currentDayOfMonth = day.getDate();
  let currentDayOfWeek = day.getDay();

  if (currentDayOfMonth === 1) {
    let newMonth = createMonth(currentMonth);
    insertMonth(newMonth);
    let emptyDays = 0;

    if (currentDayOfWeek > 0) {
      emptyDays = currentDayOfWeek - 1;
    } else {
      emptyDays = 6;
    }

    if (emptyDays > 0) {
      for (let i = 1; i <= emptyDays; i++) {
        let newDay = createDay("");
        insertDay(newDay, currentMonthNumber);
      }
    }

    let newDay = createDay(currentDayOfMonth);
    insertDay(newDay, currentMonthNumber);
  } else {
    let newDay = createDay(currentDayOfMonth);
    insertDay(newDay, currentMonthNumber);
  }
});

// Set identificators for calendar__day divs

const dayDivList = document.querySelectorAll(".calendar__day");
let counter = 1;

const setDayDivId = (div) => {
  if (div.textContent !== "") {
    div.id = `dayid_${counter}`;
    counter += 1;
  }
};

dayDivList.forEach((div) => {
  setDayDivId(div, counter);
});
