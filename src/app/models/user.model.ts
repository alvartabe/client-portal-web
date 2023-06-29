export interface UserModel {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    enabled: boolean;
    accountLocked: boolean;
    accountExpired: boolean;
}
