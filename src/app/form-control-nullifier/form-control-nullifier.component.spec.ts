import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlNullifierComponent } from './form-control-nullifier.component';

describe('FormControlNullifierComponent', () => {
  let component: FormControlNullifierComponent;
  let fixture: ComponentFixture<FormControlNullifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlNullifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlNullifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
