import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
})
export class CenterComponent {
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
  today = new Date();
  todayDate = this.today.getDate();
  thisMonth = this.today.getMonth();
  thisYear = this.today.getFullYear();
  thisMonthNr = this.today.getMonth() + 1;
  calendar: any = [];
  daysOutThisMonthBefore: any = [];
  daysOutThisMonthAfter: any = [];
  daysInThisMonth = new Date(
    this.today.getFullYear(),
    this.thisMonthNr,
    0
  ).getDate();
  thisMonthName = this.months[this.thisMonthNr - 1];
  firstDayOfThisMonthName =
    this.weekdays[
      new Date(this.today.getFullYear(), this.thisMonthNr, 1).getDay()
    ];
  //#endregion

  //#region Constructor
  constructor() {}
  //#endregion

  //#region Init
  ngOnInit(): void {
    for (let i = 0; i < this.daysInThisMonth; i++) {
      if (i + 1 == this.todayDate)
        this.calendar.push({
          today: true,
          year: this.thisYear,
          month: this.thisMonthName,
          date: this.todayDate,
          day: this.calcDayName(this.todayDate),
        });
      else
        this.calendar.push({
          today: false,
          year: this.thisYear,
          month: this.thisMonthName,
          date: i + 1,
          day: this.calcDayName(i + 1),
        });
    }

    for (let i = 0; i < this.weekdays.length; i++) {
      // if zondag 0 | 0 + 1 -> 7 - 1 = 6 dagen toevoegen van voor, 1 dag van achter
      if (this.weekdays[i] === this.firstDayOfThisMonthName) {
        for (let j = 0; j <= 7 - (i - 1); j++)
          this.daysOutThisMonthBefore.push({});

        for (
          let k = 0;
          k <=
          42 - this.daysInThisMonth - this.daysOutThisMonthBefore.length - 1;
          k++
        )
          this.daysOutThisMonthAfter.push({});
      }
    }
  }
  //#endregion

  //#region Methods
  calcDayName(countDayInMonth: number) {
    return this.weekdays[
      new Date(this.thisYear, this.thisMonthNr, countDayInMonth).getDay()
    ].toLowerCase();
  }
  //#endregion
}
