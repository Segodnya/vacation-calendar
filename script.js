const calendarContainer = document.querySelector(".calendar");
const monthTemplate = document.querySelector(".template-month").content;
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
  const monthElement = monthTemplate.querySelector(".calendar__month").cloneNode(true);
  monthElement.querySelector(".calendar__title").textContent = month;
  return monthElement;
}

function insertMonth(monthElement) {
  calendarContainer.append(monthElement);
}

daysOfYear.forEach((day) => {
  if (day.getDate() === 1) {
    const currentMonth = months[day.getMonth()];
    const newMonth = createMonth(currentMonth);
    insertMonth(newMonth);
  }
});
