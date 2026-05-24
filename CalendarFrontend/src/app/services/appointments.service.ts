import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Appointment } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private httpClient: HttpClient) { }

  public getProfile(handle: string): Promise<Appointment> { 
    return lastValueFrom(this.httpClient.get<Appointment>("http://localhost:3000/profiles/" + handle));
  }

  /*public async getTweets(): Promise<Tweet[]> {
    let profiles: Appointment[] = await lastValueFrom(this.httpClient.get<Appointment[]>("http://localhost:3000/profiles"));
    for (let tweet of tweets) {
      tweet.profile = profiles.find(p => p.handle === tweet.handle);
    }
    tweets.sort((a, b) => { 
      if (new Date(a.createdOn).getTime() < new Date(b.createdOn).getTime()) {
        return 1;
      } else if (new Date(a.createdOn).getTime() > new Date(b.createdOn).getTime()) {
        return -1;
      } else {
        return 0;
      }
    });

    return new Promise((resolve, reject) => resolve(tweets));
  }*/
}
