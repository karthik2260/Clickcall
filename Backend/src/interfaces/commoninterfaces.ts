    import mongoose, {Document,Schema,Model} from "mongoose";


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