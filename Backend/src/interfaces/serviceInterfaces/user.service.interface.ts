import { GoogleUserData, ILoginResponse, User } from "../commoninterfaces";

export interface IUserService {
   
    signup(email: string, password: string, name: string, contactinfo: string): Promise<User>; 
    login(email: string, password: string): Promise<ILoginResponse>;

    // JWT Management
    create_RefreshToken(refreshToken: string): Promise<string>;
    validateToken(token: string): Promise<boolean>;

    // Google Authentication
    googleSignup({ email, name, googleId }: GoogleUserData): Promise<object>;
    authenticateGoogleLogin(userData: GoogleUserData): Promise<ILoginResponse>;

    // Forgot Password
    handleForgotPassword(email: string): Promise<void>;
    newPasswordChange(token: string, password: string): Promise<void>;
}
