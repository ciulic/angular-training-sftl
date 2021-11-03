import { Component, OnInit } from '@angular/core';
import {IntroMessageClassesService} from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  introMessage: string = 'The structural directive does the opposite of NgIf, and condition values can be set to true or false. NgIf displays the template content when the condition is true. Structural directive displays the content when the condition is false.';
  introMessageClasses: string = '';

  condition: boolean = false;

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
  }

}
