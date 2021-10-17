/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { logoutAction } from '../../../../redux/actions/UserAction';
import { CURRENT_USER, ROLE_ADMIN } from '../../../../util/settings/Constant'
import './AdminHeader.css'

export default function AdminHeader() {

    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));

    const dispatch = useDispatch();
    
    if (currentUser?.maLoaiNguoiDung !== ROLE_ADMIN) {
        return <Redirect to='/login' />
    }

    return (
        <div className="p-2 bg-white rounded-sm flex items-center justify-end">
            <img src="/images/default-avatar.png" className="w-9 rounded-full" alt='' />
            <div className='ml-2'>
                {currentUser.hoTen} |
                <a className="ml-2 text-center text-gray-500" href="/login" onClick={() => {dispatch(logoutAction())}}>
                    Đăng Xuất
                </a>
            </div>
        </div>
    )
}
