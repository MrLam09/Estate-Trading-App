import React from 'react'
import { Link } from'react-router-dom'
import { getImgUrl } from '../utils/getImgUrl'


const EsInf = ({estate}) => {
    return (
        <div className="transition-shadow duration-300 rounded-lg ">
            <div
                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:h-72 sm:justify-center">
                <div className="border rounded-md sm:h-72 sm:flex-shrink-0">
                    <Link to={`/estateinf/${estate._id}`}>
                    <img
                        src={`${getImgUrl(estate.image)}`}
                        alt=""
                        className="w-full p-2 transition-all duration-200 bg-cover rounded-md cursor-pointer hover:scale-105"
                    />
                    </Link>
                </div>
                
                

                <div>
                    <Link to={`/estateinf/${estate._id}`}>
                        <h3 className="mb-3 text-base font-semibold hover:text-blue-600">
                            {estate.title}
                        </h3>
                    </Link>
                    <p className="mb-5 font-medium text-red-600">{estate.price}              
                    <span className="mb-5 ml-5 font-medium text-red-600">  {estate.area}</span></p>

                    <p className="mb-5 text-sm font-medium"> {estate.location} 
                            <span className="ml-20 text-sm"> {estate.date}</span>
                    </p>
                
                </div>
            </div>
        </div>
    )
}

export default EsInf