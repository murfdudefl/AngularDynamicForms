import { ValidatorFn } from '@angular/forms';

export class FormElement {
    Name: string;
    DataSource: any;
    DataProperty: string;
    Label = '';
    Tooltip = '';
    IsRequired = false;
    IsUserEditable = true;
    MinValue = 0;
    MaxValue = 0;
    MinLength = 0;
    MaxLength = 0;
    Validators: ValidatorFn[] = [];
}
