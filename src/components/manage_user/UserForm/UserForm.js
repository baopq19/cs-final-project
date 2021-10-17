import React from 'react'
import './UserForm.css'
import { Input, Button, Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function UserForm() {
    let buttonSize = 'large';
    const { Option } = Select;
    
    return (
        <div>
            <h2 className='pb-2 border-b border-gray-300'>Add/Edit User</h2>
            <form>
                <div className='form-group'>
                    <p>Tài Khoản</p>
                    <Input  id='inpTenTaiKhoan'/>
                </div>
                <div className='form-group'>
                    <p>Mật Khẩu</p>
                    <Input.Password  id='inpMatKhau'/>
                </div>
                <div className='form-group'>
                    <p>Họ tên</p>
                    <Input  id='inpHoTen'/>
                </div>
                <div className='form-group'>
                    <p>Email</p>
                    <Input  id='inpEmail'/>
                </div>
                <div className='form-group'>
                    <p>Mã nhóm</p>
                    <Input  id='inpMaNhom'/>
                </div>
                <div className='form-group'>
                    <p>Loại Người Dùng</p>
                    <Select defaultValue="KhachHang">
                        <Option value="KhachHang">Khách Hàng</Option>
                        <Option value="QuanTri">Quản Trị</Option>
                    </Select>
                </div>
                
                <div className='flex h-full items-end justify-end'>
                    <Button size={buttonSize} icon={<EditOutlined />} className='mr-2'>Edit</Button>
                    <Button size={buttonSize} type="primary">Add Movie</Button>
                </div>
            </form>
        </div>
    )
}
