/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './SideBar.css'

export default function SideBar() {
    return (
        <div className="sbar p-2 bg-gradient-to-t from-indigo-500 to-blue-800 sticky top-0 h-screen">
            <div className="">
                <img className="mx-auto mb-10 w-12 h-12" src="/images/web-logo.png" alt =''/>
            </div>
            <ul>
                <li className="pb-2.5">
                    <a className="admin-nav-link bg-blue-600 rounded-sm" href="#">
                        Quản lý rạp
                    </a>
                </li>
                <li className="pb-2.5">
                    <a className="admin-nav-link bg-blue-600 rounded-sm" href="#">
                        Quản lý phim
                    </a>
                </li>
                <li className="pb-2.5">
                    <a className="admin-nav-link bg-blue-600 rounded-sm" href="#">
                        Quản lý user
                    </a>
                </li>
            </ul>
        </div>
    )
}
