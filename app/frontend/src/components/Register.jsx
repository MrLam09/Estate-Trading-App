import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const [message, setMessage] = useState('');
    const {registerUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try{
            await registerUser(data.email, data.password);
            alert("User Registered Successfully");
        }
        catch(error){
            setMessage("Please enter valid email and password");
        }
    }
    const handleGoogleSignIn = async () => {
        try{
            await signInWithGoogle();
            alert("Login Successfully");
            navigate("/");
        }
        catch(error){
            setMessage("Google sign in failed");
            console.log(error);
        }
    }
    return (
        <div className='h-[calc(100vh-120px)] border flex items-center justify-center'>
            <div className='w-full max-w-sm p-4 px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md'>
                <h2 className='mb-4 text-xl font-semibold'>Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='email'>
                            Email</label>
                        <input {...register("email", { required: true })}
                        type='email' name='email' id='email' placeholder='Email Address'
                        className='w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='password'>
                            Password</label>
                        <input {...register("password", { required: true })}
                        type='password' name='password' id='password' placeholder='Password'
                        className='w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline'></input>
                    </div>
                    {
                        message && <p className='text-xs italic text-red-500'>{message}</p>
                    }
                    <div>
                        <button 
                        className='px-8 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none'>
                            Register</button>
                    </div>
                </form>
                <p className='mt-4 text-sm font-medium text-gray-500 align-baseline'>Have an account? 
                    <Link to="/Login" 
                    className='text-blue-500 hover:text-blue-700'> Login</Link> </p>
                {/* google sign in */}
                <div className='mt-4'>
                    <button onClick={handleGoogleSignIn}
                    className='flex flex-wrap items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50'>
                        <FaGoogle className='mr-2'/>
                        Sign in with Google
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Register