import Order from '../models/Order.js';

// Create a new order
export const createOrder = async ( req, res ) => {
    try {
        const order = new Order( req.body );
        await order.save();
        res.status( 201 ).json( order );
    } catch ( error ) {
        res.status( 400 ).json( { message: error.message } );
    }
};

// Get order by ID
export const getOrderById = async ( req, res ) => {
    try {
        const order = await Order.findById( req.params.id ).populate( 'user', 'name email' ).populate( 'orderItems.product', 'name' );
        if ( !order ) return res.status( 404 ).json( { message: 'Order not found' } );
        res.json( order );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

// Get all orders (for admin)
export const getAllOrders = async ( req, res ) => {
    try {
        const orders = await Order.find().populate( 'user', 'name email' ).populate( 'orderItems.product', 'name' );
        res.json( orders );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};
