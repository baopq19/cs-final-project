/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Redirect } from 'react-router';
import { CURRENT_USER, ROLE_ADMIN } from '../../../../util/settings/Constant'
import './AdminHeader.css'

export default function AdminHeader() {

    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
    
    if (currentUser.maLoaiNguoiDung !== ROLE_ADMIN) {
        return <Redirect to='/login' />
    }

    return (
        <div className="p-2 bg-white rounded-sm flex items-center justify-end">
            <img src="/images/default-avatar.png" className="w-9 rounded-full" alt='' />
            <a className="block w-36 text-center text-gray-400" href="#">
                {currentUser.hoTen}
            </a>
        </div>
    )
}
