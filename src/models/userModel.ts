import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address: { 
        type : String , 
        "default" : '',
        required: false
    }
}, {timestamps: true});
  
export default mongoose.model('user', UserSchema);