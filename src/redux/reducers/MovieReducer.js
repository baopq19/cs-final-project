

const stateDefault = {
    arrMovie: [
        {
            "maPhim": 8068,
            "tenPhim": "Suicide Squad 22",
            "biDanh": "suicide-squad-22",
            "trailer": "https://www.youtube.com/watch?v=JuDLepNa7hw",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/suicide-squad-22_gp01.jpg",
            "moTa": "Suicide Squad 22",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-08-22T08:08:14.043",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
        },
    ],
    showingMovie: [
        {
            "maPhim": 8068,
            "tenPhim": "Suicide Squad 22",
            "biDanh": "suicide-squad-22",
            "trailer": "https://www.youtube.com/watch?v=JuDLepNa7hw",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/suicide-squad-22_gp01.jpg",
            "moTa": "Suicide Squad 22",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-08-22T08:08:14.043",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
        },
    ],
    incomingMovie: [
        {
            "maPhim": 8068,
            "tenPhim": "Suicide Squad 22",
            "biDanh": "suicide-squad-22",
            "trailer": "https://www.youtube.com/watch?v=JuDLepNa7hw",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/suicide-squad-22_gp01.jpg",
            "moTa": "Suicide Squad 22",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-08-22T08:08:14.043",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
        },
    ],
}

export const MovieReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_MOVIE': {
            state.arrMovie = action.arrMovie;
            state.showingMovie = action.arrMovie.filter(movie => movie.dangChieu === true);
            state.incomingMovie = action.arrMovie.filter(movie => movie.sapChieu === true);
            return { ...state };
        }

        default : return {...state}
    }
}