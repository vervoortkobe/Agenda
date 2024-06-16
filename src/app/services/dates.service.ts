import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Date } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(private http: HttpClient) {}
  private readonly BASE_URL = 'http://localhost:3000/api/dates';

  public getAllDates(): Observable<Date[]> {
    return this.http.get<Date[]>(this.BASE_URL + '/');
  }

  public getHourlyDataByDate(date: string): Observable<Date> {
    return this.http.get<Date>(this.BASE_URL + '/' + date);
  }

  public insertHourlyData(date: string, data: Date): Observable<Object> {
    return this.http.post<Object>(this.BASE_URL + '/' + date, data);
  }
}
