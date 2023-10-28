import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEnterpriseComponent } from './for-enterprise.component';

describe('ForEnterpriseComponent', () => {
  let component: ForEnterpriseComponent;
  let fixture: ComponentFixture<ForEnterpriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForEnterpriseComponent]
    });
    fixture = TestBed.createComponent(ForEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
