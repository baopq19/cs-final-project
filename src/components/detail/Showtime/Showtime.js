import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Select } from 'antd';
import './Showtime.css'
import moment from 'moment';

export default function Showtime() {
    const { movieDetail } = useSelector(state => state.TheaterReducer);
    const heThong = movieDetail.heThongRapChieu;
    const [selectedHeThong, setSelectedHeThong] = useState({});
    const [selectedCumRap, setSelectedCumRap] = useState({});

    const renderBrandOption = () => {
        return heThong?.map((brand) => ({ label: `${brand.tenHeThongRap}`, value: `${brand.maHeThongRap}` }));
    }


    const changeHeThongHandler = (value) => {
        const selectedHT = heThong.find((ht) => (ht.maHeThongRap === value));
        setSelectedHeThong(selectedHT);
    }

    const changeCumRapHandler = (value) => {
        const selectedCR = selectedHeThong?.cumRapChieu?.find((cumRap) => (cumRap.maCumRap === value));
        setSelectedCumRap(selectedCR);
        console.log(selectedCR);
    }

    const renderTheaterOption = () => {
        return selectedHeThong?.cumRapChieu?.map((cumRap) => ({ label: `${cumRap.tenCumRap}`, value: `${cumRap.maCumRap}` }));
    }

    const renderLichChieu = () => {
        return selectedCumRap?.lichChieuPhim?.map((lichChieu, index) => {
            return <div className='rounded-xl bg-green-400 w-1/6 mt-2 mx-2 px-2 text-center pb-0.5' key={index}>
                <a className='text-white gioChieu' href={`/checkout/${40291}`}>{moment(lichChieu.ngayChieuGioChieu).format('DD/MM - hh:ss')}</a>
            </div>
        })
    }
    
    return (
        <div className='background'>
            <div className='container-lg text-white'>
                <div className='bg-white rounded p-2'>
                    <h2>Lịch chiếu</h2>
                    <div className='flex'>
                        <Select options={renderBrandOption()} onChange={changeHeThongHandler} placeholder="Chọn hệ thống"/>
                        <Select options={renderTheaterOption()} onChange={changeCumRapHandler} placeholder="Chọn cụm rạp"/>
                    </div>
                    <div className='flex flex-wrap mt-2'>
                        {renderLichChieu()}
                    </div>
                </div>
            </div>
        </div>
    )
}
