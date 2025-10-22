import mongoose from "mongoose";
import { VendorDocument } from "../../models/vendor.model";

export interface IVendorRepository {
    findByEmail(email: string): Promise<VendorDocument | null>; 
    create(data: Partial<VendorDocument>): Promise<VendorDocument>; 
    getById(id: string): Promise<VendorDocument | null>; 
    findByToken(resetPasswordToken: string): Promise<VendorDocument | null>; 
    clearResetToken(vendorId: mongoose.Types.ObjectId): Promise<void>; 
    updatePasswordAndClearToken(vendorId: mongoose.Types.ObjectId, hashedPassword: string): Promise<boolean>; 
    updatePassword(vendorId: mongoose.Types.ObjectId, hashedPassword: string): Promise<boolean>;
}
