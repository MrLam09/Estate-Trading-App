import React, { useEffect } from 'react'
import SelectField from '../addEst/SelectField'
import InputField from '../addEst/InputField'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchEstateByIdQuery, useUpdateEstateinfMutation } from '../../redux/estate/estateAPI';
import Loading from '../../components/Loading';
import axios from 'axios';
import getBaseURL from '../../utils/getBaseURL';

const UpdateEts = () => {
    const {id} = useParams();
    const {data: estateData, isLoading, isError, refetch} = useFetchEstateByIdQuery(id);
    const [updateEstateinf,] = useUpdateEstateinfMutation();
    const { register, handleSubmit, setValue, reset } = useForm();
    
    useEffect(() => {
        if(estateData) {
            setValue('title', estateData.title);
            setValue('location', estateData.location);
            setValue('price', estateData.price);
            setValue('area', estateData.area);
            setValue('date', estateData.date);
            setValue('illustrate', estateData.illustrate);
            setValue('types', estateData.types);
            setValue('option', estateData.option);
            setValue('num_bedroom', estateData.num_bedroom);
            setValue('num_wc', estateData.num_wc);
            setValue('num_floor', estateData.num_floor);
        }
    }, [estateData, setValue])
    const onSubmit = async (data) => {
        const updateEstData = {
            title: data.title,
            location: data.location,
            price: data.price,
            area: data.area,
            date: data.date,
            illustrate: data.illustrate,
            types: data.types,
            option: data.option,
            num_bedroom: Number(data.num_bedroom),
            num_wc: Number(data.num_wc),
            num_floor: Number(data.num_floor),
        }
        try{
            await axios.put(`${getBaseURL()}/api/estateinfs/edit/${id}`, updateEstData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Cập nhật BDS thành công');
            await refetch();
        }catch {
            console.log('Cập nhật thất bại')
            alert('Cập nhật thất bại')
        }
    }

    if(isLoading) return <Loading/>
    if(isError) return <div>Something went wrong</div>
    return (
        <div className="max-w-lg p-3 mx-auto bg-white rounded-lg shadow-md md:p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Cập nhật thông tin</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
                label="Tiêu đề"
                name="title"
                placeholder="Nhập tên bài đăng"
                register={register}
                />


                {/* Trending Checkbox */}
                <InputField
                    label="Tỉnh, thành phố"
                    name="location"
                    placeholder="Nhập tỉnh, thành phố"
                    type="textarea"
                    register={register}

                />

                {/* Price */}

                <InputField
                label="Giá"
                name="price"
                type="textarea"
                placeholder="Nhập giá"
                register={register}
                
                />

                {/* Area */}
                <InputField
                label="Diện tích"
                name="area"
                type="textarea"
                placeholder="Nhập diện tích"
                register={register}
                
                />

                {/* Reusable Textarea for Description */}
                <InputField
                label="Ngày đăng"
                name="date"
                placeholder="Ngày đăng"
                type="textarea"
                register={register}

                />

                {/* Reusable Textarea for Description */}
                <InputField
                label="Chi tiết về BĐS"
                name="illustrate"
                placeholder="Nhập thông tin thêm"
                type="textarea"
                register={register}

                />

                {/* Reusable Select Field for Category */}
                <SelectField
                label="Cách thức nhượng quyền"
                name="types"
                options={[
                    { value: '', label: 'Choose A Type' },
                    { value: 'Mua bán', label: 'Mua bán' },
                    { value: 'Cho thuê', label: 'Cho thuê' },

                    // Add more options as needed
                ]}
                register={register}
                />

                <InputField
                label="Loại BĐS"
                name="option"
                placeholder="VD: Mua bán nhà đất, mua bán căn hộ chung cư, v.v"
                type="textarea"
                register={register}

                />
                
                {/* Area */}
                <InputField
                label="Num Bedroom"
                name="num_bedroom"
                type="number"
                placeholder=""
                register={register}
                
                />
                {/* Area */}
                <InputField
                label="Num Toilet"
                name="num_wc"
                type="number"
                placeholder=""
                register={register}
                
                />
                {/* Area */}
                <InputField
                label="Num Floor"
                name="num_floor"
                type="number"
                placeholder=""
                register={register}
                
                />

            <button type="submit" className="w-full py-2 font-bold text-white bg-blue-500 rounded-md">
            Update
            </button>
        </form>
        </div>
    )
}

export default UpdateEts