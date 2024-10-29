import React from 'react'
import { useDeleteEstateinfMutation, useFetchAllEstateQuery } from '../../redux/estate/estateAPI';
import { Link, useNavigate } from 'react-router-dom';

const ManageEst = () => {
    const navigate = useNavigate();

    const {data: estates, refetch} = useFetchAllEstateQuery();

    const [deleteEstate] = useDeleteEstateinfMutation();

    // Handle deleting a book
    const handleDeleteEstate = async (id) => {
        try {
            await deleteEstate(id).unwrap();
            alert('Estate information deleted successfully!');
            refetch();

        } catch (error) {
            console.error('Failed to delete estate information:', error.message);
            alert('Failed to delete estate information. Please try again.');
        }
    };

    // Handle navigating to Edit Book page
    const handleEditClick = (id) => {
        navigate(`dashboard/edit-ets-inf/${id}`);
    };
    return (
        <section>
            <div>
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg ">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-base font-semibold text-blueGray-700">All Books</h3>
                            </div>
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
                                <button className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none" type="button">See all</button>
                            </div>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse ">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                                        #
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                                        Estate Information
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                                        Type
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    estates && estates.map((estate, index) => (
                                        <tr key={index}>
                                        <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap text-blueGray-700 ">
                                        {index + 1}
                                        </th>
                                        <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap ">
                                            {estate.title}
                                        </td>
                                        <td className="p-4 px-6 text-xs border-t-0 border-l-0 border-r-0 align-center whitespace-nowrap">
                                        {estate.option}
                                        </td>
                                        <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">

                                            ${estate.price}
                                        </td>
                                        <td className="p-4 px-6 space-x-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">

                                            <Link to={`/dashboard/edit-ets-inf/${estate._id}`} className="mr-2 font-medium text-indigo-600 hover:text-indigo-700 hover:underline underline-offset-2">
                                                Edit
                                            </Link>
                                            <button 
                                            onClick={() => handleDeleteEstate(estate._id)}
                                            className="px-4 py-1 mr-2 font-medium text-white bg-red-500 rounded-full">Delete</button>
                                        </td>
                                    </tr> 
                                    ))
                                }
                

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ManageEst