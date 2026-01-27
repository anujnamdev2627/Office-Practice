import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private http: HttpClient) {}
  apiKey = '90b680b235028b558e36cb41f6c3bea9435d7dd4150d8bdf819e41001e3a57f1';
  baseURL = 'https://api.countrystatecity.in/v1/countries/IN/states';
  getState() {
    return this.http.get<any[]>(this.baseURL, {
      headers: {
        'X-CSCAPI-KEY': this.apiKey,
      },
    });
  }

  getCities(stateId:string) {
    return this.http.get<any[]>(
      `https://api.countrystatecity.in/v1/countries/IN/states/${stateId}/cities`,
      {
        headers: {
          'X-CSCAPI-KEY': this.apiKey,
        },
      },
    );
  }
}
