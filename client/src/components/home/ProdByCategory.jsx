import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsTablet } from "react-icons/bs";
import { CiCamera,CiHeadphones, CiLaptop } from "react-icons/ci";

export default function ProdByCategory () {
    return (
        <div className="max-w-[85rem] mx-auto w-full border bg-slate-100 mt-8 pb-8 shadow-xl">
            <div className="text-red-600 text-xl pl-2">
                <span className="border-4 border-red-600 mr-1 "></span>
                Categories
            </div>
            <div className="flex items-center justify-between pl-2 py-4">
                <div className="flex items-center justify-between w-[40%]">
                    <div className="text-2xl font-semibold ">
                        Browse By Category
                    </div>
                </div>
            </div>
            <div className="py-4 flex gap-4 justify-center items-center overflow-hidden overflow-x-auto">
                <div className="max-w-[150px] min-w-[150px] h-fit border-2 rounded-md border-gray-400 hover:opacity-80 cursor-pointer">
                    <div className="py-5 flex flex-col items-center">
                        <IoPhonePortraitOutline className="text-7xl text-gray-800"/>
                        <span className="py-1 text-xl">Phones</span>
                    </div>
                </div>
                <div className="max-w-[150px] min-w-[150px] h-fit border-2 rounded-md border-gray-400 hover:opacity-80 cursor-pointer">
                    <div className="py-5 flex flex-col items-center">
                        <CiLaptop className="text-7xl text-gray-800"/>
                        <span className="py-1 text-xl">Laptops</span>
                    </div>
                </div>
                <div className="max-w-[150px] min-w-[150px] h-fit border-2 rounded-md border-gray-400 hover:opacity-80 cursor-pointer">
                    <div className="py-5 flex flex-col items-center">
                        <BsTablet className="text-7xl text-gray-800"/>
                        <span className="py-1 text-xl">Tabblets</span>
                    </div>
                </div>
                <div className="max-w-[150px] min-w-[150px] h-fit border-2 rounded-md border-gray-400 hover:opacity-80 cursor-pointer">
                    <div className="py-5 flex flex-col items-center">
                        <CiCamera className="text-7xl text-gray-800"/>
                        <span className="py-1 text-xl">Phones</span>
                    </div>
                </div>
                <div className="max-w-[150px] min-w-[150px] h-fit border-2 rounded-md border-gray-400 hover:opacity-80 cursor-pointer">
                    <div className="py-5 flex flex-col items-center">
                        <CiHeadphones className="text-7xl text-gray-800"/>
                        <span className="py-1 text-xl">HeadPhones</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
