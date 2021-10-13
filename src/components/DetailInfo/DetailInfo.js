import React from 'react'
import { useSelector } from 'react-redux';
import './DetailInfo.css'

export default function DetailInfo() {

    const { movieDetail } = useSelector(state => state.TheaterReducer);

    return (
        <section id="detail">
            <div className="container-lg">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="info-detail-tab" data-toggle="tab" href="#info-detail" role="tab" aria-controls="info-detail" aria-selected="true">Thông tin</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="rating-tab" data-toggle="tab" href="#rating" role="tab" aria-controls="rating" aria-selected="false">Đánh giá</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            {/* Tab thông tin */}
            <div className="tab-pane fade show active" id="info-detail" role="tabpanel" aria-labelledby="info-detail-tab">
                <div className="row">
                    <div className="col col-12 col-md-6 info">
                        <div className="row">
                            <div className="col col-4 col-md-5 title">Ngày công chiếu</div>
                            <div className="col col-8 col-md-7 content">{movieDetail.ngayKhoiChieu}</div>
                        </div>
                        <div className="row">
                            <div className="col col-4 col-md-5 title">Đạo diễn</div>
                            <div className="col col-8 col-md-7 content">Kim Joo-Hwan</div>
                        </div>
                        <div className="row">
                            <div className="col col-4 col-md-5 title">Diễn viên</div>
                            <div className="col col-8 col-md-7 content">Choi Woo Sik, Ahn Sung Ki, Park Seo, Joon, Woo Do Hwan</div>
                        </div>
                        <div className="row">
                            <div className="col col-4 col-md-5 title">Thể loại</div>
                            <div className="col col-8 col-md-7 content">Hành động, Horor</div>
                        </div>
                        <div className="row">
                            <div className="col col-4 col-md-5 title">Định dạng</div>
                            <div className="col col-8 col-md-7 content">2D/Digital</div>
                        </div>
                        <div className="row">
                            <div className="col col-4 col-md-5 title">Quốc Gia SX</div>
                            <div className="col col-8 col-md-7 content">Hàn Quốc</div>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 movie-content">
                        <div className="title">Nội dung</div>
                        <div className="content">
                            {movieDetail.moTa}
                        </div>
                    </div>
                    <div className="related-news">
                        <p className="title">Tin liên quan</p>
                        <div className="row">
                            <div className="col col-12 col-md-4 news-card">
                                <img src="./../images/news1.png" className="w-100" alt='' />
                                <h5 className="headline">VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM "BÀN TAY DIỆT QUỶ" ABC XYZ</h5>
                                <span className="like"><i className="far fa-thumbs-up" /> <span className="like-number"> 2</span></span>
                                <span className="comment"><i className="far fa-comment-alt=''" /> <span className="comment-number"> 0</span></span>
                            </div>
                            <div className="col col-12 col-md-4" />
                                <div className="col col-12 col-md-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tab rating */}
                    <div className="tab-rating tab-pane fade" id="rating" role="tabpanel" aria-labelledby="rating-tab">
                        <div className="small-container">
                            <form>
                                <div className="write-comment">
                                    <div className="row">
                                        <div className="col col-2 col-sm-1">
                                            <img src="./../images/default-avatar.png" alt='' />
                                        </div>
                                        <div className="col col-5 col-sm-6">
                                            <input type="text" placeholder="Bạn nghĩ gì về phim này" />
                                        </div>
                                        <div className="col col-5 stars">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="comment">
                                <div className="row">
                                    <div className="col col-2 col-sm-1">
                                        <img src="./../images/default-avatar.png" alt='' />
                                    </div>
                                    <div className="col col-6 col-sm-7">
                                        <p className="name">Noo Quốc Thịnh</p>
                                        <span className="since">9 ngày trước</span>
                                    </div>
                                    <div className="col col-4 rating">
                                        <div className="rating-content">
                                            <span className="point">10</span>
                                            <div className="stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="the-comment">Phim này tui coi free trên gg :)) hay vcl</p>
                                <div className="like">
                                    <i className="far fa-thumbs-up" /> <span className="like-number"> 0</span> Thích
                                </div>
                            </div>
                            <div className="comment">
                                <div className="row">
                                    <div className="col col-2 col-sm-1">
                                        <img src="./../images/default-avatar.png" alt='' />
                                    </div>
                                    <div className="col col-6 col-sm-7">
                                        <p className="name">Noo Quốc Thịnh</p>
                                        <span className="since">9 ngày trước</span>
                                    </div>
                                    <div className="col col-4 rating">
                                        <div className="rating-content">
                                            <span className="point">10</span>
                                            <div className="stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="the-comment">Phim này tui coi free trên gg :)) hay vcl</p>
                                <div className="like">
                                    <i className="far fa-thumbs-up" /> <span className="like-number"> 0</span> Thích
                                </div>
                            </div>
                            <div className="comment">
                                <div className="row">
                                    <div className="col col-2 col-sm-1">
                                        <img src="./../images/default-avatar.png" alt='' />
                                    </div>
                                    <div className="col col-6 col-sm-7">
                                        <p className="name">Noo Quốc Thịnh</p>
                                        <span className="since">9 ngày trước</span>
                                    </div>
                                    <div className="col col-4 rating">
                                        <div className="rating-content">
                                            <span className="point">10</span>
                                            <div className="stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="the-comment">Phim này tui coi free trên gg :)) hay vcl</p>
                                <div className="like">
                                    <i className="far fa-thumbs-up" /> <span className="like-number"> 0</span> Thích
                                </div>
                            </div>
                            <div className="read-more">
                                <button>XEM THÊM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}