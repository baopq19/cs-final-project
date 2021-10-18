/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { bookingAction, getInfoShowtimeAction } from '../../redux/actions/TicketAction';
import { DAT_GHE } from '../../redux/types/TicketType';
import { CURRENT_USER } from '../../util/settings/Constant';
import './Checkout.css';

export default function Checkout(props) {

    const maLichChieu = props.match.params.id;

    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
    

    const { infoShowtime, danhSachGheDangDat } = useSelector(state => state.TicketReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        const action = getInfoShowtimeAction(maLichChieu);
        dispatch(action);
    },[])

    const renderSeat = () => {
        return infoShowtime.danhSachGhe.map((seat, index) => {
            let daDat = 'ghe';
            let vip = '';
            let dangDat = '';
            if (seat.daDat) {
                daDat = 'daDat';
            };
            if (seat.loaiGhe === 'Vip') {
                vip = 'vip';
            };

            let indexDD = danhSachGheDangDat.findIndex((gheDD) => gheDD.maGhe === seat.maGhe);
            if (indexDD !== -1) {
                dangDat = 'dangDat';
            }


            return<Fragment  key={seat.maGhe}>
                <button disabled={seat.daDat} type='button' className={`rounded w-8 h-8 m-3 ${dangDat} ${daDat} ${vip}`}
                    onClick={() => {
                        dispatch({
                            type: DAT_GHE,
                            gheDuocChon: seat,
                        })
                        console.log(danhSachGheDangDat);
                    }}>
                    {seat.stt}
                </button>
                {(index+1)%16 === 0 ? <br/> : ''}
            </Fragment>
        })
    }

    const renderGheDD = () => {
        return _.sortBy(danhSachGheDangDat, ['stt']).map((ghe, index) => {
            return <tr key={index}>
                <td>{ghe.stt}</td>
                <td>{ghe.giaVe}</td>
            </tr>
        })
    }

    if (!currentUser) {
        return <Redirect to='/login' />
    }

    const tinhTien = () => {
        let tong = 0;
        danhSachGheDangDat.forEach(ghe => {
            tong += ghe.giaVe;
        });
        return tong;
    }

    return (
        <div className='pt-20'>
            <div className='flex'>
                <div className='w-9/12 m-2'>
                    <div className='theater bg-gray-400'>
                        <div className='screen text-center bg-black p-2.5'>
                            <h3 className='text-white'>SCREEN</h3>
                        </div>
                        <div className='seats mt-2 text-center'>
                            {renderSeat()}
                        </div>
                    </div>
                    <div className='flex bg-gray-500 p-2 justify-center'>
                        <div className='mx-4'>
                            <p className='mb-0'>GHẾ TRỐNG</p>
                            <div className='rounded w-10 h-10 ghe'></div>
                        </div>
                        <div className='mx-4'>
                            <p className='mb-0'>GHẾ ĐÃ ĐẶT</p>
                            <div className='rounded w-10 h-10 daDat'></div>
                        </div>
                        <div className='mx-4'>
                            <p className='mb-0'>GHẾ VIP</p>
                            <div className='rounded w-10 h-10 ghe vip'></div>
                        </div>
                    </div>
                </div>
                <div className='w-3/10 m-2'>
                    <div className='thongTinPhim'>
                        <h2>Thông tin lịch chiếu</h2>
                        <p>Tên phim: <span>{infoShowtime.thongTinPhim.tenPhim}</span></p>
                        <p>Thời gian: <span>{infoShowtime.thongTinPhim.gioChieu} - {infoShowtime.thongTinPhim.ngayChieu}</span></p>
                        <br />
                        <h3>Rạp <span>{infoShowtime.thongTinPhim.tenCumRap}</span></h3>
                        <p><span>{infoShowtime.thongTinPhim.diaChi}</span></p>
                        <div className='border-t border-gray-500 mt-3 pt-3'>
                            <h3>Thông tin người đặt</h3>
                            <p>Tên: {currentUser.hoTen}</p>
                            <p>Email: {currentUser.email}</p>
                            <p>SDT: {currentUser.soDt || currentUser.soDT}</p>
                        </div>
                        <div className='border-t border-gray-500 mt-3 pt-3'>
                            <h3>Các ghế đang chọn</h3>
                            <table className='table'>
                                <thead>
                                    <tr >
                                        <th className='w-1/2'>Ghế</th>
                                        <th className='w-1/2'>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderGheDD()}
                                </tbody>
                            </table>
                            <h3>Tổng tiền: {tinhTien().toLocaleString()}</h3>
                        </div>
                        <button className='w-full btn btn-primary' onClick={
                            async () => {
                                const booking = {
                                    maLichChieu: maLichChieu,
                                    danhSachVe: danhSachGheDangDat,
                                }
                                const result = await dispatch(bookingAction(booking));
                                if (result) {
                                    alert('Đặt vé thành công');
                                    window.location.reload();
                                }
                            }
                        }>Đặt</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
