/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import './Home.css';

export default function Home(props) {
    
    return (
      <div>
        <section id="myCarousel">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active owl-dots"
              />
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={1}
                className="owl-dots"
              />
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={2}
                className="owl-dots"
              />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="./images/trang-ti-16194117174325.jpg"
                  alt=''
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./images/ban-tay-diet-quy-evil-expeller-16177781815781.png"
                  alt=''
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./images/lat-mat-48h-16177782153424.png"
                  alt=''
                />
              </div>
            </div>
            <a href="./pages/details.html">
              <div className="overlay" />
            </a>
            <a
              className="carousel-control-prev arrow-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* Button trigger modal */}
          <div
            className="click"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fas fa-play" />
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                {/*width="560" height="315"*/}
                <iframe
                  style={{
                    minWidth: 750,
                    minHeight: 500,
                    position: "relative",
                  }}
                  src="https://www.youtube.com/embed/2Mi0CFBghiw"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button className="close" data-dismiss="modal">
                  <img src="./images/close.png" alt='' />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="homeTools">
          <div className="container">
            <div className="home_item">
              <div className="selectFilm">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ outline: "none" }}
                >
                  <option>Phim</option>
                  <option>Trạng Tí Phiêu Lưu Ký</option>
                  <option>Lật Mặt: 48h</option>
                  <option>
                    Thiên Thần Hộ Mệnh - The Guardian (C18)
                  </option>
                  <option>Người Nhân Bản - Seobok (C16)</option>
                  <option>
                    Bàn Tay Diệt Quỷ - Evil Expeller (C16)
                  </option>
                  <option>Kẻ Vô Danh - Nobody - C18</option>
                  <option>Hùng Thần Trắng - Great White - C18</option>
                  <option>
                    Nhân Đôi Tình Yêu - Double Party - C13
                  </option>
                  <option>
                    Trùm Cuối Siêu Đẳng - Boss Level - C18
                  </option>
                  <option>
                    The Hypnosis - Con Lắc Tà Thuật - C18
                  </option>
                  <option>Godzilla vs. Kong</option>
                  <option>
                    Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan:
                    Viên Đạn Đỏ - C13
                  </option>
                  <option>
                    Chiến Binh Cuối Cùng: Cuội Nguồn Của Quỷ - The Last Warrior:
                    Root Of Evil - C13
                  </option>
                  <option>
                    Ong Nhí Phiêu Lưu Ký: Giải Cứu Công Chúa Kiến - Maya The Bee
                    3: The Golden Orb - P
                  </option>
                </select>
              </div>
              <div className="selectCinema">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ outline: "none" }}
                >
                  <option>Rạp</option>
                  <option>Vui lòng chọn phim</option>
                </select>
              </div>
              <div className="selectDate">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ outline: "none" }}
                >
                  <option>Ngày xem</option>
                  <option>Vui lòng chọn phim và rạp</option>
                </select>
              </div>
              <div className="selectSession">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ outline: "none" }}
                >
                  <option>Suất chiếu</option>
                  <option>Vui lòng chọn phim, rạp và ngày xem</option>
                </select>
              </div>
              <div className="selectBuy">
                <button className="btn btn-danger">MUA VÉ NGAY</button>
              </div>
            </div>
          </div>
        </section>

        <section id="filmblock">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Sắp Chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  items={1}
                  nav
                >
                  {/* Mỗi cái item này chứa 2 dòng và 8 flimblock_item, nên mỗi 1 lần owl carousel chỉ show 1 item */}
                  <div className="item">
                    {/* Mỗi cái flex container này là 1 dòng trong carousel chứa 4 filmblock_item */}
                    <div className="flex-container">
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            className="img_4"
                            src="./images/trang-ti-16194120693380_215x318.jpg"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Trạng Tí Phiêu Lưu Ký
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint">
                          <p>6.2</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            className="img_4"
                            src="./images/lat-mat-48h-16176188609123_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C18</span>
                          <span className="filmname">Lật Mặt: 48h</span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint">
                          <p>7.8</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            className="img_4"
                            src="./images/thien-than-ho-menh-16157907251398_215x318.jpg"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C18</span>
                          <span className="filmname">
                            Thiên Thần Hộ Mệnh - The Guardian (C18)
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>124 phút</span>
                        </div>
                        <div className="avgPoint">
                          <p>7.5</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            className="img_3"
                            style={{ maxWidth: "200.83px" }}
                            src="./images/detective-conan-scarlet-bullet-tham-tu-lung-danh-conan-vien-dan-do-p-16185623740090_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div style={{ width: "88%" }} className="overlay" />
                          </a>
                          <div
                            style={{ top: "42%", right: "45%" }}
                            className="play"
                          >
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content filmblock_content_1">
                          <span className="ageType_red">C13</span>
                          <span className="filmname">
                            Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh
                            Conan: Viên Đạn Đỏ - C13
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>110 phút - 6.6 IMDb</span>
                        </div>
                        <div style={{ right: 34 }} className="avgPoint">
                          <p>8.8</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Mỗi cái flex container này là 1 dòng trong carousel chứa 4 filmblock_item */}
                    <div className="flex-container">
                      <div className="filmblock_item list_1">
                        <div className="filmblock_image">
                          <img
                            src="./images/nguoi-nhan-ban-seobok-c18-16170933054901_215x318.jpg"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C16</span>
                          <span className="filmname">
                            Người Nhân Bản - Seobok (C16)
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>114 phút - 6.3 IMDb</span>
                        </div>
                        <div className="avgPoint">
                          <p>7.7</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item list_1">
                        <div className="filmblock_image">
                          <img
                            src="./images/ban-tay-diet-quy-evil-expeller-c16-16167437811994_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C16</span>
                          <span className="filmname">
                            Bàn Tay Diệt Quỷ - Evil Expeller (C16)
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>129 phút </span>
                        </div>
                        <div className="avgPoint">
                          <p>8.8</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item list_1">
                        <div className="filmblock_image">
                          <img
                            src="./images/ke-vo-danh-nobody-c18-16177813592209_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C18</span>
                          <span className="filmname">
                            Kẻ Vô Danh - Nobody - C18
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>92 phút - 7.4 IMDb</span>
                        </div>
                        <div className="avgPoint">
                          <p>8.5</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item list_1">
                        <div className="filmblock_image">
                          <img
                            src="./images/hung-than-trang-great-white-c13-16199525115620_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C18</span>
                          <span className="filmname">
                            Hùng Thần Trắng - Great White - C18
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút - 3.9 IMDb</span>
                        </div>
                        <div className="avgPoint">
                          <p>5.5</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* Mỗi cái flex container này là 1 dòng trong carousel chứa 4 filmblock_item */}
                    <div className="flex-container">
                      <div className="filmblock_item list_2">
                        <div className="filmblock_image">
                          <img
                            className="img_5"
                            src="./images/chien-binh-cuoi-cung-cuoi-nguon-cua-quy-the-last-warrior-root-of-evil-c13-16199511224567_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content filmblock_content_1">
                          <span className="ageType_red">C13</span>
                          <span className="filmname">
                            Chiến Binh Cuối Cùng: Cuội Nguồn Của Quỷ - The Last
                            Warrior: Root Of Evil - C13
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>122 phút - 5.9 IMDb</span>
                        </div>
                        <div className="avgPoint">
                          <p>5.5</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item list_2">
                        <div className="filmblock_image">
                          <img
                            className="img_5"
                            src="./images/ong-nhi-phieu-luu-ky-giai-cuu-cong-chua-kien-maya-the-bee-3-the-golden-orb-p-16177793756407_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content filmblock_content_1">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Ong Nhí Phiêu Lưu Ký: Giải Cứu Công Chúa Kiến - Maya
                            The Bee 3: The Golden Orb - P
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>88 phút</span>
                        </div>
                        <div className="avgPoint">
                          <p>8.8</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item list_2">
                        <div className="filmblock_image">
                          <img
                            className="img_5"
                            style={{ minHeight: 298 }}
                            src="./images/nhan-doi-tinh-yeu-double-party-c13-16188292910862_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C13</span>
                          <span className="filmname">
                            Nhân Đôi Tình Yêu - Double Party - C13
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>107 phút </span>
                        </div>
                        <div className="avgPoint">
                          <p>8.8</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item list_2">
                        <div className="filmblock_image">
                          <img
                            className="img_5"
                            style={{ minHeight: 298 }}
                            src="./images/trum-cuoi-sieu-dang-bosslevel-c18-16188999396703_215x318.png"
                            alt=''
                          />
                          <a href="./pages/details.html">
                            <div className="overlay" />
                          </a>
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C18</span>
                          <span className="filmname">
                            Trùm Cuối Siêu Đẳng - Boss Level - C18
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút - 6.9 IMDb</span>
                        </div>
                        <div className="avgPoint">
                          <p>7.6</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Mỗi cái flex container này là 1 dòng trong carousel chứa 4 filmblock_item */}
                    <div className="flex-container">
                      <div className="filmblock_item list_3">
                        <div className="filmblock_image">
                          <img
                            className="img_6"
                            src="./images/the-hypnosis-con-lac-ta-thuat-c18-16185613453118_215x318.png"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C18</span>
                          <span className="filmname">
                            The Hypnosis - Con Lắc Tà Thuật - C18
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>110 phút - 4.8 IMDb</span>
                        </div>
                        <div className="avgPoint">
                          <p>5.5</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                      <div className="filmblock_item list_3">
                        <div className="filmblock_image">
                          <img
                            className="img_6"
                            src="./images/godzilla-vs-kong-16150074733397_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C13</span>
                          <span className="filmname">Godzilla vs. Kong</span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút - 6.5 IMDb</span>
                        </div>
                        <div className="avgPoint">
                          <p>8.3</p>
                          <p className="ng-binding">
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.png" alt='' />
                            <img src="./images/star1.2.png" alt='' />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="container">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  items={1}
                  nav
                >
                  <div className="item">
                    <div className="flex-container">
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/biet-doi-san-ma-chuyen-kiep-ghostbusters-afterlife-15759470166331_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname" style={{ fontSize: 15 }}>
                            Biệt Đội Săn Ma Chuyển Kiếp - Ghostbusters Afterlife
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>05/03</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/em-va-trinh-15813267048692_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">Em và Trịnh</span>
                        </div>
                        <div className="filmblock_time">
                          <span>0 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>01/04</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/fast-furious-9-15803709020861_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">Fast &amp; Furious 9</span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút - 5.4 IMDb</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>02/04</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/ta-nang-phan-dung-15862384755700_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">Tà Năng Phan Dũng</span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>21/04</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-container">
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/1990-c16-16170969832613_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType_red">C16</span>
                          <span className="filmname">1990 (C16)</span>
                        </div>
                        <div className="filmblock_time">
                          <span>120 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>30/04</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/shang-chi-and-the-legend-of-the-ten-rings-15668741464229_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Shang-Chi and the Legend of the Ten Rings
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>07/05</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/dua-be-i-16188328093041_215x318.png"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">Đứa Bé - I </span>
                        </div>
                        <div className="filmblock_time">
                          <span>114 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>14/05</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/john-wick-chapter-4-15827770304921_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">John Wick: Chapter 4</span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>21/05</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="flex-container">
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/the-matrix-4-15827771560629_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">The Matrix 4</span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>21/05</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/cruella-16182123467884_215x318.png"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">Cruella</span>
                        </div>
                        <div className="filmblock_time">
                          <span>0 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>28/05</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/chu-ngua-bat-kham-spirit-p-16171851912283_215x318.png"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Chú ngựa bất kham- Spirit - P
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>0 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>01/06</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/am-anh-kinh-hoang-3-the-conjuring-3-c18-15742352934530_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content filmblock_content_1">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Ám Ảnh Kinh Hoàng 3 - The Conjuring The Devil Made
                            Me Do It (C18)
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút - 7 IMDb</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>04/06</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-container">
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/jurassic-world-dominion-15827788277771_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Jurassic World: Dominion
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>0 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>11/06</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/in-the-heights-15779380081932_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">In the Heights</span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>18/06</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/venom-2-15740591875202_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Venom: Let There Be Carnage
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>25/06</p>
                        </div>
                      </div>
                      <div className="filmblock_item">
                        <div className="filmblock_image">
                          <img
                            src="./images/minions-su-troi-day-cua-gru-15809552091851_215x318.jpg"
                            alt=''
                          />
                          <div className="overlay" />
                          <div className="play">
                            <img src="./images/play-video.png" alt='' />
                          </div>
                        </div>
                        <div className="filmblock_content">
                          <span className="ageType">P</span>
                          <span className="filmname">
                            Minions: Sự Trỗi Dậy Của Gru
                          </span>
                        </div>
                        <div className="filmblock_time">
                          <span>100 phút</span>
                        </div>
                        <div className="avgPoint Point_1" style={{ top: 250 }}>
                          <p>2/07</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

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

        <section id="new">
          <div className="container" style={{ maxWidth: 961 }}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="dienanh24h-tab"
                  data-toggle="tab"
                  href="#dienanh24h"
                  role="tab"
                  aria-controls="dienanh24h"
                  aria-selected="true"
                >
                  Điện Ảnh 24h
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="review-tab"
                  data-toggle="tab"
                  href="#review"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                >
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="sale-tab"
                  data-toggle="tab"
                  href="#sale"
                  role="tab"
                  aria-controls="sale"
                  aria-selected="false"
                >
                  Khuyến Mãi
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="dienanh24h"
                role="tabpanel"
                aria-labelledby="dienanh24h-tab"
              >
                <div className="row" style={{ paddingTop: 15 }}>
                  <div className="col-12 col-sm-6">
                    <div className="new_img">
                      <img
                        style={{ maxWidth: 455, minHeight: "250.25px" }}
                        src="./images/lat-mat-48h-16177782153424.jpg"
                        alt=''
                      />
                    </div>
                    <div className="new_title">
                      <p>
                        Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung
                        clip Lật Mặt: 48H đậm chất{" "}
                      </p>
                    </div>
                    <div className="new_text">
                      <p>
                        Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung
                        clip rượt đuổi gay cấn thót tim fans hâm mộ
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="new_img">
                      <img
                        style={{ maxWidth: 455, minHeight: "250.25px" }}
                        src="./images/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
                        alt=''
                      />
                    </div>
                    <div className="new_title">
                      <p>
                        [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM
                        ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH
                        ĐÁM
                      </p>
                    </div>
                    <div className="new_text">
                      <p>
                        Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung
                        clip rượt đuổi gay cấn thót tim fans hâm mộ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12 col-sm-5"
                    style={{
                      maxWidth: 313,
                      minHeight: 301,
                      padding: "0 7.5px",
                    }}
                  >
                    <div className="news_img">
                      <img
                        src="./images/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                        alt=''
                      />
                    </div>
                    <div className="news_title">
                      <p>
                        PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey
                        Mulligan và màn trả thù đàn ông để đời
                      </p>
                    </div>
                    <div className="news_text">
                      <p>
                        Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao
                        về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và
                        Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt
                        Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng
                        tới.
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>1</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-5"
                    style={{
                      maxWidth: 313,
                      minHeight: 301,
                      padding: "0 7.5px",
                    }}
                  >
                    <div className="news_img">
                      <img
                        src="./images/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                        alt=''
                      />
                    </div>
                    <div className="news_title">
                      <p>
                        PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey
                        Mulligan và màn trả thù đàn ông để đời
                      </p>
                    </div>
                    <div className="news_text">
                      <p>
                        Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
                        hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu"
                        nhất sự nghiệp của cô trong phim Promising Young Woman
                        (tựa Việt: Cô Gái Trẻ Hứa Hẹn).{" "}
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>2</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2" style={{ minWidth: 313 }}>
                    <div className="news_list">
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                          alt=''
                        />
                        <p>
                          Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                        </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                          alt=''
                        />
                        <p>
                          “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                        </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2
                          tuần công chiếu
                        </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                          TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM –
                          VINAMAN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="row" style={{ paddingTop: 15 }}>
                  <div className="col-12 col-sm-6">
                    <div className="new_img">
                      <img
                        style={{ maxWidth: 455, minHeight: "250.25px" }}
                        src="./images/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                        alt=''
                      />
                    </div>
                    <div className="new_title">
                      <p>
                        Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên
                        kết
                      </p>
                    </div>
                    <div className="new_text">
                      <p>
                        Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích
                        Quỷ Ám
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>0</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="new_img">
                      <img
                        style={{ maxWidth: 455, minHeight: "250.25px" }}
                        src="./images/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                        alt=''
                      />
                    </div>
                    <div className="new_title">
                      <p>Review: Dinh Thự Oan Khuất (Ghost Of War)</p>
                    </div>
                    <div className="new_text">
                      <p>
                        Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh
                        Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng
                        vé!
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>1</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12 col-sm-5"
                    style={{
                      maxWidth: 313,
                      minHeight: 301,
                      padding: "0 7.5px",
                    }}
                  >
                    <div className="news_img">
                      <img
                        src="./images/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                        alt=''
                      />
                    </div>
                    <div className="news_title">
                      <p>
                        Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019
                        của đạo diễn Spike Lee là một lát cắt nữa về nạn phân
                        biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới
                        tận hôm nay.
                      </p>
                    </div>
                    <div className="news_text">
                      <p>
                        Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao
                        về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và
                        Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt
                        Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng
                        tới.
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>0</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-5"
                    style={{
                      maxWidth: 313,
                      minHeight: 301,
                      padding: "0 7.5px",
                    }}
                  >
                    <div className="news_img">
                      <img
                        src="./images/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                        alt=''
                      />
                    </div>
                    <div className="news_title">
                      <p>American Sniper - Chính nghĩa hay phi nghĩa ?</p>
                    </div>
                    <div className="news_text">
                      <p>
                        American Sniper khắc họa một tay súng bắn tỉa “huyền
                        thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung
                        Đông. Câu chuyện phim chậm rãi đưa người xem qua từng
                        thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên,
                        rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc
                        bắt đầu nhẹ nhàng...
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>0</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2" style={{ minWidth: 313 }}>
                    <div className="news_list">
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/review-spider-man-into-the-spider-vesre-15886520889426.png"
                          alt=''
                        />
                        <p>Review: Spider-Man: Into The Spider-Vesre </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          COVID-19 là bản chính thức của MEV-1 phim contagion
                          (2011)
                        </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa
                          bao giờ lầy lội và hài hước đến thế
                        </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu
                          anh hùng Valiant
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="sale"
                role="tabpanel"
                aria-labelledby="sale-tab"
              >
                <div className="row" style={{ paddingTop: 15 }}>
                  <div className="col-12 col-sm-6">
                    <div className="new_img">
                      <img
                        style={{ maxWidth: 455, minHeight: "250.25px" }}
                        src="./images/trang-ti-16194117174325.jpg"
                        alt=''
                      />
                    </div>
                    <div className="new_title">
                      <p>BHD 59K/VÉ CẢ TUẦN !!!</p>
                    </div>
                    <div className="new_text">
                      <p>
                        Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                        giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên
                        ZaloPay.
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>2</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="new_img">
                      <img
                        style={{ maxWidth: 455, minHeight: "250.25px" }}
                        src="./images/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                        alt=''
                      />
                    </div>
                    <div className="new_title">
                      <p>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</p>
                    </div>
                    <div className="new_text">
                      <p>
                        Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận
                        thêm 02 voucher thanh toán ZaloPay thả ga
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>4</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12 col-sm-5"
                    style={{
                      maxWidth: 313,
                      minHeight: 301,
                      padding: "0 7.5px",
                    }}
                  >
                    <div className="news_img">
                      <img
                        src="./images/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                        alt=''
                      />
                    </div>
                    <div className="news_title">
                      <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</p>
                    </div>
                    <div className="news_text">
                      <p>
                        ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và
                        Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt
                        vé qua TIX.
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>4</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-5"
                    style={{
                      maxWidth: 313,
                      minHeight: 301,
                      padding: "0 7.5px",
                    }}
                  >
                    <div className="news_img">
                      <img
                        src="./images/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                        alt=''
                      />
                    </div>
                    <div className="news_title">
                      <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</p>
                    </div>
                    <div className="news_text">
                      <p>
                        Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                        giá 59k/vé khi mua vé trên TIX và thanh toán bằng
                        ZaloPay hoặc Mục Vé Phim trên ZaloPay.
                      </p>
                    </div>
                    <div className="likes">
                      <div className="postLike" style={{ display: "flex" }}>
                        <i className="far fa-thumbs-up" />
                        <p>0</p>
                      </div>
                      <div className="comment" style={{ display: "flex" }}>
                        <i className="far fa-comment-alt=''" />
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-2" style={{ minWidth: 313 }}>
                    <div className="news_list">
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                          alt=''
                        />
                        <p>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé
                          Anh Trai Yêu Quái
                        </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé
                          Pháp Sư Mù: Ai Chết Giơ Tay
                        </p>
                      </div>
                      <div className="news_item">
                        <img
                          style={{ maxWidth: 50, maxHeight: 50 }}
                          src="./images/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                          alt=''
                        />
                        <p style={{ WebkitBoxOrient: "vertical" }}>
                          [Mega GS] Một đoá hoa thay ngàn lời yêu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btnXemThem">
              <button className="btn btn-primary">Xem Thêm</button>
            </div>
          </div>
        </section>

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
                <div className="row ungDung_table owl-carousel owl-carousel-1">
                  <img className="active" src="./images/slide1.jpg" alt='' />
                  <img src="./images/slide2.jpg" alt='' />
                  <img src="./images/slide3.jpg" alt='' />
                  <img src="./images/slide4.jpg" alt='' />
                  <img src="./images/slide5.jpg" alt='' />
                  <img src="./images/slide6.jpg" alt='' />
                  <img src="./images/slide7.jpg" alt='' />
                  <img src="./images/slide8.jpg" alt='' />
                  <img src="./images/slide12.jpg" alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
