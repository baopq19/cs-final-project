/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrandAction, getTheaterAction } from './../../../redux/actions/TheaterAction';
import './HomeCinema.css';

export default function HomeCinema() {
  const { arrBrand, arrTheater } = useSelector(state => state.TheaterReducer);

  const dispatch = useDispatch();

  const dispatchGetTheaterByBrand = (brand) => {
    const action = getTheaterAction(brand);
    dispatch(action);
  };

  const dispatchGetAllBrand = () => {
    const action = getAllBrandAction();
    dispatch(action);
  }

  useEffect(() => {
    dispatchGetAllBrand();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const renderTheater = () => {
    return arrTheater.map((theater, index) => {
      return <div className="cinema_item" key={index} style={{ opacity: 1 }}>
        <div className="cinema_picture">
          <img src="./images/bhd-star-bitexco-16105952137769.png" alt=''/>
        </div>
        <div className="cinema_name">
          <p className="cinema_title">
            {theater.tenCumRap}
          </p>
          <p className="cinema_position">
            {theater.diaChi}
          </p>
          <a href="#">[chi tiết]</a>
        </div>
      </div>
    })
  }

  console.log(arrTheater);

  const renderBrand = () => {
    return arrBrand.map((brand, index) => {
      return <li key={index}>
        <div className="active">
          <img src={brand.logo} onClick={() => dispatchGetTheaterByBrand(`${brand.maHeThongRap}`)} alt='' />
        </div>
      </li>
    })
  }
    return (
        <section id="cinema">
          <div className="container" style={{ maxWidth: 961 }}>
            <div className="backNew">
              <img src="./images/back-news.png" style={{ maxWidth: 940 }} alt='' />
            </div>
            <div className="cinema_content">
              <div className="cinema_img">
                <ul>
                  {renderBrand()}
                </ul>
              </div>
              <div className="cinema_list">
                {renderTheater()}
              </div>
              <div className="showtime">
                <p>Không có suất chiếu</p>
              </div>
            </div>
            <div className="backNew">
              <img
                src="./images/back-news.png"
                style={{ maxWidth: 940, marginTop: "-16px" }}
                alt=''
              />
            </div>
          </div>
        </section>
    )
}
