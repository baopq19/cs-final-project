import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./HomeFilmBlock.css";

export default function HomeFilmBlock() {
    return (
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
    )
}
