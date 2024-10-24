import React from 'react'
import Esinf from '../../estateinf/esinf'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import Swiper styles
import { Navigation, Pagination } from 'swiper/modules';
import { useFetchAllEstateQuery } from '../../redux/estate/estateAPI';

const regions = [ "Khu vực",
    "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh",
    "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau",
    "Cần Thơ", "Cao Bằng", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai",
    "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương",
    "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", 
    "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định",
    "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", 
    "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", 
    "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang",
    "Hồ Chí Minh", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];

// const options = ["Mua bán", "Cho thuê"]
const List1 = () => {
    // const [estateInf, setestateInf] = useState([]);
    const [region, setRegion] = useState(regions[0]);

    const {data: estates = []} = useFetchAllEstateQuery();
    

    const findRegions = region === 'Khu vực' ? estates 
    : estates.filter(estate => estate.location === region);

    return (
        <div>
            <h2 className='mb-6 text-3xl font-semibold'>Danh sách BĐS</h2>
                {/* category filtering */}
                <div className='flex items-center mb-8'>
                    <select
                        onChange={(e) => setRegion(e.target.value)}
                        name="region" id="region" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                        {
                            regions.map((region, index) => (
                                <option key={index} value={region}>{region}</option>
                            ))
                        }
                    </select>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={50}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1180: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
            {
                findRegions.length > 0 && findRegions.map((estate, index) => (
                    <SwiperSlide key={index}>
                        <Esinf estate={estate}/>
                    </SwiperSlide>
                ))
            }
            
            
            </Swiper>
            
        </div>
    )
}

export default List1