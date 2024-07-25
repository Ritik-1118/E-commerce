import User from "../models/User.js";

export const register = async ( req, res ) => {
    try {
        const userData = req.body;
        const UserExist = await User.findOne( userData.email );
        if ( UserExist ) {
            return res.status( 400 ).json( { msg: "Email Already exist" } );
        }
        const Usercreated = await User.create( { userData } );
        // console.log(Usercreated)
        res.status( 201 ).json( {
            message: "Registration Succesfully",
        } );
    } catch ( error ) {
        console.log( error );
    }
};

export const login = async ( req, res ) => {
    try {
        const { username, email, password } = req.body;
        const UserExist = await User.findOne( { email } );
        if ( !UserExist ) {
            return res.status( 400 ).json( { message: "Invalid credantials" } );
        }
        // console.log("userExisted:- ",UserExist)
        const validpswd = await UserExist.Comparepswd( password );
        // console.log("validpswd:-",validpswd)
        const accessToken = await UserExist.generateToken();
        // console.log("accessToken:-",accessToken)
        const isAdmin = UserExist.isAdmin;
        if ( validpswd ) {
            res.cookie( 'isAdmin', isAdmin, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'None',
                maxAge: 24 * 60 * 60 * 1000
            } );
            res.cookie( 'user', UserExist, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'None',
                maxAge: 24 * 60 * 60 * 1000
            } );
            res
                .status( 201 )
                .cookie( 'access_token', accessToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', // Ensure the cookie is only sent over HTTPS in production
                    sameSite: 'None',
                    maxAge: 24 * 60 * 60 * 1000
                } )

                .json( { message: "Login Succesful", UserExist } );
        } else {
            res.status( 401 ).json( { message: "Invalid email or Password" } );
        }
    } catch ( error ) {
        res.status( 500 ).json( error );
    }
};

// Get user profile
export const getUserProfile = async ( req, res ) => {
    try {
        const user = await User.findById( req.user.userId );
        if ( !user ) return res.status( 404 ).json( { message: 'User not found' } );
        res.json( user );
    } catch ( error ) {
        res.status( 500 ).json( { message: error.message } );
    }
};