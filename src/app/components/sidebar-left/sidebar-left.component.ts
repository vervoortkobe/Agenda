import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css',
})
export class SidebarLeftComponent {
  //#region Arrays
  weekdays = [
    'zondag',
    'maandag',
    'dinsdag',
    'woensdag',
    'donderdag',
    'vrijdag',
    'zaterdag',
  ];

  months = [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'December',
  ];
  //#endregion

  //#region Variables
  hours = new Date().getHours();
  minutes = new Date().getMinutes();
  seconds = new Date().getSeconds();
  todayDate = new Date().getDate();
  thisYear = new Date().getFullYear();
  countThisMonthNumber = new Date().getMonth() + 1;
  //#endregion

  //#region Constructor
  constructor() {
    setInterval(() => {
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
      this.seconds = new Date().getSeconds();
    }, 1000);
  }
  //#endregion

  //#region Methods
  calcDayName(countDayInMonth: number) {
    return this.weekdays[
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        countDayInMonth
      ).getDay()
    ].toLowerCase();
  }

  capitalize(dayname: string) {
    return dayname.charAt(0).toUpperCase() + dayname.slice(1);
  }
  //#endregion
}
