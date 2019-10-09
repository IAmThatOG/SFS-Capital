export interface ErrorResponse {
  data: [{
    field: string,
    message: string
  }];
  status: boolean;
  message: string;
}
