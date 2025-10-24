import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRDetailsComponent } from './qrdetails.component';

describe('QRDetailsComponent', () => {
  let component: QRDetailsComponent;
  let fixture: ComponentFixture<QRDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QRDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QRDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
