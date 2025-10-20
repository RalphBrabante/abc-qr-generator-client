import {
  Component,
  ElementRef,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { SocketService } from '../../../../core/services/socket.service';
import { QrCodeService } from '../../../../core/services/qr-code.service';
import { BaseComponent } from '../../../../core/common/base-component.directive';
import { takeUntil, tap } from 'rxjs';
import { QRCodes, QrResponse } from '../../../../core/services/qr-response';
import { NumberFormatter } from '../../../../core/common/utils/number-formatter';

@Component({
  selector: 'app-qr-database-table',
  templateUrl: './qr-database-table.component.html',
  styleUrl: './qr-database-table.component.scss',
})
export class QrDatabaseTableComponent extends BaseComponent implements OnInit {
  tableDiv = viewChild<ElementRef>('tableDiv');
  qrCodesData = signal<QRCodes[] | undefined>(undefined);
  errorMessage = signal<string | undefined>(undefined);
  isFetching = signal<boolean>(false);
  forceHideNoDataWarn = signal<boolean>(false);

  constructor(
    private socketSvc: SocketService,
    private qrSvc: QrCodeService,
    private numberFormatter: NumberFormatter
  ) {
    super();
  }

  ngOnInit() {
    // initially get qr codes data from the database
    this.qrSvc
      .getAllQrCodes()
      .pipe(
        tap(() => {
          this.errorMessage.set(undefined);
          this.isFetching.set(true);
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe({
        next: (resp) => {
          this.qrCodesData.set(resp.data);
          this.isFetching.set(false);
        },
        error: (err) => {
          localStorage.removeItem('auth_token');

          if (err.error.status === 401) {
            this.errorMessage.set('Unauthorized request.');
          }

          this.isFetching.set(false);
        },
      });

    // socket listeners
    this.socketSvc.on('qrCodeGenerating', (data) => {
      this.forceHideNoDataWarn.set(true);
      setTimeout(() => {
        let tr = document.createElement('tr');

        // Create first td
        let td1 = document.createElement('td');
        td1.innerText = `${this.numberFormatter.generateWithLeadingZeroes(
          data.data.from,
          6,
          'ABC2025'
        )} - ${this.numberFormatter.generateWithLeadingZeroes(
          data.data.to,
          6,
          'ABC2025'
        )}`;
        tr.appendChild(td1);

        // Create last td with span badge
        let td3 = document.createElement('td');
        td3.classList.add('text-end');

        let span = document.createElement('span');
        span.classList.add('badge', 'text-bg-warning');
        span.id = `span-${data.id}`;
        span.innerText = 'Generating';

        td3.appendChild(span);
        tr.appendChild(td3);

        // 🔁 Prepend the entire <tr> to the table container
        this.tableDiv()?.nativeElement.prepend(tr);
      }, 500);
    });

    this.socketSvc.on('qrCodeGenerated', (data) => {
      setTimeout(() => {
        const span = document.getElementById(`span-${data.id}`);
        console.log(span);
        span?.classList.remove('text-bg-warning');
        span?.classList.add('text-bg-success');
        if (span) {
          span.innerText = 'Generated';
        }
      }, 500);
    });
  }
}
