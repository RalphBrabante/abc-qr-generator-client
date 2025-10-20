import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrDatabaseTableComponent } from './qr-database-table.component';

describe('QrDatabaseTableComponent', () => {
  let component: QrDatabaseTableComponent;
  let fixture: ComponentFixture<QrDatabaseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrDatabaseTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrDatabaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
