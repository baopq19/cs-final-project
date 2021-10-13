import React from 'react'
import { useSelector } from 'react-redux'
import './DetailMovie.css'

export default function DetailMovie() {

    const { movieDetail } = useSelector(state => state.TheaterReducer);

    const renderStar = () => {
        let point = movieDetail.danhGia;
        let result = [];
        let key = 1;
        while (point >=2) {
            result.push(<i key={key} className="fas fa-star"/>);
            point -= 2;
            key++;
        }

        if (point > 0) {
            result.push(<i key={key} className="fas fa-star-half-alt" />);
        }

        return result;
    }

    return (
        <section id="movie">
            <div className="blur-bg" style={{backgroundImage: `url(${movieDetail.hinhAnh})`}} />
            <div className="gradient-filter" />
            <div className="container-lg">
                <div className="row">
                <div className="col col-sm-3 movie-poster">
                    <img src={movieDetail.hinhAnh} alt='' />
                    <button type="button" data-toggle="modal" data-target="#trailerModal"><i className="fas fa-play" /></button>
                </div>
                <div className="col col-12 col-md-5 movie-info">
                    <p className="date">{movieDetail.ngayKhoiChieu}</p>
                        <h4><span>C16</span>{movieDetail.tenPhim}</h4>
                    <p className="others">129 phút - 7.2 IMDB - 2D/Digital</p>
                </div>
                <div className="col col-sm-4 movie-rating">
                    <div className="ldBar no-percent label-center" data-value={88} data-preset="circle" />
                    <div className="stars">
                        {renderStar()}
                    </div>
                    <p>43 người đánh giá</p>
                </div>
                </div>
            </div>
            <div className="modal fade" id="trailerModal" tabIndex={-1} aria-labelledby="trailerModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <iframe height={200} src="https://www.youtube.com/embed/xypzmu5mMPY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}
