import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Get cart by user ID
export const getCartByUserId = async ( req, res ) => {
    try {
        const cart = await Cart.findOne( { user: req.user._id } ).populate( 'items.product' );
        if ( !cart ) return res.status( 404 ).json( { message: 'Cart not found' } );
        res.json( cart );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

// Add item to cart
export const addItemToCart = async ( req, res ) => {
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById( productId );
        if ( !product ) return res.status( 404 ).json( { message: 'Product not found' } );

        let cart = await Cart.findOne( { user: req.user._id } );

        if ( cart ) {
            // Check if product already exists in the cart
            const itemIndex = cart.items.findIndex( item => item.product.toString() === productId );
            if ( itemIndex > -1 ) {
                // Product exists, update the quantity
                cart.items[ itemIndex ].quantity += quantity;
            } else {
                // Product does not exist, add to cart
                cart.items.push( { product: productId, quantity } );
            }
        } else {
            // No cart for user, create a new cart
            cart = new Cart( {
                user: req.user._id,
                items: [ { product: productId, quantity } ]
            } );
        }

        await cart.save();
        res.status( 201 ).json( cart );
    } catch ( error ) {
        res.status( 400 ).json( { message: error.message } );
    }
};

// Remove item from cart
export const removeItemFromCart = async ( req, res ) => {
    const { productId } = req.body;
    try {
        let cart = await Cart.findOne( { user: req.user._id } );
        if ( !cart ) return res.status( 404 ).json( { message: 'Cart not found' } );

        const itemIndex = cart.items.findIndex( item => item.product.toString() === productId );
        if ( itemIndex > -1 ) {
            cart.items.splice( itemIndex, 1 );
            await cart.save();
            res.json( cart );
        } else {
            res.status( 404 ).json( { message: 'Product not found in cart' } );
        }
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

// Update item quantity in cart
export const updateItemQuantityInCart = async ( req, res ) => {
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne( { user: req.user._id } );
        if ( !cart ) return res.status( 404 ).json( { message: 'Cart not found' } );

        const itemIndex = cart.items.findIndex( item => item.product.toString() === productId );
        if ( itemIndex > -1 ) {
            cart.items[ itemIndex ].quantity = quantity;
            await cart.save();
            res.json( cart );
        } else {
            res.status( 404 ).json( { message: 'Product not found in cart' } );
        }
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};
