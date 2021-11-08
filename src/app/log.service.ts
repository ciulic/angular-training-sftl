import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  serviceLocation: String = '';

  constructor() { }

  say(message: String) {
    console.log(`Log ${this.serviceLocation}: ${message}`);
  }
}
