import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
    firstName :{
        type: String,
        required: true
    } ,
    lastName:{
        type: String,
        required: true
    } ,
    age:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('User', UserSchema)

