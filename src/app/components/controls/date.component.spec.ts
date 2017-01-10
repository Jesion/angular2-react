import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';
import {DateControlComponent} from './date.component';
import {By} from '@angular/platform-browser';

describe('date component', () => {

  let comp: DateControlComponent;
  let fixture: ComponentFixture<DateControlComponent>;
  let de: DebugElement;
  let el: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        DateControlComponent
      ]
    });
    fixture = TestBed.createComponent(DateControlComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('input'));
    el = de.nativeElement;
  });

  it('should render formatted date', () => {
    comp.value = '20120101';
    fixture.detectChanges();
    expect(el.value).toEqual('2012-01-01');
  });
});
