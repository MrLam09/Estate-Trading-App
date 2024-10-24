import React, { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import { useForm } from 'react-hook-form';
import { useAddEstateinfMutation } from '../../redux/estate/estateAPI';

const AddEst = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setImageFile] = useState(null);
    const [imageFileName, setImageFileName] = useState("");
    const [addEstateinf, {isLoading, isError}] = useAddEstateinfMutation();
    const onSubmit = async (data) => {
    
        const newBookData = {
            ...data,
            image: imageFileName
        }
        console.log(newBookData);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setImageFile(file);
            setImageFileName(file.name);
        }
    }
    return (
        <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                {/* Reusable Input Field for Title */}
                <InputField
                label="Title"
                name="title"
                placeholder="Enter book title"
                register={register}
                />

                {/* Reusable Textarea for Description */}
                <InputField
                label="Illustrates"
                name="illustrates"
                placeholder="Enter estate illustrates"
                type="textarea"
                register={register}

                />

                {/* Reusable Select Field for Category */}
                <SelectField
                label="Type"
                name="Type"
                options={[
                    { value: '', label: 'Choose A Type' },
                    { value: 'Mua bán', label: 'Mua bán' },
                    { value: 'Cho thuê', label: 'Cho thuê' },

                    // Add more options as needed
                ]}
                register={register}
                />

                {/* Trending Checkbox */}
                <InputField
                    label="Location"
                    name="location"
                    placeholder="Enter estate location"
                    type="textarea"
                    register={register}

                />

                {/* Price */}
                <InputField
                label="Price"
                name="price"
                type="textarea"
                placeholder="Price"
                register={register}
                
                />

                {/* Area */}
                <InputField
                label="Area"
                name="area"
                type="textarea"
                placeholder="Area"
                register={register}
                
                />

                {/* Cover Image Upload */}
                <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
                {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
                {
                    isLoading ? <span className="">Adding.. </span> : <span>Add Book</span>
                }
                </button>
            </form>
        </div>
    )
}

export default AddEst