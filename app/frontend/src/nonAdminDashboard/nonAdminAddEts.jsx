import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import InputField from '../dashboard/addEst/InputField';
import SelectField from '../dashboard/addEst/SelectField';
import { useAddEstateinfMutation } from '../redux/estate/estateAPI';

const NonAdminAddEts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setImageFile] = useState(null);
    const [imageFileName, setImageFileName] = useState("");
    const [addEstateinf, {isLoading, isError}] = useAddEstateinfMutation();
    const onSubmit = async (data) => {
    
        const newEtsData = {
            ...data,
            image: imageFileName
        }
        console.log(newEtsData);
        try {
            await addEstateinf(newEtsData).unwrap();
            alert('Added successfully')
                reset();
                setImageFile(null);
                setImageFileName("");
        } catch (error) {
            console.log(error);
            alert('Failed to added, please try again')
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setImageFile(file);
            setImageFileName(file.name);
        }
    }
    return (
        <div className="max-w-lg p-3 mx-auto bg-white rounded-lg shadow-md md:p-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Add New Information</h2>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                {/* Reusable Input Field for Title */}
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

                {/* Cover Image Upload */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">Cover Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="w-full mb-2" />
                        {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-2 font-bold text-white bg-green-500 rounded-md">
                {
                    isLoading ? <span className="">Adding.. </span> : <span>Thêm BĐS</span>
                }
                </button>
            </form>
        </div>
    )
}

export default NonAdminAddEts