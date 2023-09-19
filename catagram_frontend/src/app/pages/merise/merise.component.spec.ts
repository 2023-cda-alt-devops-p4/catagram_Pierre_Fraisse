import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriseComponent } from './merise.component';

describe('MeriseComponent', () => {
  let component: MeriseComponent;
  let fixture: ComponentFixture<MeriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeriseComponent]
    });
    fixture = TestBed.createComponent(MeriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
