/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './SideBar.css'

export default function SideBar() {

    const navItems = [
        {
            text: 'Trang chủ',
            path: '/',
            target: '_blank'
        },
        {
            text: 'Quản lý phim',
            path: '/admin/movie'
        },
        {
            text: 'Quản lý User',
            path: '/admin/user'
        },
    ]

    const renderNav = () => {
        return navItems.map((item, index) => {
            return <li className="pb-2.5" key={index}>
                    <a className="admin-nav-link bg-blue-600 rounded-sm" href={item.path} target={item.target}>
                        {item.text}
                    </a>
                </li>
        })
    }

    return (
        <div className="sbar p-2 bg-gradient-to-t from-indigo-500 to-blue-800 sticky top-0 h-screen">
            <div className="">
                <img className="mx-auto mb-10 w-12 h-12" src="/images/web-logo.png" alt =''/>
            </div>
            <ul>
                {renderNav()}
            </ul>
        </div>
    )
}
