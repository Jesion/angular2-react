import {AbstractControl, ValidatorFn} from '@angular/forms';
import moment from 'moment';

function isEmptyInputValue(value: any) {
  return value == null || typeof value === 'string' && value.length === 0;
}

export class DateValidators {

  static notInFuture(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;
      }
      let date: any = moment(control.value, 'YYYY-MM-DD', true);
      let isValid: boolean = date.isValid();
      let isInFuture: boolean = false;
      if (isValid === true) {
        isInFuture = date.isAfter(moment.now());
        if (isInFuture === false) {
          return null;
        }
      }
      return {'inFuture': isInFuture, 'isValid': !isValid};
    };
  }
}
