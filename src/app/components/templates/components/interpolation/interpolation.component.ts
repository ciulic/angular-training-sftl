import { Component, OnInit } from '@angular/core';
import { IntroMessageClassesService } from "../../../../intro-message-classes.service";
import { LogService } from "../../../../log.service";

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
  providers: [IntroMessageClassesService, LogService]
})
export class InterpolationComponent implements OnInit {
  introMessage: string = 'Text interpolation lets you incorporate dynamic string values into your HTML templates. Use interpolation to dynamically change what appears in an application view, such as displaying a custom greeting that includes the user\'s name.';

  public publicVariable: string = 'Public Variable Value';
  anotherVariable: string  = 'another variable';
  //private privateVariable = 'Private Variable Value';
  introMessageClasses: string = '';

  constructor(public introMessageClassesService: IntroMessageClassesService, public logService: LogService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
    this.logService.say('InterpolationComponent');
  }

  getVal() {
    return 9;
  }
}
