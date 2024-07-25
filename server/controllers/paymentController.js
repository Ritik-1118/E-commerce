import Stripe from 'stripe';
import Order from '../models/Order.js';
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe( process.env.STRIPE_SECRET_KEY );

// Create Stripe payment intent
export const createPaymentIntent = async ( req, res ) => {
    const { orderId } = req.body;
    try {
        const order = await Order.findById( orderId );
        if ( !order ) return res.status( 404 ).json( { message: 'Order not found' } );

        const paymentIntent = await stripe.paymentIntents.create( {
            amount: Math.round( order.totalPrice * 100 ), // Stripe amount is in cents
            currency: 'usd',
            metadata: { orderId: order._id.toString() }
        } );

        res.status( 200 ).json( { clientSecret: paymentIntent.client_secret } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

// Update order after payment
export const updateOrderToPaid = async ( req, res ) => {
    const { paymentId, orderId } = req.body;
    try {
        const order = await Order.findById( orderId );
        if ( !order ) return res.status( 404 ).json( { message: 'Order not found' } );

        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: paymentId,
            status: 'succeeded',
            update_time: new Date().toISOString(),
            email_address: req.user.email
        };

        const updatedOrder = await order.save();
        res.status( 200 ).json( updatedOrder );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};
