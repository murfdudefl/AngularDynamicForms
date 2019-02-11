import { Injectable } from '@angular/core';
import { FormElement } from './form-element';
import { FormGroup, FormControl, ValidatorFn, Validators, FormArray } from '@angular/forms';
import { Person } from '../person';
import { log } from 'util';

@Injectable({
    providedIn: 'root'
})
export class DynamicFormsService {

    // persons: Person[];

    constructor() { }

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

    buildFormGroup(elements: FormElement[], includedElements: string[]): FormGroup {
        const group = new FormGroup({});
        const validators: ValidatorFn[] = [];
        elements.forEach(e => {
            if (includedElements == null || +includedElements.indexOf(e.Name) !== -1) {
                if (e.IsRequired) {
                    validators.push(Validators.required);
                }
                if (+e.MinValue !== 0) {
                    validators.push(Validators.min(e.MinValue));
                }
                if (+e.MaxValue !== 0) {
                    validators.push(Validators.max(e.MaxValue));
                }
                if (+e.MinLength !== 0) {
                    validators.push(Validators.minLength(e.MinLength));
                }
                if (+e.MaxLength !== 0) {
                    validators.push(Validators.maxLength(e.MaxLength));
                }
                e.Validators.forEach(val => {
                    validators.push(val);
                });
                group.addControl(e.Name, new FormControl(e.DataSource[e.DataProperty], validators));
            }
        });
        return group;
    }
}
