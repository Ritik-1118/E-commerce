/* eslint-disable react/prop-types */
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function TodaySales ({products}) {
    // console.log(products)
    
    return (
        <div className="max-w-[85rem] mx-auto w-full border bg-slate-100 mt-8 pb-8 shadow-xl">
            <div className="text-red-600 text-xl pl-2">
                <span className="border-4 border-red-600 mr-1 "></span>
                Today&apos;s
            </div>
            <div className="flex items-center justify-between pl-2">
                <div className="flex items-center justify-between w-[40%]">
                    <div className="text-2xl font-semibold ">
                        Flash Sales
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                            <span className="">Days</span>
                            <span className="font-semibold">02</span>
                        </div>
                        <span className=" text-xl font-semibold">:</span>
                        <div className="flex flex-col items-center">
                            <span className="">Hours</span>
                            <span className="font-semibold">23</span>
                        </div>
                        <span className=" text-xl font-semibold">:</span>
                        <div className="flex flex-col items-center">
                            <span className="">Minutes</span>
                            <span className="font-semibold">53</span>
                        </div>
                        <span className=" text-xl font-semibold">:</span>
                        <div className="flex flex-col items-center">
                            <span className="">Seconds</span>
                            <span className="font-semibold">59</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-4">
                    <BiArrowBack />
                    <IoArrowForwardOutline />
                </div>
            </div>
            <div className="pt-4 flex gap-4 overflow-hidden overflow-x-auto">
                { products && products.map( ( product, i ) => (
                    <NavLink to={`/product-details/${product._id}`} key={ i } className=" w-[200px] min-w-[210px] h-[300px] rounded-md shadow-2xl">
                        <div className="flex items-center justify-center shadow-slate-200 shadow">
                            <img src={`${product.image ? product.image : "./assets/prod_imgs/Phones/iPhone 14 pro max.jpeg"}`} alt=" Product image" className="h-40 w-auto" />
                        </div>
                        <div className="flex flex-col px-2 mt-2 gap-1">
                            <span className="flex items-center justify-between font-semibold">
                                <div>{product.name}</div>
                                <span className="rounded-full border bg-red-600 text-white/80 px-2 text-center -mr-2">{product.brand}</span>
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
                        </div>
                    </NavLink>
                ) ) }
            </div>
            <div className=" py-8 flex items-center justify-center font-semibold text-xl">
                <button type="button" className="border bg-red-600 text-white/80 px-2 py-1">View all Products</button>
            </div>
        </div>
    )
}
