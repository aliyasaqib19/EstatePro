import { Schema, model, models } from 'mongoose';

// we use google auth so we dont need to store password
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'Email already exists'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    image: String,
    bookmarks: [
        { type: Schema.Types.ObjectId, 
            ref: 'Property' 
        }
    ]
}, { timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;