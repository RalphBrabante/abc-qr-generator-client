export interface QRCodes {
  id: number,
  range: string;
  generatedByUserId: number;
}

export interface QrResponse {
  status: number;
  data: QRCodes[];
}
