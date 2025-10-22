import mongoose, { Document, Schema, model } from "mongoose";

export interface AdminDocument extends Document {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    refreshToken?: string; 
}

const adminSchema = new Schema<AdminDocument>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        refreshToken: { type: String },
    },
    { timestamps: true }
);

export default model<AdminDocument>("Admin", adminSchema);
