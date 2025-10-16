import mongoose, {Schema,Document,Model} from "mongoose";
import { User } from "../interfaces/commoninterfaces";



export interface UserDocument extends User, Document {
    _id: mongoose.Types.ObjectId
}


export interface UserModel extends Model<UserDocument> {

}


const UserSchema = new Schema<UserDocument, UserModel>({
    email: { type: String, required: true, unique: true},
    password: {
        type: String,
        required: function () {
            return !this.isGoogleUser
        }
    },

    name: {type: String,required: true},
    googleId: {type: String},
    isActive: {type: Boolean,default:true},
    imageUrl: {type: String},
    isGoogleUser: {type: Boolean, default: false },
    refreshToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },

}, {timestamps: true})

export default mongoose.model<UserDocument,UserModel>('User',UserSchema)