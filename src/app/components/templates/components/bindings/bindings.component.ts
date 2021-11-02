import { Component, OnInit } from '@angular/core';
import { IntroMessageClassesService } from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  introMessage: string = 'Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.';
  introMessageClasses: string = '';
  hasDataTestId: boolean = true;
  ariaLabel: string = 'This is the aria label value';
  hasContent: boolean = true;
  contentClasses: string = 'class1 class2';
  backgroundColor: string = 'orange';
  styles: string = 'background-color: green; color: orange';

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
  }

}
