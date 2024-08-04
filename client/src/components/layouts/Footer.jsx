import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h2 className="text-lg font-bold">Exclusive</h2>
                        <p className="mt-4">Subscribe</p>
                        <p className="mt-2">Get 10% off your first order</p>
                        <div className="flex mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-lg focus:outline-none bg-gray-800"
                            />
                            <button className="bg-gray-800 p-2 rounded-r-lg">
                                <AiOutlineRight className="text-white" />
                            </button>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h2 className="text-lg font-bold">Support</h2>
                        <p className="mt-4">105 xyz, delhi, DL 110089, India.</p>
                        <p className="mt-2">techbazzar@gmail.com</p>
                        <p className="mt-2">+88415-88638-9999</p>
                    </div>

                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h2 className="text-lg font-bold">Account</h2>
                        <ul className="mt-4">
                            <li className="mt-2"><a href="/account">My Account</a></li>
                            <li className="mt-2"><a href="/login">Login / Register</a></li>
                            <li className="mt-2"><a href="/cart">Cart</a></li>
                            <li className="mt-2"><a href="/wishlist">Wishlist</a></li>
                            <li className="mt-2"><a href="/products">Shop</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/5 mb-6 sm:mb-0">
                        <h2 className="text-lg font-bold">Quick Link</h2>
                        <ul className="mt-4">
                            <li className="mt-2"><a href="/privacy">Privacy Policy</a></li>
                            <li className="mt-2"><a href="/terms">Terms Of Use</a></li>
                            <li className="mt-2"><a href="/faq">FAQ</a></li>
                            <li className="mt-2"><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/5">
                        <h2 className="text-lg font-bold">Social Links</h2>
                        
                        <div className="flex mt-4">
                            <FaFacebook className="text-xl mx-2 hover:text-gray-400" />
                            <FaTwitter className="text-xl mx-2 hover:text-gray-400" />
                            <FaInstagram className="text-xl mx-2 hover:text-gray-400" />
                            <FaLinkedin className="text-xl mx-2 hover:text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <p>© Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
