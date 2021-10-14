import React from 'react'
import './ManageMovie.css'
import MovieForm from '../../../components/manage_movie/MovieForm/MovieForm'
import MovieTable from '../../../components/manage_movie/MovieTable/MovieTable'

export default function ManageMovie() {
    return (
        <div className='mt-2'>
            <div className='bg-white flex justify-center rounded-sm p-2'>
                <div className='w-full lg:w-2/5'>
                    <MovieForm />
                </div>
            </div>
            <div className='bg-white mt-2 rounded-sm p-2'>
                <MovieTable />
            </div>
        </div>
    )
}
