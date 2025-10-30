export interface ErrorMessage {
  errors?: Errors[];
}

interface Errors {
  code?: string;
  detail?: string;
  source?: Source;
}

interface Source {
  pointer?: string;
  attribute?: string;
}
