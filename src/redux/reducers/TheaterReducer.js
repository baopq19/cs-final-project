import { SET_BRAND, SET_DETAIL, SET_SHOWTIME, SET_THEATER } from "../types/TheaterType";

const stateDefault = {
    arrBrand: [
        
    ],

    arrTheater: [
        
    ],

    movieDetail: {
        '............': '......',
    },

}

export const TheaterReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_BRAND: {
            state.arrBrand = action.arrBrand;
            return { ...state };
        }
        
        case SET_THEATER: {
            state.arrTheater = action.arrTheater;
            return { ...state };
        }
            
        case SET_DETAIL: {
            state.movieDetail = action.movieDetail;
            return {...state}
        }
            
        default : return { ...state }
    }
}