import React, { useEffect } from 'react'
import './UserTable.css'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Table, Tag } from 'antd';
import { searchUserAction } from './../../../redux/actions/UserAction';

export default function UserTable() {
    
    const { arrSearch } = useSelector(state => state.UserReducer);
    const { Search } = Input;
    const dispatch = useDispatch();
    
    let keyWord = '';
    let currentPage = 1;
    const pageSize = 10;
    

    const searchUser = (keyWord, page, itemsPerPage) => {
        const action = searchUserAction(keyWord, page, itemsPerPage);
        dispatch(action);
    }
    
    const onSearch = value => {
        keyWord = value;
        searchUser(keyWord, currentPage, pageSize);
    };

    useEffect(() => {
        //Default search to get all data when entering page
        searchUser('', currentPage, pageSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onPaging = tableInfo => {
        currentPage = tableInfo.current;
        searchUser(keyWord, currentPage, pageSize);
    }

    const columns = [
        {
            title: 'Họ Tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Tài Khoản',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số ĐT',
            dataIndex: 'soDt',
            key: 'soDt',
        },
        {
            title: 'Role',
            dataIndex: 'maLoaiNguoiDung',
            key: 'loaiNguoiDung',
            render: loaiNguoiDung => {
                if (loaiNguoiDung === 'KhachHang')
                    return <Tag color='green'>
                        Khách Hàng
                    </Tag>;
                else
                    return <Tag color='red'>
                        Quản Trị
                    </Tag>;
            },
        },
        {
            title: 'Hành Động',
            dataIndex: 'maPhim',
            render: maPhim => {
                return <div className='flex'>
                    <Button value={maPhim} className='mr-2'>Edit</Button>
                    <Button type='danger' value={maPhim}>Xoá</Button>
                </div>
            }
        },
        
    ];
    return (
        <div>
            <div>
                <h2 className='pb-2 border-b border-gray-300'>Manage User</h2>
                <div className='mb-4'>
                    <p className='mb-0'>Tìm kiếm</p>
                    <Search placeholder="Search by name" allowClear enterButton="Search" size="large" onSearch={onSearch} />
                </div>
                        
                <Table rowKey="taiKhoan" sticky dataSource={arrSearch.items} columns={columns} onChange={onPaging} pagination={{ total: arrSearch.totalCount, pageSize: pageSize}}/>
            </div>
        </div>
    )
}
