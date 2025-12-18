import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReg } from './admin-reg';

describe('AdminReg', () => {
  let component: AdminReg;
  let fixture: ComponentFixture<AdminReg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
