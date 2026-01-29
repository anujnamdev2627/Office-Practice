import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  constructor() {}
  private key = '';
  saveForm(key: string, value: any) {
    this.key = key;
    localStorage.setItem(this.key, JSON.stringify(value));
  }
  getForm(key:string) {
    this.key=key;
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }
  clearForm(value: string) {
    localStorage.removeItem(value);
  }
}
