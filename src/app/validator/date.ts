import { AbstractControl, ValidatorFn } from '@angular/forms';

function isEmptyInputValue(value: any) {
  return value == null || typeof value === 'string' && value.length === 0;
}

export class DateValidators {

  static notInFuture(minLength: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const length: number = control.value ? control.value.length : 0;
      return length < minLength ?
          {'minlength': {'requiredLength': minLength, 'actualLength': length}} :
          null;
    };
  }
}