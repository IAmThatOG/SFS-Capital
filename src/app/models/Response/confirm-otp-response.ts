import { UserData } from '../user-data';

export interface ConfirmOtpResponse {
    data: UserData;
    status: boolean;
    message: string;
}
