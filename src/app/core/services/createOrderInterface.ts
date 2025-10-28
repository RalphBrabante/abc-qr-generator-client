export interface CreateOrder {
  data: {
    id: string;
    type: 'payment_intent';
    attributes: {
      amount: number;
      capture_type: 'automatic' | 'manual';
      client_key: string;
      currency: 'PHP';
      description: string | null;
      livemode: boolean;
      original_amount: number;
      statement_descriptor: string;
      status:
        | 'awaiting_payment_method'
        | 'awaiting_next_action'
        | 'processing'
        | 'succeeded'
        | 'failed'
        | 'canceled';
      last_payment_error: any | null;
      payment_method_allowed: Array<'card' | 'gcash' | 'paymaya' | 'qrph'>;
      payments: any[];
      next_action: NextAction | null;
      payment_method_options: PaymentMethodOptions;
      metadata: Record<string, any> | null;
      setup_future_usage: string | null;
      created_at: number;
      updated_at: number;
    };
  };
}

export interface NextAction {
  type: 'redirect' | string;
  redirect: {
    url: string;
    return_url: string;
  };
}

export interface PaymentMethodOptions {
  card?: {
    request_three_d_secure: 'any' | 'automatic' | 'required';
  };
}


export interface OrderRequest {
  qrDetails: QRDetails;
  paymentDetails: PaymentDetails;
}

export interface QRDetails {
  qrPrefix: string;
  numberOfLeadingZeroes: number;
  rangeFrom: number;
  rangeTo: number;
}

export interface PaymentDetails {
  country: string;
  paymentMethod: 'card' | 'gcash' | 'paymaya' | 'qrph';
  fullName: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  stateProvince: string | null;
  zipPostal: string;
  phoneNumber: string;
  emailAddress: string;

  // ✅ Optional card fields
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  nameOnCard?: string;
}
