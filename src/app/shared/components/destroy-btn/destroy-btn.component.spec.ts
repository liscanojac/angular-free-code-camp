import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyBtnComponent } from './destroy-btn.component';

describe('DestroyBtnComponent', () => {
  let component: DestroyBtnComponent;
  let fixture: ComponentFixture<DestroyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestroyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
