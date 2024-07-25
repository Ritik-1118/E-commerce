import jwt from "jsonwebtoken";
import User from "../models/User.js";
const authMiddleware = async ( req, res, next ) => {
    const authHeader = req.header('Authorization');
    const token = authHeader ? authHeader.replace( "Bearer", "" ).trim() : req.cookies.access_token;
    if ( !token ) {
        return res
            .status( 401 )
            .json( { message: "Unauthorized HTTp ,Token not found" } );
    }
    try {
        const isverified = jwt.verify( token, process.env.JWT_SECRET_KEY );
        const userdata = await User.findOne( { username: isverified.username } ).select('-password');
        
        if (!userdata) {
            return res.status(401).json({ message: 'Unauthorized. User not found' });
        }
        req.user = userdata;
        req.token = token;
        req.userId = userdata._id;
        req.isAdmin = userdata.isAdmin;

        next();
    } catch ( error ) {
        return res.status( 401 ).json( { message: "Unauthorized.Invalid token" } );
    }
};

export default authMiddleware;
