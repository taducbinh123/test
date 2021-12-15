import { LayoutService, LayoutConfig } from '../../core/Services/layout.service';
import { Component, OnInit, OnDestroy, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ckeConfig: any;
  ContactUsForm: FormGroup;
  contentPostBody = "someText";

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    public layoutService: LayoutService) {
    this.layoutService.init();

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };

  }

  ngOnInit() {


  }

  OpenModal(modalReference, size?) {
    this.modalService.open(
      modalReference, {
        ariaLabelledBy: 'modal-basic-title',
        backdrop: false,
        size: (size) ? size : 'md'
      }
    ).result.then((result) => {
      if (result) {
      }
    });
  }

  //////Post ckEditor//
  onChangePostCk(event): void {
    console.log(event);
  }







}




