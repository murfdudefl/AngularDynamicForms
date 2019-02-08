import { ValidatorFn } from '@angular/forms';

export class FormElement {
    Name: string;
    Label = '';
    Tooltip = '';
    IsRequired = false;
    IsUserEditable = true;
    MinValue = 0;
    MaxValue = 0;
    MaxLength = 0;
    Validators: ValidatorFn[] = [];
}
