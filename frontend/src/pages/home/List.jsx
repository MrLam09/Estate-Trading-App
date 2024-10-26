import React from 'react'
import { GiBuyCard } from "react-icons/gi";
import { useState } from "react";


const List = () => {

    const [buyInf, setbuyInf] = useState(1);
    const [rentInf, setrentInf] = useState(1);

    return (
    
    <>
        <div className='flex flex-col items-center justify-between py-24 md:flex-row px-52'>
            <li className='relative flex border-r-white pointer'>
            <div className='flex flex-row justify-between gap-2'>
                <GiBuyCard className='size-16'/>
                <div className='flex flex-col'>
                    <div>Mua bán</div>
                    <div className='text-0.5xl '>{buyInf} tin đăng bán</div>
                </div>    
            </div>
            </li>

            <li className='relative flex pointer'>
            <div className='flex flex-row justify-between gap-2'>
                <GiBuyCard className='size-16'/>
                <div className='flex flex-col'>
                    <div>Cho thuê</div>
                    <div className='text-0.5xl '>{rentInf} tin đăng cho thuê</div>
                </div>    
            </div>
            </li>
        </div> 
    </>
    )
}

export default List