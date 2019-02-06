import { FormElement } from './form-element';
import { FormGroup, FormControl } from '@angular/forms';

export class DynamicFormsBuilder {

    formElements: FormElement[];
    formGroup: FormGroup;

    constructor(elements: FormElement[]) {
        this.formElements = elements;
    }

    buildForm(dataElements: any, elementKey: string): FormGroup {
        const group = new FormGroup({});
        this.formElements.forEach(element => {
            group.addControl(element.Name,new FormControl(dataelements))
        });
    }
}