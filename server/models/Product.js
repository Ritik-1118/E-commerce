import mongoose from 'mongoose';

const productSchema = new mongoose.Schema( {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand:{type:String, required:true},
    category: { type: String, required: true },
    image: { type: String },
    stock: { type: Number, default: 0 }
}, { timestamps: true } );

export default mongoose.model( 'Product', productSchema );
