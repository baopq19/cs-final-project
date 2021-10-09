

const stateDefault = {
    arrBanner: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        },
    ],
};


export const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        
        case 'SET_BANNER': {
            state.arrBanner = action.arrBanner;
            return { ...state };
        }


        default: return {...state}
    }
}