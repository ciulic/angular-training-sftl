import { Component, OnInit } from '@angular/core';
import {IntroMessageClassesService} from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  introMessage: string = 'Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.';
  myClasses: string[] = ['btn', 'btn-success'];
  isDisabled: boolean = true;
  parentProp: string = 'This is a parent prop';
  evilTitle: string = 'Template <script>alert("evil never sleeps")</script> Syntax';
  evilTitle2: string = '<b>Template Syntax</b>';
  introMessageClasses: string = '';

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
    if (this.isDisabled) {
      this.myClasses.push('disabled');
    }
  }
}
