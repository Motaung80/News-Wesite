/* CSS from lashaNox/Calendar github */

var date = new Date();

var renderCalendar = () => {
  date.setDate(1);

  var monthDays = document.querySelector(".days");

  var LDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  var prevLDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  var firstDayIndex = date.getDay();

  var LDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  var nextDays = 7 - LDayIndex - 1;

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLDay - x + 1}</div>`;
  }

  for (let i = 1; i <= LDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();