/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import { Button, Select, DatePicker, InputNumber } from 'antd';
import React, { useEffect } from 'react';
import './AddShowtime.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllBrandAction, getTheaterAction } from './../../../redux/actions/TheaterAction';
import { addShowtimeAction } from './../../../redux/actions/TicketAction';
import moment from 'moment';
import { MAX_TICKET_PRICE, MIN_TICKET_PRICE } from '../../../util/settings/Constant';

export default function AddShowtime(props) {
    const { arrBrand, arrTheater } = useSelector(state => state.TheaterReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBrandAction());
    }, []);
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: 70000
        },
        onSubmit: async values => {
            const result = await dispatch(addShowtimeAction(values));
            if(result) {
                alert('Tạo lịch chiếu thành công');
            }
        },
    });

    const changeHeThongHandler = (value) => {
        dispatch(getTheaterAction(value));
    }

    const changeCumRapHandler = (value) => {
        formik.setFieldValue('maRap', value);
    }

    const onOk = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'));
    }

    const changePriceHandler = (value) => {
        formik.setFieldValue('giaVe', value);
    }

    const renderBrandOption = () => {
        return arrBrand.map((brand) => ({ label: `${brand.tenHeThongRap}`, value: `${brand.maHeThongRap}` }));
    }

    const renderTheaterOption = () => {
        return arrTheater?.map((theater) => ({ label: `${theater.tenCumRap}`, value: `${theater.maCumRap}` }));
    }


    return (
        <div className='bg-white rounded p-2 mt-2 flex justify-center'>
            <div className='w-full lg:w-1/3'>
                <h2 className='pb-2 border-b border-gray-300 '>Add show time</h2>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <p>Hệ thống</p>
                            <Select className='w-full' options={renderBrandOption()} onChange={changeHeThongHandler} placeholder="Chọn hệ thống"/>
                        </div>
                        <div className='form-group'>
                            <p>Cụm rạp</p>
                            <Select className='w-full' options={renderTheaterOption()} onChange={changeCumRapHandler} placeholder="Chọn hệ thống trước"/>
                        </div>
                        <div className='form-group'>
                            <p>Giờ chiếu</p>
                            <DatePicker showTime format='DD/MM/YYYY hh:mm:ss' onOk={onOk} required />
                        </div>
                        <div className='form-group'>
                            <p>Giá vé</p>
                            <InputNumber min={MIN_TICKET_PRICE} max={MAX_TICKET_PRICE} defaultValue={formik.values.giaVe} onChange={changePriceHandler} required />
                        </div>
                        <div className='flex justify-end'>
                            <Button htmlType='submit' type='primary'>Add Showtime</Button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
