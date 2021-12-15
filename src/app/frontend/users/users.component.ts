import { LayoutService } from './../../core/Services/layout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public layoutService: LayoutService) {
    this.layoutService.init();
    this.layoutService.hideFooter();

  }

  ngOnInit() {
  }

}
