import mongoose from "mongoose";
import { UserDocument } from "../../models/user.model";

export interface IUserRepository {
    findByEmail(email: string): Promise<UserDocument | null>; 
    create(data: Partial<UserDocument>): Promise<UserDocument>;
    getById(id: string): Promise<UserDocument | null>; 
    findByToken(resetPasswordToken: string): Promise<UserDocument | null>; 
    clearResetToken(userId: mongoose.Types.ObjectId): Promise<void>; 
    updatePasswordAndClearToken(userId: mongoose.Types.ObjectId, hashedPassword: string): Promise<boolean>; 
    updatePassword(userId: mongoose.Types.ObjectId, hashedPassword: string): Promise<boolean>; 
}
