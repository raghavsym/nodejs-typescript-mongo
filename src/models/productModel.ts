import mongoose, { Schema } from 'mongoose';

const ProductSchema: Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:false // For version control
    },
    categories: { 
        type : Array , 
        "default" : [],
        required: true
    },
    created:{
        type:Date,
        required:false
    }
},{timestamps: true});
  
export default mongoose.model('product', ProductSchema);