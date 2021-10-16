import React from 'react'
import './ManageUser.css'
import UserForm from './../../../components/manage_user/UserForm/UserForm';
import UserTable from './../../../components/manage_user/UserTable/UserTable';

export default function ManageUser() {
    return (
        <div className='mt-2'>
            <div className='bg-white flex justify-center rounded-sm p-2'>
                <div className='w-full lg:w-2/5'>
                    <UserForm />
                </div>
            </div>
            <div className='bg-white mt-2 rounded-sm p-2'>
                <UserTable />
            </div>
        </div>
    )
}
