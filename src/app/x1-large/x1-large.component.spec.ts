import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X1LargeComponent } from './x1-large.component';

describe('X1LargeComponent', () => {
  let component: X1LargeComponent;
  let fixture: ComponentFixture<X1LargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [X1LargeComponent]
    });
    fixture = TestBed.createComponent(X1LargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
