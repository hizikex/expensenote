import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'FirstName is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required']
    }
},
{
    timestamps: true
})

const User = model('users', userSchema)

export default User