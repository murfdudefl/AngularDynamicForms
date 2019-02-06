import { ValidatorFn } from '@angular/forms';

export class FormElement {
    Name: string;
    Label: string;
    Tooltip: string;
    IsRequired: boolean;
    MinValue: number;
    MaxValue: number;
    MaxLength: number;
    Validators: ValidatorFn[];
}
