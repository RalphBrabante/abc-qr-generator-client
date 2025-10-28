export interface PaymongoPaymentIntentResponse {
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
        | 'processing'
        | 'succeeded'
        | 'failed'
        | 'canceled';
      last_payment_error: any | null;
      payment_method_allowed: string[];
      payments: any[];
      next_action: any | null;
      payment_method_options: {
        card: {
          request_three_d_secure: 'any' | 'automatic' | 'required';
        };
      };
      metadata: Record<string, any> | null;
      setup_future_usage: string | null;
      created_at: number;
      updated_at: number;
    };
  };
}
