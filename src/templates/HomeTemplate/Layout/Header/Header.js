/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import {CURRENT_USER, ROLE_ADMIN} from './../../../../util/settings/Constant';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../../redux/actions/UserAction';

export default function Header() {

    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));

    const renderUserName = () => {
        if (currentUser) {
            return <div>
                <a href='/login' className='text-black font-bold mr-2'>{currentUser.hoTen}</a>
                -
                {renderAdminNav()}
                <a href='/login' className='text-gray-500 mx-2' onClick={() => { dispatch(logoutAction()) }}>Đăng Xuất</a>
            </div>
        } else {
            return <div><a href='/login' className='mr-2' onClick={()=> {dispatch(logoutAction())}}>Đăng Nhập</a></div>
        }
    }

    const renderAdminNav = () => {
        if (currentUser?.maLoaiNguoiDung === ROLE_ADMIN) {
            return <a href='/admin/movie' className='text-black m-2 border-r-2 pr-2'>Quản trị</a>
        }
    }

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-xl navbar-light py-md-0">
                <a className="navbar-brand" href="/">
                    <img src="/images/web-logo.png" alt =''/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <a href="#" className="nav-link">Lịch Chiếu</a>
                        <a href="#" className="nav-link">Cụm Rạp</a>
                    </div>
                    <div className="right">
                        {renderUserName()}
                    </div>
                </div>
            </nav>
        </header>


    )
}
