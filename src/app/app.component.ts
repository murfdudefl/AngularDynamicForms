import { Component, OnInit } from '@angular/core';
import { FormElement } from './dynamic-forms/form-element';
import { ValidatorFn, FormGroup } from '@angular/forms';

import { DynamicFormsService } from './dynamic-forms/dynamic-forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Angular Dynamic Forms';
  myElements: { [name: string]: FormElement } = {};
  myGroup: FormGroup;

  constructor(private formService: DynamicFormsService) { }

  ngOnInit() {
    this.myElements['firstName'] = {
      Name: 'firstName',
      Label: 'First Name',
      Tooltip: 'Enter your given name',
      IsRequired: true,
      IsUserEditable: true,
      MaxLength: 10,
      MinValue: 0,
      MaxValue: 0,
      Validators: []
    };
    this.myElements['lastName'] = {
      Name: 'lastName',
      Label: 'Last Name',
      Tooltip: 'Enter your surname',
      IsRequired: true,
      IsUserEditable: true,
      MaxLength: 15,
      MinValue: 0,
      MaxValue: 0,
      Validators: []
    };
    this.myElements['phone'] = {
      Name: 'phone',
      Label: 'Phone',
      Tooltip: 'Enter your primary phone number',
      IsRequired: false,
      IsUserEditable: true,
      MaxLength: 12,
      MinValue: 0,
      MaxValue: 0,
      Validators: []
    };
    this.myGroup = this.formService.buildFormGroup(this.myElements);
  }

}
