import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


function Login() {
        const [authUser, setAuthUser]=useAuth();

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Prepare data to send to backend
        const userInfo = {
           
            email: data.email,
            password: data.password,
        };


        // Send data to the backend
        axios.post("/api/user/login", userInfo)
            .then((response) => {
                if (response.data) {
                    toast.success("Login successful");
                }
                localStorage.setItem("Chatapp", JSON.stringify(response.data));
                setAuthUser(response.data)
            })

            .catch((error) => {
                if (error.response) {
                    toast.error("Error: " + error.response.data.error)
                }
            })
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <form
                    onSubmit={handleSubmit(onSubmit)}

                    className='border border-white px-6 py-2 rounded-md space-y-3 w-96'>
                    <h1 className='text-2xl text-center'>Text
                        <span className='text-green-500 font-semibold'>App</span></h1>
                    <h2 className='text-xl text-white font-bold'>Login</h2>
                    <br />

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

                    {/* text & button*/}
                    <div className='flex justify-between'>
                        <p> New User? <Link to="/signup"
                         className='text-blue-500 underline cursor-pointer ml-1'>
                        Signup</Link>
                        </p>
                        <input type='submit' value="Login" className='text-white bg-green-500 px-4 py-1 rounded-lg' />

                    </div>



                </form>
            </div>
        </>
    )
}

export default Login