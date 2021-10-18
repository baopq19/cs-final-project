/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Film.css';

export default function Film(props) {

  const film = props.item;

  const coverStyle = {
    backgroundImage: `url(${film.hinhAnh})`,
  };

  const renderStar = () => {
    let point = film.danhGia;
    let result = [];
    let key = 1;
    while (point >=2) {
      result.push(<img key={key} src="./images/star1.png" alt='' />);
      point -= 2;
      key++;
    }

    if (point > 0) {
      result.push(<img key={key} src="./images/star1.2.png" alt='' />);
    }

    return result;
  }

  return (
  <div className="filmblock_item">
    <div className="filmblock_image">
      <div className="cover" style={coverStyle} >
      </div>
      <a href={"./detail/" + film.maPhim}>
        <div className="overlay" />
      </a>
      <div className="play">
        <img src="./images/play-video.png" alt='' />
      </div>
    </div>
    <div className="filmblock_content">
      <span className="ageType">P</span>
      <span className="filmname">{film.tenPhim}</span>
    </div>
    <div className="filmblock_time">
      <span>100 phút</span>
    </div>
    <div className="avgPoint">
      <p>{film.danhGia}</p>
      <p className="ng-binding">
        {renderStar()}
      </p>
    </div>
  </div>
  )
}
