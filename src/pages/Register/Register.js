import { Button, Input } from 'antd'
import React from 'react'
import './Register.css'
import { useFormik } from 'formik';
import { CURRENT_USER, GROUP_ID } from '../../util/settings/Constant';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/actions/UserAction';
import { Redirect } from 'react-router';

export default function Register() {

    const dispatch = useDispatch();

    const register = async (regisModel) => {
        const action = await registerAction(regisModel);
        dispatch(action);
    }

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUP_ID,
            hoTen: '',
        },
        onSubmit: values => {
            register(values);
        },
    });

    // const currentUser = localStorage.getItem(CURRENT_USER);
    // if (currentUser) {
    //     return <Redirect to='/' />
    // } 

    return (
        <div className='bg-gray-100 h-screen flex items-center justify-center'>
            <div className='bg-white border-2 border-gray-300 rounded-sm p-2 w-full max-w-xs'>
                <h2 className='pb-2 border-b border-gray-300'>ĐĂNG KÝ</h2>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <p>Tài Khoản</p>
                            <Input id='inpTaiKhoan' name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan}/>
                        </div>
                        <div className='form-group'>
                            <p>Mật Khẩu</p>
                            <Input.Password id='inpMatKhau' name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau}/>
                        </div>
                        <div className='form-group'>
                            <p>Họ Tên</p>
                            <Input id='inpHoTen' name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen}/>
                        </div>
                        <div className='form-group'>
                            <p>Email</p>
                            <Input id='inpEmail' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                        </div>
                        <div className='form-group'>
                            <p>SDT</p>
                            <Input id='inpSDT' name='soDt' onChange={formik.handleChange} value={formik.values.soDt}/>
                        </div>
                        <div className='flex justify-end'>
                            <Button htmlType='submit' type="primary">Đăng Ký</Button>
                        </div>
                        <div className='flex justify-end mt-2'>
                            <a href='/login' className='text-blue-500'>Quay về trang đăng nhập</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
