import { Component, OnInit } from '@angular/core';
import { LogService } from "../../log.service";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(public logService: LogService) {
    this.logService.say('TemplatesComponent');
  }

  ngOnInit(): void {
  }

}
