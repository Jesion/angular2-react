import {Component, forwardRef, Input, AfterViewInit, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, Validators} from '@angular/forms';
import {MaskPart, Mask, Restrict} from './basecontrol.mask';

const noop = () => {

};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BaseControlComponent),
  multi: true
};

@Component({
  selector: 'base-control',
  templateUrl: 'app/components/controls/baseControl/basecontrol.component.html',
  styleUrls: ['app/components/controls/baseControl/basecontrol.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class BaseControlComponent implements ControlValueAccessor, OnInit {

  public maxLen: number = -1;

  protected _restrict: string = Restrict.NONE;

  protected _required: boolean = false;

  protected _baseCtrl: FormControl;

  private innerValue: any = '';

  private _maskedValue: string = '';

  private set maskedValue(value: string) {
    if (this._maskedValue !== value) {
      this._maskedValue = value;
      this._baseCtrl.setValue( this.maskedValue );
    }
  }

  private get maskedValue(): string {
    return this._maskedValue;
  }

  private onTouchedCallback: () => void = noop;

  private onChangeCallback: (_: any) => void = noop;

  private innerMask: Mask;

  private _separator: string = '-';

  public getMaskedValue() {
    return this.maskedValue;
  }

  @Input()
  public set restrict(value: string) {
    let opts: Array<string> = Restrict.ALL;
    let supported: boolean = false;
    for (let opt of opts) {
      if (opt === value) {
        supported = true;
      }
    }
    if (supported) {
      this._restrict = value;
    }
  }

  @Input()
  public set separator(value: string) {
    this._separator = value;
  }

  @Input()
  public set mask(value: string) {
    this.maxLen = value.length;
    let parts: Array<string> = value.split(this._separator);
    let count: number = 0;
    let _parts: Array<MaskPart> = [];
    for (var _i = 0; _i < parts.length; _i++) {
      let s: number = count;
      let e: number = s + parts[_i].length;
      _parts.push(new MaskPart(_i, parts[_i].length, s, e));
      count = count + parts[_i].length;
    }
    this.innerMask = new Mask(_parts, value);
  }

  @Input()
  public set required(value: boolean) {
    if (this._required !== value) {
      this._required = value;
      this.setRequiredValidator();
    }
  }

  @Input()
  public pattern: string;

  constructor() {

    this._baseCtrl = new FormControl('');
  }

  ngOnInit() {
    this.setValidators();
  }

  get value(): any {
    return this.innerValue;
  };

  get baseCtrl(): FormControl {
    return this._baseCtrl;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      let raw = this.removeSeparator(v);
      this.maskedValue = this.doMask(raw);
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  onKeyPress($event: KeyboardEvent) {
    if (this._restrict) {
      if (this._restrict !== Restrict.NONE) {
        var regex = Restrict.getRegExp(this._restrict);
        var key = String.fromCharCode(!$event.charCode ? $event.which : $event.charCode);
        if (!regex.test(key)) {
          event.preventDefault();
          return false;
        }
      }
    }
    return true;
  }

  onKeyUp($event: KeyboardEvent) {
    $event.stopPropagation();
    let newValue = ($event.target as any).value;
    let raw = this.removeSeparator(newValue);
    this.innerValue = raw;
    this.maskedValue = this.doMask(raw);
    this.onChangeCallback(raw);
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.maskedValue = this.doMask(value);
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  doMask(v: any) {
    if (this.innerMask != null) {
      if (v && this.innerMask && this.innerMask.parts.length > 0) {
        if (v.length > this.innerMask.parts[0].length) {
          let masked: string = '';
          for (var _i = 0; _i < this.innerMask.parts.length; _i++) {
            let partValue: string = v.substr(
              this.innerMask.parts[_i].start,
              this.innerMask.parts[_i].length);
            if (_i === 0) {
              masked = partValue;
            } else {
              masked = masked + this._separator + partValue;
            }
          }
          while (masked.slice(-1) === this._separator) {
            masked = masked.substr(0, masked.length - 1);
          }
          return masked;
        } else {
          return v;
        }
      }
    }
    return v;
  }

  protected setValidators() {
    this._baseCtrl.setValidators(this.getBaseValidators());
  }

  protected getBaseValidators():Array<any> {
    let validators: Array<any> = [];
    if (this._required === true) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    if (this.maxLen > -1) {
      validators.push(Validators.maxLength(this.maxLen));
    }
    return validators;
  }

  private removeSeparator(value: string) {
    if (this.innerMask != null) {
      let separatorRegExp: RegExp = new RegExp(this._separator, 'g');
      return value.replace(separatorRegExp, '');
    } else {
      return value;
    }
  }

  private setRequiredValidator() {
    this.setValidators();
    this._baseCtrl.updateValueAndValidity();
  }
}

