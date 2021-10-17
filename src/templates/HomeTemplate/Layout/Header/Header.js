/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import {CURRENT_USER} from './../../../../util/settings/Constant';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../../redux/actions/UserAction';

export default function Header() {

    const dispatch = useDispatch();

    const renderUserName = () => {
        const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
        if (currentUser) {
            return <div>{currentUser.hoTen} | <a href='/login' onClick={()=> {dispatch(logoutAction())}}>Đăng Xuất</a></div>
        } else {
            return <div><a href='/login' onClick={()=> {dispatch(logoutAction())}}>Đăng Nhập</a></div>
        }
    }

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-md navbar-light py-md-0">
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
                        <a href="#" className="nav-link">Tin Tức</a>
                        <a href="#" className="nav-link">Ứng Dụng</a>
                    </div>
                    <div className="right">
                        {renderUserName()}
                        <select>
                            <option>Hồ Chí Minh</option>
                            <option>Hà Nội</option>
                            <option>Đà Nẵng</option>
                            <option>Hải Phòng</option>
                        </select>
                    </div>
                </div>
            </nav>
        </header>


    )
}
