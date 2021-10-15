/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './HomeAppMobile.css';
import Slider from "react-slick";

export default function HomeAppMobile() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <section id="AppMobile">
          <div className="container" style={{ maxWidth: 961 }}>
            <div className="row">
              <div className="col-12 col-md-6 text-left">
                <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                <p className="textLeft">người yêu điện ảnh</p>
                <br />
                <p className="smallText">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <br />
                <button className="btn btn-danger">
                  App miễn phí - Tải về ngay!
                </button>
                <p className="textUnder">
                  TIX có hai phiên bản <a href="#">iOS</a> &amp;{" "}
                  <a href="#">Android</a>
                </p>
              </div>
              <div className="col-12 col-md-6 ungDungPhone_right">
                <img src="./images/mobile.png" alt='' />
                <div className="row ungDung_table">
                  {/* <img className="active" src="./images/slide1.jpg" alt='' />
                  <img src="./images/slide2.jpg" alt='' />
                  <img src="./images/slide3.jpg" alt='' />
                  <img src="./images/slide4.jpg" alt='' />
                  <img src="./images/slide5.jpg" alt='' />
                  <img src="./images/slide6.jpg" alt='' />
                  <img src="./images/slide7.jpg" alt='' />
                  <img src="./images/slide8.jpg" alt='' />
                  <img src="./images/slide12.jpg" alt='' /> */}
                <Slider {...settings}>
                  <div>
                    <img src="./images/slide1.jpg" alt='' />
                  </div>
                  <div>
                    <img src="./images/slide2.jpg" alt='' />
                  </div>
                  <div>
                    <img src="./images/slide3.jpg" alt='' />
                  </div>
                </Slider>

                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
