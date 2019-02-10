import { Component, OnInit } from '@angular/core';
import { FormElement } from './dynamic-forms/form-element';
import { ValidatorFn, FormGroup } from '@angular/forms';

import { DynamicFormsService } from './dynamic-forms/dynamic-forms.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Angular Dynamic Forms';
  myElements: FormElement[] = [];
  myGroup: FormGroup;
  persons: Person[] = [];

  constructor(private formService: DynamicFormsService) { }

  ngOnInit() {

    this.persons.push(<Person>
      {
        Id: 1,
        FirstName: 'Smith',
        LastName: 'Pete',
        Email: 'petesmith@gmail.com'
      }
    );
    this.persons.push(<Person>
      {
        Id: 2,
        FirstName: 'Jones',
        LastName: 'Congo',
        Email: 'pirate@yahoo.com'
      }
    );
    this.persons.push(<Person>
      {
        Id: 3,
        FirstName: 'Boojaroo',
        LastName: 'Harucha',
        Email: 'imso@cool.com'
      }
    );

    let currentPerson = (this.persons.filter(e => +e.Id === 3 )[0]);

    this.myElements['firstName'] = {
      Name: 'firstName',
      DataSource: (currentPerson),
      DataProperty: 'FirstName',
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
      DataSource: (currentPerson),
      DataProperty: 'LastName',
      Label: 'Last Name',
      Tooltip: 'Enter your surname',
      IsRequired: true,
      IsUserEditable: true,
      MaxLength: 15,
      MinValue: 0,
      MaxValue: 0,
      Validators: []
    };
    this.myElements['email'] = {
      Name: 'phone',
      DataSource: (currentPerson),
      DataProperty: 'Email',
      Label: 'E-Mail',
      Tooltip: 'Enter your email address',
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
