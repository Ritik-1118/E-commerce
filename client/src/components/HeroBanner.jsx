/* eslint-disable no-unused-vars */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { SiDell, SiSony } from "react-icons/si";

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full  my-auto mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-[31px] rounded-t-md md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[15px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute right-0 rounded-l-md bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div>
                    <img
                        src="./assets/prod_imgs/Laptops/MacBook pro.jpg"
                        className="h-[680px] w-full object-cover"
                    />
                    <div className=" flex flex-col items-start gap-2 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald absolute md:bottom-[75px] left-32 top-[8rem] text-white/[0.9] text-[15px] md:text-[20px] hover:opacity-80">
                        <div className="py-4 ml-2 flex items-center gap-3">
                            <FaApple className="text-4xl "/>
                            MacBook Pro series
                        </div>
                        <div className="text-7xl pb-5 w-[40%] -ml-4">
                            Up to 10% of Voucher
                        </div>
                        <div className=" text-white/90 text-lg w-1/2 text-start">
                            Latest iPhone with advanced features. Powerful laptop for professionals. High-end Android tablet with AMOLED display.
                        </div>
                        <span className="flex items-center pt-8 text-md cursor-pointer">
                            Buy now&nbsp;<IoArrowForwardOutline />
                        </span>
                    </div>
                </div>
                <div>
                    <img
                        src="./assets/prod_imgs/Phones/iPhone13.png"
                        className="h-[680px] w-full object-cover"
                    />
                    <div className=" flex flex-col items-start gap-2 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald absolute md:bottom-[75px] left-32 top-[8rem] text-white/[0.9] text-[15px] md:text-[20px] hover:opacity-80">
                        <div className="py-4 ml-2 flex items-center gap-3">
                            <FaApple className="text-4xl "/>
                            iPhone 13 Series
                        </div>
                        <div className="text-7xl pb-5 w-[40%] -ml-4">
                            Up to 10% of Voucher
                        </div>
                        <div className=" text-white/90 text-lg w-1/2 text-start">
                            Latest iPhone with advanced features. Powerful laptop for professionals. High-end Android tablet with AMOLED display.
                        </div>
                        <span className="flex items-center pt-8 text-md cursor-pointer">
                            Buy now&nbsp;<IoArrowForwardOutline />
                        </span>
                    </div>
                </div>

                <div>
                    <img
                        src="./assets/prod_imgs/Tablets/iPad Air 2024.png"
                        className="h-[680px] w-full object-cover"
                    />
                    <div className=" flex flex-col items-start gap-2 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald absolute md:bottom-[75px] left-32 top-[8rem] text-white/[0.9] text-[15px] md:text-[20px] hover:opacity-80">
                        <div className="py-4 ml-2 flex items-center gap-3">
                            <FaApple className="text-4xl "/>
                            iPad Air 2024
                        </div>
                        <div className="text-7xl pb-5 w-[40%] -ml-4">
                            Up to 10% of Voucher
                        </div>
                        <div className=" text-white/90 text-lg w-1/2 text-start">
                            Latest iPhone with advanced features. Powerful laptop for professionals. High-end Android tablet with AMOLED display.
                        </div>
                        <span className="flex items-center pt-8 text-md cursor-pointer">
                            Buy now&nbsp;<IoArrowForwardOutline />
                        </span>
                    </div>
                </div>
                <div>
                    <img
                        src="./assets/prod_imgs/Cameras/Sony Alpha 7 IV.png"
                        className="h-[680px] w-full object-cover"
                    />
                    <div className=" flex flex-col items-start gap-2 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald absolute md:bottom-[75px] left-32 top-[8rem] text-black/[0.9] text-[15px] md:text-[20px] hover:opacity-80">
                        <div className="py-4 ml-2 flex items-center gap-3 font-semibold">
                            <SiSony className="text-6xl "/>
                            | Sony Alpha 7 IV
                        </div>
                        <div className="text-7xl pb-5 w-[40%] -ml-4">
                            Up to 10% of Voucher
                        </div>
                        <div className="  text-lg w-1/2 text-start">
                            Latest iPhone with advanced features. Powerful laptop for professionals. High-end Android tablet with AMOLED display.
                        </div>
                        <span className="flex items-center pt-8 text-md cursor-pointer">
                            Buy now&nbsp;<IoArrowForwardOutline />
                        </span>
                    </div>
                </div>
                <div>
                    <img
                        src="./assets/prod_imgs/Laptops/Dell XPS 15.jpg"
                        className="h-[680px] w-full object-cover"
                    />
                    <div className=" flex flex-col items-start gap-2 px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald absolute md:bottom-[75px] left-32 top-[8rem] text-black/[0.9] text-[15px] md:text-[20px] hover:opacity-80">
                        <div className="py-4 ml-2 flex items-center gap-3">
                            <SiDell className=" text-4xl"/>
                            Dell XPS 15
                        </div>
                        <div className="text-7xl pb-5 w-[40%] -ml-4">
                            Up to 10% of Voucher
                        </div>
                        <div className="  text-lg w-1/2 text-start">
                            Latest iPhone with advanced features. Powerful laptop for professionals. High-end Android tablet with AMOLED display.
                        </div>
                        <span className="flex items-center pt-8 text-md cursor-pointer">
                            Buy now&nbsp;<IoArrowForwardOutline />
                        </span>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;
