import { Button, Input } from 'antd'
import React from 'react'
import './Register.css'

export default function Register() {
    return (
        <div className='bg-gray-200 h-screen flex items-center justify-center'>
            <div className='bg-white rounded-sm p-2 w-full max-w-xs'>
                <h2 className='pb-2 border-b border-gray-300'>ĐĂNG KÝ</h2>
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
                        <div className='form-group'>
                            <p>Họ Tên</p>
                            <Input  id='inpHoTen'/>
                        </div>
                        <div className='form-group'>
                            <p>Email</p>
                            <Input  id='inpEmail'/>
                        </div>
                        <div className='form-group'>
                            <p>SDT</p>
                            <Input id='inpSDT'/>
                        </div>
                        <div className='flex justify-end'>
                            <Button type="primary">Đăng Ký</Button>
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
