import { Injectable } from '@angular/core';
import { FormElement } from './form-element';
import { FormGroup, FormControl, ValidatorFn, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {

    constructor() {}

    buildFormGroup(elements: {[name: string]: FormElement}): FormGroup {
        const group = new FormGroup({});
        // elements.forEach(element => {
        //     element.Validators = this.buildValidators(element);
        //     group.addControl(element.Name, new FormControl(null, element));
        // });
        return group;
    }

    buildValidators(formElement: FormElement): ValidatorFn[] {
        const validators: ValidatorFn[] = [];
        if (formElement.IsRequired) {
            validators.push(Validators.required);
        }
        if (+formElement.MinValue !== 0) {
            validators.push(Validators.min(formElement.MinValue));
        }
        if (+formElement.MaxValue !== 0) {
            validators.push(Validators.max(formElement.MaxValue));
        }
        if (+formElement.MaxLength !== 0) {
            validators.push(Validators.maxLength(formElement.MaxLength));
        }
        formElement.Validators.forEach(element => {
            validators.push(element);
        });
        return validators;
    }
}
