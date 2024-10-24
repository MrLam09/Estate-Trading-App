import {Link} from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import avatarImg from "../assets/avt.png"
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";

const navigation = [
    {
        name: "Dashboard",
        path: "/Dashboard",
    },
    {
        name: "Tools",
        path: "/Tools",
    },
];




const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log(isDropdownOpen);

    const { currentUser, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    }

    return (

        <header className="px-20 py-6 mx-auto max-w-screen-2xl"> 
            <nav className="flex items-center justify-between">
                {/* Left Side */}
                <div className="flex items-center gap-4 md:gap-5">
            
                    <Link to="/">
                        <IoHome className="size-6" />
                    </Link>

                    
                    <div className="relative w-1 sm:w-96">
                        {/* Search Input */}
                        <IoSearch className="absolute inline-block left-3 inset-y-2"/>
                            <input type="text" placeholder="Search here" 
                            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>

                    </div>
                </div>
                <div className="relative flex items-center ml-10 space-x-2 md:space-x-3">
                    { 
                        currentUser ? 
                        <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                        </button>
                        {
                            isDropdownOpen && (
                                <div className="absolute right-0 z-40 w-48 mt-2 bg-white rounded-md shadow-lg top-8">
                                    <ul className="py-2">
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.path} 
                                                        className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                    {item.name}</Link>
                                                </li>
                                            ))
                                        }
                                        <li>
                                            <button onClick={handleLogOut}
                                            className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100">
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                        </>
                        : <Link to="/Login"><FaRegUserCircle className="size-6"/></Link>
                    }

                    <Link to="/Dashboard" className="flex items-center p-1 px-2 bg-blue-600 rounded sm:px-4">
                        <FaPenFancy className="size-6 fill-inherit"/>
                        <span className="ml-2 text-white font-medium">ĐĂNG TIN</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;