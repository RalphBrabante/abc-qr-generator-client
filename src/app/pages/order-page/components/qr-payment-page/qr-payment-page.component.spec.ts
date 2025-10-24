import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPaymentPageComponent } from './qr-payment-page.component';

describe('QrPaymentPageComponent', () => {
  let component: QrPaymentPageComponent;
  let fixture: ComponentFixture<QrPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrPaymentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
