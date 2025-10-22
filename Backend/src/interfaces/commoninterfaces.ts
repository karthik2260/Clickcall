import mongoose, {Document,Schema,Model} from "mongoose";
import { UserDocument } from "../models/user.model";


// This is for user interface 


    export interface User {
      name: string;
      email: string;
      password?: string;
      googleId?: string;
      isActive: boolean;
      isGoogleUser: boolean;
      imageUrl?: string;
      refreshToken?: string;
      resetPasswordToken?: string;
      resetPasswordExpires?: Date;

    }


// This is for google authentication interface

    export interface IDecodeData {
      name: string;
      email: string;
      picture?: string;
      sub: string;
    }


   export interface GoogleUserData {
    email: string;
    name: string;
    googleId: string;
    picture?: string;

   }



// This is for Login Response interface


export interface ILoginResponse {
    user: UserDocument;
    message: string
    isNewUser: boolean;
    token: string;
    refreshToken: string;
}



// This is for OTP session for (signup and forgot password )


export interface IUserSession {
    email: string;
    password: string;
    name: string;
    contactinfo: string;
    otpCode: string;
    otpSetTimestamp: number;
    otpExpiry: number;
    resendTimer: number;
}

export interface OTP {
    otp: string | undefined;
    email: string;
    otpSetTimestamp: number | undefined;
}


// This is for vendor interface 

export interface Vendor {
    email: string;
    password?: string;
    name: string;
    companyName: string;
    city: string;
    about: string;
    contactinfo: string;
    isActive: boolean;
    isVerified: boolean;
    isAccepted: string; 
    imageUrl: string;
    refreshToken: string;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
}


// This is for vendor login 

export interface IVendorLoginResponse {
    vendor: object;
    message: string;
    isNewVendor: boolean;
    token: string;
    refreshToken: string;
}


// This is for vendor session for signup otp



export interface VendorSession {
    otpSetTimestamp: number | undefined;
    email: string;
    password: string;
    name: string;
    city: string;
    contactinfo: string;
    companyName: string;
    about: string;
    otpCode: string | undefined;
    otpExpiry: number;
    resendTimer: number;
}



// Admin login response

export interface AdminLoginResponse {
    token: string;
    refreshToken: string;
    adminData: object;
    message: string;
}