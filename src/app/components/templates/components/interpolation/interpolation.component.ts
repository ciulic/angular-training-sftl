import { Component, OnInit } from '@angular/core';
import { IntroMessageClassesService } from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
  providers: [IntroMessageClassesService]
})
export class InterpolationComponent implements OnInit {
  introMessage: string = 'Text interpolation lets you incorporate dynamic string values into your HTML templates. Use interpolation to dynamically change what appears in an application view, such as displaying a custom greeting that includes the user\'s name.';

  public publicVariable: string = 'Public Variable Value';
  anotherVariable: string  = 'another variable';
  //private privateVariable = 'Private Variable Value';
  introMessageClasses: string = '';

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
  }

  getVal() {
    return 9;
  }
}
