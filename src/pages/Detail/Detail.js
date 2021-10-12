import React from 'react'
import './Detail.css'
import DetailMovie from '../../components/DetailMovie/DetailMovie';
import DetailInfo from '../../components/DetailInfo/DetailInfo';

export default function Detail(props) {
    return (
        <div>
            <DetailMovie />
            <DetailInfo />
        </div>
    )
}
