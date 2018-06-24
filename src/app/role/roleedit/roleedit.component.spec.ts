import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleeditComponent } from './roleedit.component';

describe('RoleeditComponent', () => {
  let component: RoleeditComponent;
  let fixture: ComponentFixture<RoleeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
