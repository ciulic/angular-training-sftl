import { Component, OnInit } from '@angular/core';
import { IntroMessageClassesService } from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-template-statements',
  templateUrl: './template-statements.component.html',
  styleUrls: ['./template-statements.component.css']
})
export class TemplateStatementsComponent implements OnInit {

  introMessage = 'Template statements are methods or properties that you can use in your HTML to respond to user events. With template statements, your application can engage users through actions such as displaying dynamic content or submitting forms.';
  clickedNr = 0;
  introMessageClasses = '';

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.clickedNr = this.clickedNr + 1;
  }

}
