import { AbstractControl, ValidatorFn } from '@angular/forms';
import moment from 'moment';

export class DateValidators {

	static notInFuture(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			let date: any = moment(control.value, 'YYYY-MM-DD');
			let isValid: boolean = date.isValid();
			let isInFuture: boolean = false;
			if (isValid === true) {
				isInFuture = date.isAfter(moment.now());
			}
			console.log('Validating date, input: ' + control.value + ' isValid: ' + isValid + ' isInFuture: ' + isInFuture);
			if (isValid === true && isInFuture === false) {
				return null;
			}
			return { 'inFuture': isInFuture, 'isValid': isValid };
		};
	}
}