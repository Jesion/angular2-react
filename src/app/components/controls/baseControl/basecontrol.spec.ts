import {TestBed} from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BaseControlComponent} from './basecontrol.component';

describe('basecontrol component', () => {

  let component;
  var componentInst: BaseControlComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        BaseControlComponent
      ],
      providers: [
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    component = TestBed.createComponent(BaseControlComponent);
    componentInst = component.componentInstance;
  });

  it('base control should generate masked value if mask provided', (done) => {
    component.whenStable().then(() => {
      component.detectChanges();
      componentInst.restrict = 'numeric';
      componentInst.mask = '__-___';
      componentInst.value = '20200';
      expect(componentInst.getMaskedValue()).not.toBeNull();
      expect(componentInst.getMaskedValue()).toEqual('20-200');
      done();
    });
  });
});
