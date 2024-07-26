import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Slice/authSlice";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState({ email: "", password: "" });

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let isValid = true;
        const errors = { email: "", password: "" };

        if (!form.email) {
            errors.email = "Please enter your email";
            isValid = false;
        }
        if (!form.password) {
            errors.password = "Please enter your password";
            isValid = false;
        }

        setError(errors);
        return isValid;
    };

    const loginUser = async(e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        try {
            const response = await fetch(`http://localhost:8000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email:form.email, password:form.password }),
                credentials: "include",
            });

            if (response.ok) {
                const userData = await response.json();
                dispatch( login( { user: userData.user, token: userData.token } ) );
                toast.success("Login Successfully!");
                console.log("userData",userData)
                navigate('/');
                // window.location.reload();
            } else {
                setError({ ...error, password: "Invalid username or password" });
            }
        } catch (err) {
            console.error("Error logging in:", err);
            setError({ ...error, password: "Error logging in. Please try again later." });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md items-center w-full p-8 space-y-8 bg-transparent rounded-lg shadow-xl">
                <div className="py-2">
                    <img
                        className="w-auto h-20 rounded-full mx-auto pr-10"
                        src="./assets/cartLogo.png"
                        alt="Logo"
                    />
                    <h2 className="mt-4 text-3xl font-bold text-center text-gray-900">
                        Login to your account
                    </h2>
                </div>
                <form className="space-y-6" onSubmit={loginUser}>
                    <div className="space-y-4">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={`relative block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${error.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Email address"
                                value={form.email}
                                onChange={handleInputChange}
                            />
                            {error.email && (
                                <span className="text-sm text-red-500">
                                    {error.email}
                                </span>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={show ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className={`relative block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${error.password ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Password"
                                value={form.password}
                                onChange={handleInputChange}
                            />
                            {!show ? (
                                <AiOutlineEyeInvisible
                                    className="absolute cursor-pointer bottom-3 right-2"
                                    size={20}
                                    onClick={() => setShow(true)}
                                />
                            ) : (
                                <AiOutlineEye
                                    className="absolute cursor-pointer bottom-3 right-2"
                                    size={20}
                                    onClick={() => setShow(false)}
                                />
                            )}
                        </div>
                        {error.password && (
                            <span className="text-sm text-red-500">
                                {error.password}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                required
                            />
                            <label
                                htmlFor="remember-me"
                                className="block ml-2 text-sm text-gray-900"
                            >
                                I Agree Terms & Conditions
                            </label>
                        </div>
                        <div className="text-sm">
                            <span className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </span>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="relative flex justify-center w-full px-3 py-2 text-sm font-semibold text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                        <p className="mt-2 text-sm text-center text-gray-600">
                            Or{" "}
                            <span className="font-medium text-indigo-600 hover:text-indigo-500">
                                Don&apos;t Have an Account?{" "}
                                <Link to="/register">Sign up now</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

