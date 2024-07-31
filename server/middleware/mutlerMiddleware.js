import multer from 'multer';

const storage = multer.diskStorage( {
    filename: ( req, file, cb ) => {
        cb( null, new Date().toISOString().replace( /:/g, '-' ) + '-' + file.originalname );
    }
} );

const fileFilter = ( req, file, cb ) => {
    if ( file.mimetype.startsWith( 'image/' ) ) {
        cb( null, true );
    } else {
        cb( new Error( 'File type not supported' ), false );
    }
};

const upload = multer( { storage, fileFilter } );

export default upload;
