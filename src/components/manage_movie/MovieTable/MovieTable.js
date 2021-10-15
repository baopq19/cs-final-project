import React, { useEffect } from 'react'
import './MovieTable.css'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Table, Tag } from 'antd';
import { searchMovieAction } from './../../../redux/actions/MovieAction';

export default function MovieTable() {

    const { arrSearch } = useSelector(state => state.MovieReducer);
    const { Search } = Input;
    const dispatch = useDispatch();
    
    let keyWord = '';
    let currentPage = 1;
    const pageSize = 5;
    

    const searchMovie = (keyWord, page, itemsPerPage) => {
        const action = searchMovieAction(keyWord, page, itemsPerPage);
        dispatch(action);
    }
    
    const onSearch = value => {
        keyWord = value;
        searchMovie(keyWord, currentPage, pageSize);
    };

    useEffect(() => {
        //Default search to get all data when entering page
        searchMovie('', currentPage, pageSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onPaging = tableInfo => {
        currentPage = tableInfo.current;
        searchMovie(keyWord, currentPage, pageSize);
    }

    const columns = [
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            key: 'moTa',
            render: (hinhAnh, phim) => {
                return <img src={hinhAnh} style={{ width: '200px', height: '250px' }} alt={phim.moTa}></img>
            },
            width: '200px',
        },
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            key: 'maPhim',
            width: '7%',
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            width: '12%',
        },
        {
            title: 'Mô Tả',
            dataIndex: 'moTa',
            key: 'moTa',
            width: '20%',
        },
        {
            title: 'Ngày Khởi Chiếu',
            dataIndex: 'ngayKhoiChieu',
            key: 'moTa',
            width: '10%',
        },
        {
            title: 'Sắp Chiếu',
            dataIndex: 'sapChieu',
            key: 'sapChieu',
            render: sapChieu => {
                if (sapChieu)
                    return <Tag color='green'>
                        Sắp chiếu
                    </Tag>;
                else
                    return <Tag color='red'>
                        Không
                    </Tag>;
            },
            width: '7%',
        },
        {
            title: 'Đang Chiếu',
            dataIndex: 'dangChieu',
            key: 'dangChieu',
            render: dangChieu => {
                if (dangChieu)
                    return <Tag color='green'>
                        Đang chiếu
                    </Tag>;
                else
                    return <Tag color='red'>
                        Không
                    </Tag>;
            },
            width: '7%',
        },
        {
            title: 'Đánh giá',
            dataIndex: 'danhGia',
            key: 'danhGia',
            width: '7%',
        },
        {
            title: 'Hot',
            dataIndex: 'hot',
            key: 'hot',
            render: hot => {
                if (hot)
                    return <Tag color='#f50'>
                        Hot
                    </Tag>;
                else
                    return <Tag>
                        Không
                    </Tag>;
            },
            width: '5%',
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
            <h2 className='pb-2 border-b border-gray-300'>Manage Movie</h2>
            <div className='mb-4'>
                <p className='mb-0'>Tìm kiếm</p>
                <Search placeholder="Search by movie" allowClear enterButton="Search" size="large" onSearch={onSearch} />
            </div>
                    
            <Table rowKey="maPhim" sticky dataSource={arrSearch.items} columns={columns} onChange={onPaging} pagination={{ total: arrSearch.totalCount, pageSize: pageSize}}/>
        </div>
    )
}
