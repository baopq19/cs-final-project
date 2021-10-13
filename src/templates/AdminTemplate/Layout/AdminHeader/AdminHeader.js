/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './AdminHeader.css'

export default function AdminHeader() {
    return (
        <div className="p-2 bg-white rounded-sm flex items-center justify-end">
            <img src="/images/default-avatar.png" className="w-9 rounded-full" alt='' />
            <a className="block w-36 text-center text-gray-400" href="#">
                Đăng Nhập
            </a>
        </div>
    )
}
