import { LayoutService, LayoutConfig } from '../../core/Services/layout.service';
import { Component, OnInit, OnDestroy, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frontend-layout',
  templateUrl: './frontend-layout.component.html',
  styleUrls: ['./frontend-layout.component.scss']
})
export class FrontendLayoutComponent implements OnInit {

  isNavbarCollapsed = true;
  delponeImageUrl = '../../../assets/background/accounts.jpg';
  lastDisplacement: number = null;
  navBarState = 'normal';


  ContactUsForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    public layoutService: LayoutService) {
    this.layoutService.init();
  }

  ngOnInit() {

  }







}




