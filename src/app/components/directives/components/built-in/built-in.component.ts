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

  currentItem: Record<string, string> = {
    name: ''
  };

  currentCustomer: string = 'customer name is available';
  emptyCurrentCustomer: string = '';

  nextId = 3;
  items = [{
    id: 1,
    name: 'item1',
    value: new Date(),
  },{
    id: 2,
    name: 'item2',
    value: new Date(),
  }, {
    id: 3,
    name: 'item3',
    value: new Date()
  }];

  feature: string = 'case1';

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

  trackByItems(index: number, item: any) {
    return item.id;
  }

  onAddItem() {
    this.nextId = this.nextId + 1;
    const item = {
      id: this.nextId,
      name: 'item3',
      value: new Date(),
    };
    this.items.push(item);
  }

  onUpdateItem(itemId: number) {
    const itemIndex = this.items.findIndex(({ id }) => id === itemId);
    if (itemIndex >= 0) {
      this.items[itemIndex].value = new Date();
    }
  }

  onChangeItems() {
    const lastItem = this.items[this.items.length -1 ];
    this.items = [{
      id: 1,
      name: 'new item',
      value: new Date(),
    }];
    this.items.push(lastItem);
  }
}
