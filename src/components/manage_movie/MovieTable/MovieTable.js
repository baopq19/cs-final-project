import React, { useEffect } from 'react'
import './MovieTable.css'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Tag } from 'antd';
import { getMovies } from './../../../redux/actions/MovieAction';

export default function MovieTable() {

    const { arrMovie } = useSelector(state => state.MovieReducer);
    const dispatch = useDispatch();

        useEffect(() => {
            const action = getMovies();

            dispatch(action);

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    const columns = [
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            key: 'moTa',
            render: hinhAnh => {
                return <img src={hinhAnh} style={{width: '150px', height: '250px'}} alt='moTa'></img>
            },
            width: '150px',
        },
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            key: 'maPhim',
            width: '5%',
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
            <Table rowKey="maPhim" dataSource={arrMovie} columns={columns} />
        </div>
    )
}
