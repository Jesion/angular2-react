import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DateValidators } from '../../validator/date';

@Component({
	selector: 'my-form',
	templateUrl: 'app/components/form/form.component.html',
	styleUrls: ['app/components/form/form.component.css']
})
export class FormComponent {

	public form: FormGroup;

	constructor( fb: FormBuilder ) {

		let dateControl: FormControl = new FormControl('11-05-1979', [ DateValidators.notInFuture(20) ]);

		this.form = fb.group( {
			'someDate': dateControl
		})
	}

	public onSubmit(value: any) {
		console.log('Submit handler: ' + value);
	}
}
