import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="mt-20">
            <div className="container-lg">
                <div className="row">
                    <div className="col col-12 col-md-4 about">
                        <p className="footer-title">TIX</p>
                        <div className="row">
                            <div className="col col-6 d-none d-lg-block">
                                <a href="#">FAQ</a>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col col-12 col-lg-6">
                                <a href="#">Thỏa thuận sử dụng</a>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                <div className="col col-4 partners d-none d-lg-block">
                    <p className="footer-title">ĐỐI TÁC</p>
                    <div className="d-flex">
                        <a href="#">
                            <img src="./images/logo-cgv.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-bhd.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-galaxy.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-cinestar.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-lotte.png" alt />
                        </a>
                    </div>
                    <div className="d-flex">
                        <a href="#">
                            <img src="./images/logo-megags.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-beta.jpeg" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-dongda.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-touch.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-cinemax.jpeg" alt />
                        </a>
                    </div>
                    <div className="d-flex">
                        <a href="#">
                            <img src="./images/logo-cgv.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-bhd.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-galaxy.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-cinestar.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-lotte.png" alt />
                        </a>
                    </div>
                    <div className="d-flex">
                        <a href="#">
                            <img src="./images/logo-megags.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-beta.jpeg" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-dongda.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-touch.png" alt />
                        </a>
                        <a href="#">
                            <img src="./images/logo-cinemax.jpeg" alt />
                        </a>
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="row">
                        <div className="col col-6 mobile d-none d-lg-block">
                            <p className="footer-title">MOBILE APP</p>
                            <div className="d-flex">
                                <a href="#">
                                    <img className="mx-1.5 md:ml-0 md:mr-2.5" src="./images/logo-apple.png" />
                                </a>
                                <a href="#">
                                    <img className="mx-1.5 md:ml-0 md:mr-2.5" src="./images/logo-android.png" />
                                </a>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 social">
                            <p className="footer-title">SOCIAL</p>
                            <div className="d-flex justify-center md:justify-start">
                                <a href="#">
                                    <img className="mx-1.5 md:ml-0 md:mr-2.5" src="./images/logo-facebook.png" />
                                </a>
                                <a href="#">
                                    <img className="mx-1.5 md:ml-0 md:mr-2.5" src="./images/logo-zalo.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="company-info">
                    <div className="row">
                        <div className="col col-12 col-md-2">
                            <img className="footer-logo" src="./images/logo-zion.jpeg" alt />
                        </div>
                        <div className="col col-12 col-md-8">
                            <p className="footer-title">
                                TIX - Sản phẩm của công ty cổ phần zion
                            </p>
                            <p className="address">Địa chỉ: Z06 Dường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Name.</p>
                            <p className="cert">Giấy chứng nhận đăng ký kinh doanh số: 0101659783 đăng kí thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư TPHCM cấp</p>
                            <p className="phone-number">Số Điện THoại (Hotline): 1900 456 789</p>
                            <p className="email">Email: <span>support@tix.vn</span></p>
                        </div>
                        <div className="col col-12 col-md-2">
                            <img className="logo-bct" src="./images/bocongthuong.png" alt />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
