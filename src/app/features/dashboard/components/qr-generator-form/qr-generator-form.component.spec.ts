import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrGeneratorFormComponent } from './qr-generator-form.component';

describe('QrGeneratorFormComponent', () => {
  let component: QrGeneratorFormComponent;
  let fixture: ComponentFixture<QrGeneratorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrGeneratorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrGeneratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
