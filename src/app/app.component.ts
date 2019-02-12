import { Component, OnInit } from '@angular/core';
import { FormElement } from './dynamic-forms/form-element';
import { ValidatorFn, FormGroup, ReactiveFormsModule , FormsModule } from '@angular/forms';

import { DynamicFormsService } from './dynamic-forms/dynamic-forms.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Dynamic Forms';
  myElements: FormElement[] = [];
  myGroup: FormGroup;
  persons: Person[] = [];
  currentPerson: Person;

  constructor(private formService: DynamicFormsService) { }

  onSubmit() {
    console.log(this.myGroup.value);
    if (this.myGroup.valid) {
      console.log('Submitted');
    } else {
      this.myGroup.errors.forEach(e => {
        console.log(e);
      });
    }
  }

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

    this.currentPerson = (this.persons.filter(e => +e.Id === 3 )[0]);
    console.log(this.currentPerson['LastName']);

    this.myElements.push(<FormElement>
      {
      Name: 'firstName',
      DataSource: this.currentPerson,
      DataProperty: 'FirstName',
      Label: 'First Name',
      Tooltip: 'Enter your given name',
      IsRequired: true,
      IsUserEditable: true,
      MaxLength: 10,
      MinValue: 0,
      MaxValue: 0,
      Validators: []
      }
    );
    this.myElements.push(<FormElement>
      {
      Name: 'email',
      DataSource: this.currentPerson,
      DataProperty: 'Email',
      Label: 'E-Mail',
      Tooltip: 'Enter your email address',
      IsRequired: false,
      IsUserEditable: true,
      MaxLength: 25,
      MinValue: 0,
      MaxValue: 0,
      Validators: []
    });
    this.myElements.push(<FormElement>
      {
      Name: 'lastName',
      DataSource: this.currentPerson,
      DataProperty: 'LastName',
      Label: 'Last Name',
      Tooltip: 'Enter your surname',
      IsRequired: true,
      IsUserEditable: true,
      MaxLength: 15,
      MinValue: 0,
      MaxValue: 0,
      Validators: []
    });
    this.myGroup = this.formService.buildFormGroup(this.myElements);
    console.log(this.myGroup);
  }

  isFieldValid(field: string) {
    // const isValid = this.myGroup.get(field).valid || !this.myGroup.get(field).touched;
    const isValid = this.myGroup.get(field).valid;
    return isValid;
  }

}
