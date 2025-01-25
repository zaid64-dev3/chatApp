import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
    const [authUser, setAuthUser]=useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // Watch the password and confirm password fields
    const password = watch("password", "");
    const confirmPassword = watch("confirmPassword", "");

    // Validate password matching
    const validatePasswordMatch = (value) => {
        return value === password || "Passwords do not match";
    };

    const onSubmit = async (data) => {
        // Prepare data to send to backend
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        };

        
            // Send data to the backend
          await axios.post("/api/user/signup", userInfo)
            .then((response)=>{
                if (response.data){
                toast.success("Signup Successful!");
                }
                localStorage.setItem("Chatapp",JSON.stringify(response.data));
                setAuthUser(response.data)
             })
 
        .catch ((error)=> {
           if(error.response){
            toast.error("Error: "+error.response.data.error)
           }
        })
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-gray-700 bg-gray-800 px-6 py-4 rounded-md space-y-4 w-96"
            >
                <h1 className="text-2xl text-center text-white">
                    Text<span className="text-green-500 font-semibold">App</span>
                </h1>
                <h2 className="text-xl text-white font-bold text-center">Signup</h2>
                
                {/* Full Name */}
                <label className="flex items-center gap-2 text-gray-300">
                    <input
                        type="text"
                        className="grow bg-gray-700 text-white rounded px-2 py-1"
                        placeholder="Fullname"
                        {...register("fullname", { required: "Full name is required" })}
                    />
                </label>
                {errors.fullname && (
                    <span className="text-red-500 text-sm font-semibold">{errors.fullname.message}</span>
                )}

                {/* Email */}
                <label className="flex items-center gap-2 text-gray-300">
                    <input
                        type="email"
                        className="grow bg-gray-700 text-white rounded px-2 py-1"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Invalid email format",
                            },
                        })}
                    />
                </label>
                {errors.email && (
                    <span className="text-red-500 text-sm font-semibold">{errors.email.message}</span>
                )}

                {/* Password */}
                <label className="flex items-center gap-2 text-gray-300">
                    <input
                        type="password"
                        className="grow bg-gray-700 text-white rounded px-2 py-1"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                    />
                </label>
                {errors.password && (
                    <span className="text-red-500 text-sm font-semibold">{errors.password.message}</span>
                )}

                {/* Confirm Password */}
                <label className="flex items-center gap-2 text-gray-300">
                    <input
                        type="password"
                        className="grow bg-gray-700 text-white rounded px-2 py-1"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: validatePasswordMatch,
                        })}
                    />
                </label>
                {errors.confirmPassword && (
                    <span className="text-red-500 text-sm font-semibold">{errors.confirmPassword.message}</span>
                )}
                {/*Text & Button*/}
                <div className="flex justify-between items-center">
                    <p className="text-gray-300 text-sm">
                        Have an account?{" "}
                        <Link to="/login"
                         className="text-blue-500 underline cursor-pointer">
                            Login</Link>
                    </p>
                    <button
                        type="submit"
                        className="text-white bg-green-500 px-4 py-1 rounded-lg hover:bg-green-600"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
