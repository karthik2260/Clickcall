import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface VendorDocument extends Document {
     _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  companyName: string;
  city: string;
  contactInfo: string;
  isVerified: boolean;
  refreshToken?: string;
  googleId?: string; 
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}
export interface VendorModel extends Model<VendorDocument> {}

const VendorSchema = new Schema<VendorDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    city: { type: String, required: true },
    contactInfo: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String },
    googleId: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<VendorDocument, VendorModel>(
  "Vendor",
  VendorSchema
);