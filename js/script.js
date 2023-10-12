//new Date(year, month, 0).getDate();
const amountDaysInThisMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
const weekdays = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
const countThisMonthNumber = new Date().getMonth() + 1;
const thisMonthName = months[countThisMonthNumber];
const firstDayOfThisMonthName = weekdays[new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()];
const todayDate = new Date().getDate();
const thisYear = new Date().getFullYear();

//SET MAAND NAAM H2
document.getElementById("monthname").innerHTML = thisMonthName + ` <span style="font-size: 1.5rem;">#${countThisMonthNumber}</span>`;

let daysInThisMonth = "";
for (let i = 0; i < amountDaysInThisMonth; i++) {
  if (i + 1 == todayDate) daysInThisMonth += `<li id="${thisYear}-${thisMonthName}_${todayDate}" class="in today ${calcDayName(todayDate)}"><a>${todayDate}</a></li>`;
  else daysInThisMonth += `<li id="${thisYear}-${thisMonthName}_${i + 1}" class="in ${calcDayName(i + 1)}"><a>${i + 1}</a></li>`;
}

let daysOutThisMonthBefore = "";
let daysOutThisMonthAfter = "";
for (let i = 0; i < weekdays.length; i++) {
  // if zondag 0 | 0 + 1 -> 7 - 1 = 6 dagen toevoegen van voor, 1 dag van achter
  if (weekdays[i] === firstDayOfThisMonthName) {
    for (let j = 0; j < 7 - (i + 1); j++)
      daysOutThisMonthBefore += `<li class="out"<a></a></li>`;

    for (let k = 0; k < i + 6 - i; k++)
      daysOutThisMonthAfter += `<li class="out"><a></a></li>`;
  }
}

const calendar = daysOutThisMonthBefore + daysInThisMonth + daysOutThisMonthAfter;
document.getElementById("daysul").innerHTML = calendar;

function edit(a) {
  console.log(a);
}

function t() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let secs = new Date().getSeconds();
  let time = `${hours}:${minutes}:${secs}`;
  document.getElementById("monthname").innerText = time;
}
//setInterval(() => t(), 1000);

function calcDayName(countDayInMonth) {
  return weekdays[new Date(new Date().getFullYear(), new Date().getMonth(), countDayInMonth).getDay()].toLowerCase();
}