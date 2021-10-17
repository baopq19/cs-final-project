import { theaterService } from "../../services/TheaterService"
import { SET_BRAND, SET_DETAIL, SET_THEATER } from "../types/TheaterType";

export const getAllBrandAction = () => {
    return async (dispatch) => {
        try {
            const result = await theaterService.getAllBrand();

            dispatch({
                type: SET_BRAND,
                arrBrand: result.data.content,
            });

        } catch (error) {
            console.error('error', error);
        }
    }
}

export const getTheaterAction = (brand) => {
    return async (dispatch) => {
        try {
            const result = await theaterService.getTheaterByBrand(brand);

            dispatch({
                type: SET_THEATER,
                arrTheater: result.data.content,
            });

        } catch (error) {
            console.error('error', error);
        }
    }
}

export const getShowtimesAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await theaterService.getShowtimesById(maPhim);

            dispatch({
                type: SET_DETAIL,
                movieDetail: result.data.content,
            })

            console.log('rs', result);
        } catch (error) {
            console.error('error', error);
        }
    }
}