import React from 'react';
import './HomeNews.css';

export default function HomeNews() {
    return (
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
    )
}
