/* eslint-disable react/prop-types */
import { FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../Redux/Slice/cartSlice";

export default function BestSellingProducts ({products}) {
    const dispatch = useDispatch();
    const handleAddToCart = ( data ) => {
        toast.success( `${data.name} Added in Cart` );
        dispatch( addToCart( { data } ) );
    };
    return (
        <div className="max-w-[85rem] mx-auto w-full border bg-slate-100 mt-8 pb-8 shadow-xl">
            <div className="text-red-600 text-xl pl-2">
                <span className="border-4 border-red-600 mr-1 "></span>
                This month&apos;s
            </div>
            <div className="flex items-center justify-between pl-2 pt-4">
                <div className="flex items-center justify-between w-[40%]">
                    <div className="text-2xl font-semibold ">
                        Best Selling Products
                    </div>
                </div>
            </div>
            <div className="pt-4 flex gap-4 overflow-hidden overflow-x-auto scrollbar-hide">
                { products && products.map( ( product, i ) => (
                    <div key={ i } className="relative w-[220px] min-w-[220px] h-auto max-h-[325px] rounded-xl shadow-2xl transition ease-linear duration-300 transform hover:scale-110">
                        <div className="flex items-center justify-center shadow-slate-200 shadow">
                            <img src={`${product.image ? product.image : "./assets/prod_imgs/Phones/iPhone 14 pro max.jpeg"}`} alt=" Product image" className="h-40 w-auto rounded-lg" />
                        </div>
                        <div className="absolute top-0 right-2 rounded-l-full border bg-red-600/40 text-white/80 px-2 text-center -mr-2">{product.brand}</div>
                        <div className="flex flex-col px-2 mt-2 gap-1">
                            <span className="flex items-center justify-between font-semibold">
                                <div>{product.name}</div>
                            </span>
                            <div className="flex items-center justify-between">
                                <span className="text-red-500 flex gap-3 ">
                                    ${product.price} 
                                    <span className="line-through text-gray-500">${product.price + product.price}</span>
                                </span>
                                <span className="font-semibold">{product.stock >= 1 ? "In stock" : "Out of stock"}</span>
                            </div>
                            <div className="flex items-center ">
                                <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                <FaStarHalfAlt className="text-yellow-500 text-sm" />
                                <span className="text-gray-600 pl-1">(78)</span>
                            </div>
                            <div className=" flex items-center justify-between py-4">
                                <NavLink to={`/product-details/${product._id}`} className="hover:border px-2 py-1 rounded-md bg-red-500/90 text-white/90 hover:border-red-500 hover:text-red-500 hover:bg-transparent hover:underline hover:underline-offset-2 cursor-pointer ease-in-out-hover-effect">View details</NavLink>
                                <div className="text-2xl pr-4 cursor-pointer ease-in-out-hover-effect relative group"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <HiOutlineShoppingCart className=""/>
                                    <h1 className=" absolute -mt-11 -ml-16 w-20 px-2 border border-zinc-200 text-xs rounded opacity-0 group-hover:opacity-100 text-black">Add to cart</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ) ) }
            </div>
            <div className=" py-8 flex items-center justify-center font-semibold text-xl">
                <button type="button" className="border bg-red-600 text-white/80 px-2 py-1"><NavLink to={'/products'}>View all Products</NavLink></button>
            </div>
        </div>
    )
}
