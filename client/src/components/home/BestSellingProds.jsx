import { BiArrowBack } from "react-icons/bi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";

export default function BestSellingProducts () {
    const [products, setProducts] = useState([
        {},{},{},{},{},{},{},{},{},{},{},
    ]);
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
                <div className="flex items-center gap-3 px-4">
                    <BiArrowBack />
                    <IoArrowForwardOutline />
                </div>
            </div>
            <div className="pt-4 flex gap-4 overflow-hidden overflow-x-auto py-2">
                {products && products.map((product, i)=>(
                    <div key={i} className=" w-[200px] min-w-[200px] h-fit rounded-md shadow-2xl">
                        <div className="flex items-center justify-center shadow-slate-200 shadow">
                            <img src="./assets/prod_imgs/Phones/OnePlus 9 Pro.jpeg" alt=" Product image" className="h-40 w-auto" />
                        </div>
                        <div className="flex flex-col px-2 mt-2 gap-1">
                            <span className="flex items-center justify-between font-semibold">
                                <div>iPhone 14 pro max</div>
                                <span className="rounded-full border bg-red-600 text-white/80 px-2 text-center -mr-2">Apple</span>
                            </span>
                            <div className="flex items-center justify-between">
                                <span className="text-red-500">$1000</span>
                                <span className="font-semibold">Out of stock</span>
                            </div>
                            <div className="flex items-center ">
                                <FaStarHalfAlt className="text-yellow-500 text-sm"/>
                                <FaStarHalfAlt className="text-yellow-500 text-sm"/>
                                <FaStarHalfAlt className="text-yellow-500 text-sm"/>
                                <FaStarHalfAlt className="text-yellow-500 text-sm"/>
                                <FaStarHalfAlt className="text-yellow-500 text-sm"/>
                                <span className="text-gray-600 pl-1">(78)</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" py-8 flex items-center justify-center font-semibold text-xl">
                <button type="button" className="border bg-red-600 text-white/80 px-2 py-1">View all Products</button>
            </div>
        </div>
    )
}
