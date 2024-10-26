import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from '../components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

const UserDashboard = () => {
    const handleLogout = () => {
        
    }
    return (
        <section className="flex min-h-screen overflow-hidden md:bg-gray-100">
            <div className="flex-grow text-gray-800">
            
            <main className="p-6 space-y-6 sm:p-10 ">
                <div className="flex flex-col justify-between space-y-6 md:space-y-0 md:flex-row">
                <div className="mr-6">
                    <h1 className="mb-2 text-4xl font-semibold">Dashboard</h1>
                    <h2 className="text-gray-600 ml-0.5">User route</h2>
                </div>
                <div className="flex flex-col items-start justify-end -mb-3 md:flex-row">
                    <Link to="/user-dashboard/add-new-ets" className="inline-flex px-5 py-3 mb-3 ml-6 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:bg-purple-700">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 mr-2 -ml-1 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Thêm BĐS
                    </Link>
                    </div>
                </div>
                <Outlet/>
            </main>
            </div>
        </section>
    )
}

export default UserDashboard