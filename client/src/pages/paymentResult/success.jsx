import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Success = () => {
    const { isLogin } = useSelector((state) => state.auth);
    if ( !isLogin ) {
        // Redirect to the sign-up page if no user is logged in
        return <Navigate to="/login" />;
    }
    // useEffect( () => {
    //     const redirectTimeout = setTimeout( () => {
    //         window.location.href = "/"; // Redirect to the menu page
    //     }, 1000 );
    //     return () => clearTimeout( redirectTimeout ); // Clear the timeout on component unmount
    // }, [] );
    return (
        <>
            <section className="py-16 sm:px-6 max-w-7xl m-auto bg-opacity-30 lg:px-6 h-screen">
                <div className="flex items-center justify-center ">
                    <div className="text-3xl text-center pt-56 font-bold">
                        <div className=" flex items-center justify-center text-2xl text-green-600 text-center">
                            <img
                                src="/img/success1.gif"
                                alt="successImg"
                                sizes={ 22 }
                                className=" h-40 rounded-full"
                            />
                        </div>
                        <h1 className="text-2xl text-green-600 text-center my-4">
                            Payment successfull!
                        </h1>
                    </div>
                </div>
                <div className="text-center group flex items-center justify-center">
                    <Link
                        to={ "/menu" }
                        className=" text-xl font-thin hover:font-thin flex items-center border border-green-700 hover:bg-green-500 group-hover:text-white rounded-full px-4 py-2 my-4"
                    >
                        Buy more&nbsp;
                        <FaArrowRight className="group-hover:pl-2" />
                    </Link>
                </div>
            </section>
        </>
    );
};
export default Success;