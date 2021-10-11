const stateDefault = {
    arrBrand: [
        {
            "maHeThongRap": "BHDStar",
            "tenHeThongRap": "BHD Star Cineplex",
            "biDanh": "bhd-star-cineplex",
            "logo": "http://movieapi.cyberlearn.vn/hinhanh/bhd-star-cineplex.png"
        },
    ],

    arrTheater: [
        {
            "maCumRap": "bhd-star-cineplex-3-2",
            "tenCumRap": "BHD Star Cineplex - 3/2",
            "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
            "danhSachRap": [], 
        },
    ],
}

export const TheaterReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_BRAND': {
            state.arrBrand = action.arrBrand;
            return { ...state };
        }
        
        case 'SET_THEATER': {
            state.arrTheater = action.arrTheater;
            return { ...state };
        }
            
        default : return { ...state }
    }
}