import React from 'react';
import './HomeTool.css';

export default function HomeTool() {
    return (
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
    )
}
