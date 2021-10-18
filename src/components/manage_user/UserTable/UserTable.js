import React, { useEffect, useState } from 'react'
import './UserTable.css'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Table, Tag } from 'antd';
import { deleteUserAction, searchUserAction } from './../../../redux/actions/UserAction';

export default function UserTable() {
    
    const { arrSearch } = useSelector(state => state.UserReducer);
    const { Search } = Input;
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [keyWord, setKeyWord] = useState('');
    const [pageSize, setPageSize] = useState(10);
    
    //fetch
    const searchUser = (newKeyword, page, itemsPerPage) => {
        const action = searchUserAction(newKeyword, page, itemsPerPage);
        dispatch(action);
    }
    
    const onSearch = value => {
        setKeyWord(value);
        setCurrentPage(1);
    };

    useEffect(() => {
        searchUser(keyWord, currentPage, pageSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, keyWord, pageSize])

    const onChangeHandler = pagingInfo => {
        setCurrentPage(pagingInfo.current);
        setPageSize(pagingInfo.pageSize);
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
            dataIndex: '',
            render: (user) => {
                return <div className='flex'>
                    <Button type='danger' onClick={async () => {
                        if (window.confirm('Bạn muốn xoá ' + user.taiKhoan)) {
                            const result = await dispatch(deleteUserAction(user.taiKhoan));
                            if (result) {
                                dispatch(searchUserAction(keyWord, currentPage, pageSize));
                            }
                        }
                    }} >Xoá</Button>
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
                        
                <Table rowKey='taiKhoan' sticky dataSource={arrSearch.items} columns={columns} onChange={onChangeHandler} pagination={{total: arrSearch.totalCount, pageSize: pageSize, current: currentPage}}/>
            </div>
        </div>
    )
}
