/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editUserAction } from '../../redux/actions/UserAction';
import { CURRENT_USER, GROUP_ID } from '../../util/settings/Constant';
import './Profile.css';

export default function Profile() {

    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
    const setEditUser = () => {
        formik.setFieldValue('taiKhoan', currentUser.taiKhoan);
        formik.setFieldValue('matKhau', '');
        formik.setFieldValue('hoTen', currentUser.hoTen);
        if (currentUser.soDT) {
            formik.setFieldValue('soDt', currentUser.soDT);
        } else {
            formik.setFieldValue('soDt', currentUser.soDt);
        }
        formik.setFieldValue('email', currentUser.email);
    }
    useEffect(() => {
        setEditUser();
    }, []);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDt: '',
            email: '',
            maNhom: GROUP_ID,
            maLoaiNguoiDung: currentUser.maLoaiNguoiDung,
        },
        onSubmit: async values => {
            const result = await dispatch(editUserAction(values));
            if (result) {
                localStorage.setItem(CURRENT_USER, JSON.stringify(values));
                alert('Cập nhật thông tin thành công');
            }
        },
    });

    return (
        <div className='flex justify-center bg-gray-200 mt-1'>
            <div className='mt-52 mb-44 p-2 rounded bg-white w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 2xl:w-1/4'>
                <h2 className='pb-2 border-b border-gray-300'>Thông tin tài khoản</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <p>Tài Khoản</p>
                        <Input disabled name='taiKhoan' value={formik.values.taiKhoan} onChange={formik.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <p>Mật Khẩu Mới</p>
                        <Input.Password name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} placeholder='Để trống nếu mật khẩu không đổi'/>
                    </div>
                    <div className='form-group'>
                        <p>Họ tên</p>
                        <Input name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange} required/>
                    </div>
                    <div className='form-group'>
                        <p>Số ĐT</p>
                        <Input name='soDt' value={formik.values.soDt} onChange={formik.handleChange} required/>
                    </div>
                    <div className='form-group'>
                        <p>Email</p>
                        <Input name='email' value={formik.values.email} onChange={formik.handleChange} required/>
                    </div>
                    
                    <div className='flex h-full items-end justify-end'>
                        <Button size='large' htmlType='submit' type="primary">Cập Nhật</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
