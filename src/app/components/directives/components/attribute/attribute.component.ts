import { Component, OnInit } from '@angular/core';
import {IntroMessageClassesService} from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css'],
})
export class AttributeComponent implements OnInit {
  introMessage: string = 'Change the appearance or behavior of DOM elements and Angular components with attribute directives.';
  introMessageClasses: string = '';
  color1: string = 'yellow';
  color2: string = 'red';

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
  }

}
