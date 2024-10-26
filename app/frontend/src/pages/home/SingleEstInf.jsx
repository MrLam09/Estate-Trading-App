import React from 'react'

import { useParams } from 'react-router-dom'
import { useFetchEstateByIdQuery } from '../../redux/estate/estateAPI';
import { getImgUrl } from '../../utils/getImgUrl';

const SingleEstInf = () => {
    const {id} = useParams();
    const {data: estate, isLoading, isError} = useFetchEstateByIdQuery(id);

    if(isLoading) {
        return <p>Loading...</p>
    }
    if(isError) {
        return <p>Something went wrong</p>
    }
    return (
        <div className="p-24 shadow-md">

                <div className=''>
                    <div>
                        <img
                            src={`${getImgUrl(estate.image)}`}
                            alt={estate.title}
                            className="mb-8"
                        />
                    </div>
                    <h1 className="mb-6 text-2xl font-bold">{estate.title}</h1>
                    <div className='mb-5'>
                        <p className="mb-2 text-gray-700"><strong>Địa điểm:</strong> {estate.location}
                        <span className='ml-10'><strong>Giá: </strong> {estate.price}</span>
                        <span className='ml-10'><strong>Diện tích: </strong> {estate.area}</span>
                        </p>
                        <p className="mb-4 text-gray-700">
                            <strong>Ngày đăng: </strong> {new Date(estate.date).toLocaleDateString()}
                        </p>
                        <p className="mb-4 text-gray-700">
                            <strong>Số phòng ngủ: </strong> {estate.num_bedroom}
                            <span className='ml-10'><strong>Số toilet: </strong>{estate.num_wc}</span>
                            <span className='ml-10'><strong>Tầng: </strong> {estate.num_floor}</span>

                        </p>
                        <p className="text-gray-700"><strong>Description:</strong> {estate.illustrate}</p>
                    </div>

                    
                </div>
            </div>
    )
}

export default SingleEstInf