import { Button, Input } from 'antd'
import React from 'react'
import { useFormik } from 'formik';
import './Login.css'
import { loginAction } from '../../redux/actions/UserAction';
import { useDispatch } from 'react-redux';
import { CURRENT_USER } from '../../util/settings/Constant';
import { Redirect } from 'react-router';

export default function Login(props) {

    const dispatch = useDispatch();
    const login = async (loginModel) => {
        const action = await loginAction(loginModel);
        dispatch(action);
    }
    
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '' 
        },
        onSubmit: values => {
            login(values);
        },
    });
    
    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
    if (currentUser) {
        return <Redirect to='/' />
    }

    return (
        <div className='bg-gray-50 h-screen flex items-center justify-center'>
            <div className='bg-white rounded-sm border-gray-300 border-2 p-2 w-full max-w-xs'>
                <h2 className='pb-2 border-b border-gray-300'>ĐĂNG NHẬP</h2>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <p>Tài Khoản</p>
                            <Input className='custom-input' id='inpTaiKhoan' name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan}/>
                        </div>
                        <div className='form-group'>
                            <p>Mật Khẩu</p>
                            <Input.Password className='custom-input' id='inpMatKhau' name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau}/>
                        </div>
                        <div className='flex justify-end'>
                            <Button htmlType='submit' type="primary">Đăng nhập</Button>
                        </div>
                        <div className='flex justify-end mt-2'>
                            <a href='/register' className='text-blue-500'>Chưa có tài khoản? Đăng ký ngay</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
