import { Component, OnInit } from '@angular/core';
import { IntroMessageClassesService } from "../../../../intro-message-classes.service";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [IntroMessageClassesService]
})
export class PipesComponent implements OnInit {
  introMessageClasses = '';

  constructor(public introMessageClassesService: IntroMessageClassesService) {
    this.introMessageClasses = introMessageClassesService.introMessageClasses;
  }

  ngOnInit(): void {
  }

  datePipe = new Date();
  upperCasePipe: string = 'this is the upper case';
  lowerCasePipe: string = 'THIS IS THE LOWER CASE';
  pricePipe: number = 199.99;
  decimalPipe: number = 1.992349234;
  percentPipe1: number = 0.259;
  percentPipe2: number = 1.3495;
}
