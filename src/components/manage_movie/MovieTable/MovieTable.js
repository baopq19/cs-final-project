import React, { useEffect, useState } from 'react'
import './MovieTable.css'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Table, Tag } from 'antd';
import { deleteMovieAction, enableEditMovieAction, searchMovieAction } from './../../../redux/actions/MovieAction';
import { add } from 'lodash';

export default function MovieTable() {

    const { arrSearch } = useSelector(state => state.MovieReducer);
    const { Search } = Input;
    const dispatch = useDispatch();

    const [keyWord, setKeyWord] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const searchMovie = (keyWord, page, itemsPerPage) => {
        const action = searchMovieAction(keyWord, page, itemsPerPage);
        dispatch(action);
    }
    
    const onSearch = value => {
        setKeyWord(value);
        setCurrentPage(1);
    };

    useEffect(() => {
        //Default search to get all data when entering page
        searchMovie(keyWord, currentPage, pageSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyWord, currentPage, pageSize])

    const onChangeHandler = pagingTable => {
        setPageSize(pagingTable.pageSize);
        setCurrentPage(pagingTable.current);
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
            render: (maPhim, movie) => {
                return <div className='flex'>
                    <Button value={maPhim} className='mr-2' onClick={() => {
                        dispatch(enableEditMovieAction(movie.tenPhim));
                    }}>Edit</Button>
                    <Button value={maPhim} type='primary' className='mr-2' href={`/admin/movie/showtime/${maPhim}`}>Add Showtime</Button>
                    <Button type='danger' value={maPhim} onClick={async () => {
                        if (window.confirm('Bạn muốn xoá ' + movie.tenPhim)) {
                            const result = await dispatch(deleteMovieAction(maPhim));
                            if (result) {
                                searchMovie(keyWord, currentPage, pageSize);
                            }
                        }
                    }}>Xoá</Button>
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
                    
            <Table rowKey="maPhim" sticky dataSource={arrSearch.items} columns={columns} onChange={onChangeHandler} pagination={{ total: arrSearch.totalCount, pageSize: pageSize, current: currentPage }}/>
        </div>
    )
}
