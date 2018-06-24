import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseeditComponent } from './courseedit.component';

describe('CourseeditComponent', () => {
  let component: CourseeditComponent;
  let fixture: ComponentFixture<CourseeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
