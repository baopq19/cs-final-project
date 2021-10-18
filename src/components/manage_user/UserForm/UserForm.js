/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './UserForm.css'
import { Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { addUserAction } from '../../../redux/actions/UserAction';
import { GROUP_ID } from '../../../util/settings/Constant';

export default function UserForm() {
    let buttonSize = 'large';

    const { Option } = Select;
    const dispatch = useDispatch();

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
        onSubmit: async values => {
            //Call api
            const result = await dispatch(addUserAction(values));
            console.log(result);
            if (result)
                clearInput();
        },
    });


    const clearInput = () => {
        formik.setFieldValue('taiKhoan', '');
        formik.setFieldValue('matKhau', '');
        formik.setFieldValue('hoTen', '');
        formik.setFieldValue('soDt', '');
        formik.setFieldValue('email', '');
    }
    
    
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
                    <Button size={buttonSize} htmlType='submit' type="primary">Add User</Button>
                </div>
            </form>
        </div>
    )
}
