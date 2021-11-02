import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroMessageClassesService {

  introMessageClasses: string = 'font-weight-bold mb-5';

  constructor() { }
}
