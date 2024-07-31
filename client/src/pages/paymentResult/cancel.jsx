import { Link, Navigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cancel = () => {
    const { isLogin } = useSelector( ( state ) => state.auth );
    if ( !isLogin ) {
        // Redirect to the sign-up page if no user is logged in
        return <Navigate to="/login" />;
    }
    return (
        <>
            <section className="flex items-center justify-center pt-56 sm:px-6 max-w-7xl m-auto bg-opacity-30 lg:px-6">
                <div className="text-3xl text-center mb-8 font-bold h-screen">
                    <div className=" flex items-center justify-center text-2xl text-green-600 text-center h-56 w-56 rounded-full shadow-lg shadow-red-900">
                        <div className=" text-center">
                            <div className="flex items-center justify-center">
                                <img
                                    src="./assets/cancel.gif"
                                    alt="CancelImg"
                                    sizes={ 22 }
                                    className=" h-28 "
                                />
                            </div>
                            <h1 className="text-xl font-semibold text-red-600 ">
                                Payment failed!
                            </h1>
                        </div>
                    </div>
                    <div className="text-center group flex items-center justify-center my-4">
                        <Link
                            to={ "/" }
                            className=" text-xl font-thin hover:font-thin flex items-center border border-red-700 hover:bg-red-500 group-hover:text-white rounded-full px-4 py-2 my-4"
                        >
                            Home page&nbsp;
                            <FaArrowRight className="group-hover:pl-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Cancel;
