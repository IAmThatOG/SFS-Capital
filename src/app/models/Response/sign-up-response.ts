// import { BaseResponse } from './base-response';

export interface SignUpResponse {
  data: { otpRef: string };
  status: boolean;
  message: string;
}
// export class SignUpResponse {
//   private otpRef: string;

//   constructor() {
//   }

//   public get OtpRef(): any {
//     return this.otpRef;
//   }
//   public set OtpRef(v: any) {
//     this.otpRef = v;
//   }
// }
