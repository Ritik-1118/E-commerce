import Product from '../models/Product.js';

// Get all products
export const getProducts = async ( req, res ) => {
    try {
        // console.log("Ok here!", req.cookies)
        const products = await Product.find();
        res.json( products );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
}
// Get all products with filters
export const getProductsByFilter = async ( req, res ) => {
    const { category, brand, minPrice, maxPrice } = req.query;

    let filter = {};

    if ( category ) filter.category = category;
    if ( brand ) filter.brand = brand;
    if ( minPrice || maxPrice ) {
        filter.price = {};
        if ( minPrice ) filter.price.$gte = Number( minPrice );
        if ( maxPrice ) filter.price.$lte = Number( maxPrice );
    }

    try {
        const products = await Product.find( filter );
        res.json( products );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};
// Get a product by ID
export const getProductById = async ( req, res ) => {
    try {
        const product = await Product.findById( req.params.id );
        if ( !product ) return res.status( 404 ).json( { message: 'Product not found' } );
        res.json( product );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};

// Create a new product
export const createProduct = async ( req, res ) => {
    try {
        const { name, description, price, brand, category, stock } = req.body;

        // Check if there is an image in the request
        let imageUrl = '';
        if ( req.file ) {
            const result = await cloudinary.uploader.upload( req.file.path );
            imageUrl = result.secure_url;
        }

        const product = new Product( {
            name,
            description,
            price,
            brand,
            category,
            image: imageUrl,
            stock
        } );

        await product.save();
        res.status( 201 ).json( product );
    } catch ( error ) {
        res.status( 400 ).json( { message: error.message } );
    }
};

// Update a product
export const updateProduct = async ( req, res ) => {
    try {
        const { id } = req.params;
        const { name, description, price, brand, category, stock } = req.body;

        // Check if there is an image in the request
        let imageUrl;
        if ( req.file ) {
            const result = await cloudinary.uploader.upload( req.file.path );
            imageUrl = result.secure_url;
        }

        const updatedData = {
            name,
            description,
            price,
            brand,
            category,
            stock,
            ...( imageUrl && { image: imageUrl } )
        };

        const product = await Product.findByIdAndUpdate( id, updatedData, { new: true } );

        if ( !product ) {
            return res.status( 404 ).json( { message: 'Product not found' } );
        }

        res.status( 200 ).json( product );
    } catch ( error ) {
        res.status( 400 ).json( { message: error.message } );
    }
};

// Delete a product
export const deleteProduct = async ( req, res ) => {
    try {
        const product = await Product.findByIdAndDelete( req.params.id );
        if ( !product ) return res.status( 404 ).json( { message: 'Product not found' } );
        res.json( { message: 'Product deleted' } );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};
