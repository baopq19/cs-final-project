/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router';
import { ROLE_ADMIN, CURRENT_USER } from '../../util/settings/Constant';
import './AdminTemplate.css';
import AdminHeader from './Layout/AdminHeader/AdminHeader';
import SideBar from './Layout/SideBar/SideBar';

export default function AdminTemplate(props) {
    const { Component, ...restProps } = props;

    const currentUser = localStorage.getItem(CURRENT_USER);
    
    if (currentUser) {
        if (currentUser.maLoaiNguoiDung !== ROLE_ADMIN) {
            <Redirect to='/' />
        }
    }

    return <Route {... restProps} render={(propsRoute) => { //props.location, props.history, props.match

        return <Fragment>
            <div className="flex">
                <SideBar />
                <div className='page p-2 bg-gray-200'>
                    <AdminHeader />
                    <Component {...propsRoute}/>
                </div>
            </div>
            
        </Fragment>
    }} />
}
