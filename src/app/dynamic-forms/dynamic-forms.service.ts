import { Injectable } from '@angular/core';
import { FormElement } from './form-element';
import { FormGroup, FormControl, ValidatorFn, Validators, FormArray } from '@angular/forms';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {

    // persons: Person[];

    constructor() {}

    // testMethod() {
    //     this.persons.push(<Person>
    //         {
    //           Id: 1,
    //           FirstName: 'Smith',
    //           LastName: 'Pete',
    //           Email: 'petesmith@gmail.com'
    //         }
    //       );
    // }

    buildFormGroup(elements: FormElement[]): FormGroup {
        const group = new FormGroup({});
        const validators: ValidatorFn[] = [];
        elements.forEach(e => {
            if (e.IsRequired) {
                validators.push(Validators.required);
            }
            if (+e.MinValue !== 0) {
                validators.push(Validators.min(e.MinValue));
            }
            if (+e.MaxValue !== 0) {
                validators.push(Validators.max(e.MaxValue));
            }
            if (+e.MaxLength !== 0) {
                validators.push(Validators.maxLength(e.MaxLength));
            }
            e.Validators.forEach(val => {
                validators.push(val);
            });
            group.addControl(e.Name, new FormControl(e.DataSource[e.DataProperty], validators));
        });
        return group;
    }

    // buildValidators(formElement: FormElement): ValidatorFn[] {
    //     const validators: ValidatorFn[] = [];
    //     if (formElement.IsRequired) {
    //         validators.push(Validators.required);
    //     }
    //     if (+formElement.MinValue !== 0) {
    //         validators.push(Validators.min(formElement.MinValue));
    //     }
    //     if (+formElement.MaxValue !== 0) {
    //         validators.push(Validators.max(formElement.MaxValue));
    //     }
    //     if (+formElement.MaxLength !== 0) {
    //         validators.push(Validators.maxLength(formElement.MaxLength));
    //     }
    //     formElement.Validators.forEach(element => {
    //         validators.push(element);
    //     });
    //     return validators;
    // }
}
