import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import getBaseURL from '../utils/getBaseURL';

const AdminLogin = () => {
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        try{
            const response = await axios.post(`${getBaseURL()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const auth = await response.data;
            console.log(auth);
            if(auth.token){
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token');
                    alert('Token has been expired, please login again');
                    navigate("/");
                }, 3600 * 1000)
            }

            alert('Admin Login Successfully');
            navigate("/Dashboard");
        }
        catch(error){
            setMessage("Please enter valid username and password");
            console.log(error);
        }
    }
    return (
    <div className='h-screen flex items-center justify-center'>
            <div className='w-full max-w-sm p-4 px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md'>
                <h2 className='mb-4 text-xl font-semibold'>Admin Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='username'>
                        Username</label>
                        <input {...register("username", { required: true })}
                        type='username' name='username' id='username' placeholder='Username'
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
                            Login </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default AdminLogin