import { LayoutService } from './../../core/Services/layout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(public layoutService: LayoutService) {
    this.layoutService.init();
  }

  ngOnInit() {
  }

}
