/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './HomeCinema.css';

export default function HomeCinema() {
    return (
        <section id="cinema">
          <div className="container" style={{ maxWidth: 961 }}>
            <div className="backNew">
              <img src="./images/back-news.png" style={{ maxWidth: 940 }} alt='' />
            </div>
            <div className="cinema_content">
              <div className="cinema_img">
                <ul>
                  <li>
                    <a className="active" href="#">
                      <img src="./images/bhd.png" alt='' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/vincom.png" alt='' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/beta.png" alt='' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/ddc.png" alt='' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/mega.png" alt='' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/doine.jpg" alt='' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/lotte.png" alt='' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cinema_list">
                <div className="cinema_item" style={{ opacity: 1 }}>
                  <div className="cinema_picture">
                    <img
                      src="./images/bhd-star-bitexco-16105952137769.png"
                      alt=''
                    />
                  </div>
                  <div className="cinema_name">
                    <p className="cinema_title">
                      <a href="#">BHD Star</a>- Bitexco
                    </p>
                    <p className="cinema_position">
                      L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                    </p>
                    <a href="#">[chi tiết]</a>
                  </div>
                </div>
                <div className="cinema_item">
                  <div className="cinema_picture">
                    <img
                      src="./images/bhd-star-vincom-thao-dien-16105955634183.png"
                      alt=''
                    />
                  </div>
                  <div className="cinema_name">
                    <p className="cinema_title">
                      <a href="#">BHD Star</a>- Vincom Thảo Điền
                    </p>
                    <p className="cinema_position">
                      L5-Megamall, 159 XL Hà Nội, Q.2
                    </p>
                    <a href="#">[chi tiết]</a>
                  </div>
                </div>
                <div className="cinema_item">
                  <div className="cinema_picture">
                    <img
                      src="./images/bhd-star-vincom-3-2-16105957596860.png"
                      alt=''
                    />
                  </div>
                  <div className="cinema_name">
                    <p className="cinema_title">
                      <a href="#">BHD Star</a>- Vincom 3/2
                    </p>
                    <p className="cinema_position">
                      L5-Vincom 3/2, 3C Đường 3/2, Q.10
                    </p>
                    <a href="#">[chi tiết]</a>
                  </div>
                </div>
                <div className="cinema_item">
                  <div className="cinema_picture">
                    <img
                      src="./images/bhd-star-pham-hung-16105959230642.png"
                      alt=''
                    />
                  </div>
                  <div className="cinema_name">
                    <p className="cinema_title">
                      <a href="#">BHD Star</a>- Phạm Hùng
                    </p>
                    <p className="cinema_position">
                      L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh
                    </p>
                    <a href="#">[chi tiết]</a>
                  </div>
                </div>
                <div className="cinema_item">
                  <div className="cinema_picture">
                    <img
                      src="./images/bhd-star-vincom-quang-trung-16105960645760.png"
                      alt=''
                    />
                  </div>
                  <div className="cinema_name">
                    <p className="cinema_title">
                      <a href="#">BHD Star</a>- Vincom Quang Trung
                    </p>
                    <p className="cinema_position">
                      B1-Vincom QT, 190 Quang Trung, Gò Vấp
                    </p>
                    <a href="#">[chi tiết]</a>
                  </div>
                </div>
                <div className="cinema_item">
                  <div className="cinema_picture">
                    <img
                      src="./images/bhd-star-vincom-le-van-viet-16105962051265.png"
                      alt=''
                    />
                  </div>
                  <div className="cinema_name">
                    <p className="cinema_title">
                      <a href="#">BHD Star</a>- Vincom Lê Văn Việt
                    </p>
                    <p className="cinema_position">
                      L4-Vincom Plaza, 50 Lê Văn Việt, Q.9
                    </p>
                    <a href="#">[chi tiết]</a>
                  </div>
                </div>
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
