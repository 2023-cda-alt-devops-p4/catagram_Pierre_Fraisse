import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlComponent } from './uml.component';

describe('UmlComponent', () => {
  let component: UmlComponent;
  let fixture: ComponentFixture<UmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmlComponent]
    });
    fixture = TestBed.createComponent(UmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
