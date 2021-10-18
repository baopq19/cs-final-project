/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './Detail.css'
import DetailMovie from '../../components/detail/DetailMovie/DetailMovie';
import DetailInfo from '../../components/detail/DetailInfo/DetailInfo';
import { useDispatch } from 'react-redux';
import { getShowtimesAction } from '../../redux/actions/TheaterAction';
import Showtime from '../../components/detail/Showtime/Showtime';

export default function Detail(props) {

    const id = props.match.params.maPhim;

    const dispatch = useDispatch();

    const getShowtimesById = () => {
        const action = getShowtimesAction(id);

        dispatch(action);
    };

    useEffect(() => {
        getShowtimesById();
    }, []);


    return (
        <div>
            <DetailMovie/>
            <DetailInfo />
            <Showtime />
        </div>
    )
}
