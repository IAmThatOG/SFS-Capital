import { UserData } from '../user-data';

export interface AuthResponse {
    data: UserData;
    status: boolean;
    message: string;
}
