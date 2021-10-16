import { Button, Input } from 'antd'
import React from 'react'
import './Login.css'

export default function Login(props) {
    return (
        <div className='bg-gray-200 h-screen flex items-center justify-center'>
            <div className='bg-white rounded-sm p-2 w-full max-w-xs'>
                <h2 className='pb-2 border-b border-gray-300'>ĐĂNG NHẬP</h2>
                <div>
                    <form>
                        <div className='form-group'>
                            <p>Tài Khoản</p>
                            <Input  id='inpTaiKhoan'/>
                        </div>
                        <div className='form-group'>
                            <p>Mật Khẩu</p>
                            <Input.Password  id='inpMatKhau'/>
                        </div>
                        <div className='flex justify-end'>
                            <Button type="primary">Đăng nhập</Button>
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
