import { SET_EDIT, SET_MOVIE, SET_SEARCH, UNSET_EDIT } from "../types/MovieType";


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
    arrSearch: {
        "currentPage": 1,
        "count": 2,
        "totalPages": 1,
        "totalCount": 2,
        "items": [
            {
                "maPhim": 8963,
                "tenPhim": "update hình bị lỗi quài dậy",
                "biDanh": "update-hinh-bi-loi-quai-day",
                "trailer": "https://youtu.be/nW948Va-l10",
                "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/update-hinh-bi-loi-quai-day_gp01.jpg",
                "moTa": "Phim rất hay",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2021-10-03T02:26:40.487",
                "danhGia": 10,
                "hot": true,
                "dangChieu": true,
                "sapChieu": true
            },
        ],    
    },
    edit: {
        editing: false,
        editMovie: {

        }
    },

}

export const MovieReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_MOVIE: {
            state.arrMovie = action.arrMovie;
            state.showingMovie = action.arrMovie.filter(movie => movie.dangChieu === true);
            state.incomingMovie = action.arrMovie.filter(movie => movie.sapChieu === true);
            return { ...state };
        }
        case SET_SEARCH: {
            state.arrSearch = action.arrSearch;
            return { ...state };
        }
        case SET_EDIT: {
            state.edit.editing = true;
            state.edit.editMovie = action.editMovie;
            return { ...state };
        }
        case UNSET_EDIT: {
            state.edit.editing = false;
            state.edit.editMovie = {};
            return { ...state };
        }

        default : return {...state}
    }
}