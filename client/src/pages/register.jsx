import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState({ email: "", password: "", username: "" });

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let isValid = true;
        const errors = { email: "", password: "", username: "", };

        if (!form.username) {
            errors.username = "Please enter your username";
            isValid = false;
        }
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

    const registerUser = async(e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        try {
            const response = await fetch("http://localhost/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                const userData = await response.json()
                console.log(userData)
                toast.success("Successfully Registered, Now Login with your details");
                navigate('/login');
            } else {
                const result = await response.json();
                if (result.error) {
                    setError({ ...error, email: result.error });
                } else {
                    setError({ ...error, password: "Registration failed. Please try again." });
                }
            }
        } catch (err) {
            console.error("Error registering:", err);
            setError({ ...error, password: "Error registering. Please try again later." });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div className="py-2">
                    <img
                        className="w-auto h-20 rounded-full mx-auto pr-10"
                        src="./assets/cartLogo.png"
                        alt="Logo"
                    />
                    <h2 className="mt-4 text-3xl font-bold text-center text-gray-900">
                        Register your account
                    </h2>
                </div>
                <form className="space-y-6" onSubmit={registerUser}>
                    <div className="space-y-4">
                        <div>
                            <input
                                name="username"
                                type="text"
                                required
                                className={`relative block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${error.username ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Username"
                                value={form.username}
                                onChange={handleInputChange}
                            />
                            {error.username && (
                                <span className="text-sm text-red-500">
                                    {error.username}
                                </span>
                            )}
                        </div>
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
                            Sign up
                        </button>
                        <p className="mt-2 text-sm text-center text-gray-600">
                            Or{" "}
                            <span className="font-medium text-indigo-600 hover:text-indigo-500">
                                Already Have an Account?{" "}
                                <Link to="/login">Sign in now</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
