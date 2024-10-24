import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseURL from '../../utils/getBaseURL'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/estateinfs`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const estateAPI = createApi({
    reducerPath: 'estateAPI',
    baseQuery,
    tagTypes: ['Estateinfs'],
    endpoints: (builder) => ({
        fetchAllEstate: builder.query({
            query: () => "/",
            providesTags: ['Estateinfs']
        }),
        fetchEstateById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{type: 'Estateinfs', id}]
        }),
        addEstateinf: builder.mutation({
            query: (data) => ({
                url: '/create-estate-inf',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Estateinfs']
        }),
        updateEstateinf: builder.mutation({
            query: ({id, ...data}) => ({
                url: `/edit/${id}`,
                method: 'PUT',
                body: data,
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }),
            invalidatesTags: ['Estateinfs']
        }),
        deleteEstateinf: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Estateinfs']
        })
    })
})

export const { useFetchAllEstateQuery, useFetchEstateByIdQuery, 
    useAddEstateinfMutation, useUpdateEstateinfMutation, useDeleteEstateinfMutation } = estateAPI;
export default estateAPI