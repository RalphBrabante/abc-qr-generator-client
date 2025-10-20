import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../app.config';
import { QrResponse } from './qr-response';

@Injectable({
  providedIn: 'root',
})
export class QrCodeService {
  constructor(private http: HttpClient) {}

  generateQrCode(start: number, end: number) {
    return this.http.post(baseURL + '/qr/generate/ABC2025?withText=true', {
      from: start,
      to: end,
    }) as Observable<any>;
  }

  getAllQrCodes() {
    return this.http.get(baseURL + '/qr') as Observable<QrResponse>;
  }
}
