import { useParams } from "react-router-dom";
import ProductDetailsCarousel from "../components/ProductDetailsCarousel.jsx";
import { FaCartArrowDown, FaStarHalfAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader"
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice.jsx";
import { BsArrowDown } from "react-icons/bs";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
    
const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ data, setData ] = useState( {} );
    const [ loading, setLoading ] = useState( true );

    const getBYid = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/products/${id}`, {
                withCredentials: true,
            }
            );
            setData( response.data );
            setLoading( false );
            console.log(response.data)
        } catch ( error ) {
            console.error( "Error fetching product details:", error );
            setLoading( false );
        }
    };

    useEffect( () => {
        getBYid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );
    // const defaultImages = [ "/img1.png", "/img2.jpg", "/img3.png" ];
    // const images = data.image && data.image.length > 0 ? data.image : defaultImages;
    const imageArray = [data.image];
    // console.log(imageArray)
    // const images = data.image ? new Array(data.image) : defaultImages;
    const handleAddToCart = ( data ) => {
        toast.success( `${data.name} Added in Cart` );
        dispatch( addToCart( { data } ) );
    };

    return (
        <>
            { loading ? (
                <Loader />
            ) : (
                <section className="py-3 px-10 sm:px-6 lg:px-6">
                    <div className="container mx-auto py-[14vh]">
                        <ToastContainer
                            style={{ zIndex: 50 }}
                            position="top-right"
                            autoClose={ 5000 }
                            hideProgressBar={ false }
                            newestOnTop={ false }
                            closeOnClick
                            rtl={ false }
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition:Bounce
                        />
                        <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto text-gray-800 md:py-20">
                            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                                {/* left column start */ }
                                <div className="w-full md:w-auto  flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                                    <ProductDetailsCarousel images={ imageArray } className="" />
                                </div>
                                {/* left column end */ }

                                {/* right column start */ }
                                <div className="flex-[1] py-3">
                                    {/* PRODUCT TITLE */ }
                                    <div className="text-[34px] font-bold mb-2 leading-tight">
                                        { data.name }
                                    </div>
                                    <div className="font-serif font-semibold text-xl pb-2">
                                        {data.brand}
                                    </div>
                                    {/* PRODUCT PRICE */ }
                                    <span className="text-red-500 flex gap-3 ">
                                        <span className="flex text-green-600"><BsArrowDown className=" mt-1" />50%</span>
                                        <span className="line-through text-gray-500">${data.price + data.price}</span>
                                        ${data.price} 
                                    </span>
                                    
                                    <div className="flex items-center pt-2">
                                        <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                        <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                        <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                        <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                        <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                        <span className="text-gray-600 pl-1">(1k)</span>
                                    </div>
                                    <div>
                                        <div className="flex flex-row items-center justify-between">
                                            { " " }
                                            <div className="text-lg font-bold my-5">
                                                Product Details
                                            </div>{ " " }
                                        </div>

                                        <div className="markdown text-xl text-sky-700 mb-5">
                                            { data.description }
                                        </div>
                                        
                                        <div className=" pb-4 -mt-2 font-bold text-black/80 text-xl">
                                            {data.stock >0 ? "In stock" : "Out of stock"}
                                        </div>
                                        <div className="flex items-center mb-4 gap-8">
                                            <div className="flex flex-col items-center justify-center w-24 text-center shadow-md rounded-lg px-2 py-1 shadow-gray-100">
                                                <MdDoNotDisturbAlt className="text-xl"/>No Returns Allowed
                                            </div>
                                            <div className="flex flex-col items-center justify-center w-36 text-center shadow-md rounded-lg px-2 py-1 shadow-gray-100">
                                                <RiMoneyRupeeCircleFill className="text-xl text-green-600"/>Cash on Dellivery avaliable
                                            </div>
                                        </div>
                                    </div>
                                    {/* ADD TO CART BUTTON START */ }
                                    <button
                                        className="w-full  py-4 rounded-full bg-transparent border-2 border-red-900 border-solid text-red-800 text-xl font-medium transition-transform active:scale-95 mb-3 hover:opacity-80 "
                                        onClick={ () => handleAddToCart( data ) }
                                    >
                                        <div className="flex items-center justify-center ease-in-out-hover-effect">
                                            <span className="ease-in-out-hover-effect">Add to Cart &nbsp;</span>
                                            <FaCartArrowDown />
                                        </div>
                                    </button>
                                    {/* ADD TO CART BUTTON END */ }
                                </div>
                                {/* right column end */ }
                            </div>
                        </div>
                    </div>
                </section>
            ) }
        </>
    );
};

export default ProductDetails;
