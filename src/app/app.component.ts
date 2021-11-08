import {Component, OnInit} from '@angular/core';
import { LogService } from "./log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public logService: LogService) {
    this.logService.serviceLocation = 'app.modules';
    this.logService.say('AppComponent');
  }
}
