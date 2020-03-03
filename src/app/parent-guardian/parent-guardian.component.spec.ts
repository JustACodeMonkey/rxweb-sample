import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuardianComponent } from './parent-guardian.component';

describe('ParentGuardianComponent', () => {
  let component: ParentGuardianComponent;
  let fixture: ComponentFixture<ParentGuardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentGuardianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
