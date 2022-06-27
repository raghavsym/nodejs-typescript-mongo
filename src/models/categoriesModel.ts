import mongoose, { Schema } from 'mongoose';

const CategorySchema: Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    parent:{
        type:String,
        required:true
    },
    category: { 
        type : String, 
        required: true
    },
    created:{
        type:Date,
        required:false
    }
},{timestamps: true});
  
export default mongoose.model('categories', CategorySchema);