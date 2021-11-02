import { Component, OnInit } from '@angular/core';
import {IntroMessageClassesService} from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css'],
  providers: [IntroMessageClassesService]
})
export class BuiltInComponent implements OnInit {
  introMessage: string = 'Directives are classes that add additional behavior to elements in your Angular applications. Use Angular\'s built-in directives to manage forms, lists, styles, and what users see.';
  introMessageClasses: string = '';

  isSpecial: boolean = true;
  multipleClasses: Record<string, boolean> = {};
  multipleStyles: Record<string, string> = {};

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
    this.setClasses();
    this.setStyles();
  }

  setClasses() {
    this.multipleClasses = {
      class1: true,
      class2: false,
      class3: true,
    };
  }

  setStyles() {
    this.multipleStyles = {
      'font-weight': true ? 'bold' : 'normal',
      'color': true ? 'orange' : 'black',
    };
  }
}
