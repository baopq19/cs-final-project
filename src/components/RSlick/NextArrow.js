import React from 'react'

export default function NextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="custom-next-arrow"></div>
    );
}
