/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './UserForm.css'
import { Input, Button, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { addUserAction, disableEditUserAction, editUserAction } from '../../../redux/actions/UserAction';
import { GROUP_ID } from '../../../util/settings/Constant';

export default function UserForm() {
    let buttonSize = 'large';

    const { edit } = useSelector(state => state.UserReducer);
    const { Option } = Select;
    const dispatch = useDispatch();

    const renderButton = () => {
        if (edit.editing) {
            return <div>
                    <Button size={buttonSize} className='mr-2' onClick={() => { dispatch(disableEditUserAction()); clearEditUser();}}>Huỷ</Button>
                    <Button size={buttonSize} htmlType='submit' type='primary' icon={<EditOutlined />} className='mr-2'>Edit</Button>
                </div>
        } else {
            return <Button size={buttonSize} htmlType='submit' type="primary">Add User</Button>
        }
    }
    const handleSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDt: '',
            email: '',
            maNhom: GROUP_ID,
            maLoaiNguoiDung: 'KhachHang',
        },
        onSubmit: values => {
            console.log(values);
            //Call api
            if (edit.editing) {
                dispatch(editUserAction(values));
            } else {
                dispatch(addUserAction(values));
            }
        },
    });

    const setEditingUser = () => {
        const editUser = edit.editUser;
        formik.setFieldValue('taiKhoan', editUser.taiKhoan);
        formik.setFieldValue('matKhau', editUser.matKhau);
        formik.setFieldValue('hoTen', editUser.hoTen);
        formik.setFieldValue('soDt', editUser.soDt);
        formik.setFieldValue('email', editUser.email);
        formik.setFieldValue('maLoaiNguoiDung', editUser.maLoaiNguoiDung);
    }

    const clearEditUser = () => {
        formik.setFieldValue('taiKhoan', '');
        formik.setFieldValue('matKhau', '');
        formik.setFieldValue('hoTen', '');
        formik.setFieldValue('soDt', '');
        formik.setFieldValue('email', '');
    }

    useEffect(() => {
        if (edit.editing) {
            setEditingUser();
        }
    }, [edit.editUser])

    
    
    return (
        <div>
            <h2 className='pb-2 border-b border-gray-300'>Add/Edit User</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <p>Tài Khoản</p>
                    <Input name='taiKhoan' value={formik.values.taiKhoan} onChange={formik.handleChange}/>
                </div>
                <div className='form-group'>
                    <p>Mật Khẩu</p>
                    <Input.Password name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange}/>
                </div>
                <div className='form-group'>
                    <p>Họ tên</p>
                    <Input name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange}/>
                </div>
                <div className='form-group'>
                    <p>Số ĐT</p>
                    <Input name='soDt' value={formik.values.soDt} onChange={formik.handleChange}/>
                </div>
                <div className='form-group'>
                    <p>Email</p>
                    <Input name='email' value={formik.values.email} onChange={formik.handleChange}/>
                </div>
                <div className='form-group'>
                    <p>Loại Người Dùng</p>
                    <Select name='maLoaiNguoiDung' value={formik.values.maLoaiNguoiDung} onChange={handleSelect('maLoaiNguoiDung')}>
                        <Option value="KhachHang">Khách Hàng</Option>
                        <Option value="QuanTri">Quản Trị</Option>
                    </Select>
                </div>
                
                <div className='flex h-full items-end justify-end'>
                    {renderButton()}
                </div>
            </form>
        </div>
    )
}
