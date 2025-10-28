import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../../app.config';
import { PaymongoPaymentIntentResponse } from './paymongoPaymentIntentResponse';
import { Observable } from 'rxjs';
import { CreateOrder, OrderRequest } from './createOrderInterface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getPaymentIntent(
    paymentIntentId: string
  ): Observable<PaymongoPaymentIntentResponse> {
    return this.http.get<PaymongoPaymentIntentResponse>(
      `${baseURL}/payments/${paymentIntentId}`
    );
  }

  createOrder(orderDetails:OrderRequest): Observable<CreateOrder> {
    return this.http.post<CreateOrder>(`${baseURL}/orders`, orderDetails);
  }
}
