import { theaterService } from "../../services/TheaterService"

export const getAllBrandAction = () => {
    return async (dispatch) => {
        try {
            const result = await theaterService.getAllBrand();

            dispatch({
                type: 'SET_BRAND',
                arrBrand: result.data.content,
            });

        } catch (error) {
            console.log('error', error);
        }
    }
}

export const getTheaterAction = (brand) => {
    return async (dispatch) => {
        try {
            const result = await theaterService.getTheaterByBrand(brand);

            dispatch({
                type: 'SET_THEATER',
                arrTheater: result.data.content,
            });

        } catch (error) {
            console.log('error', error);
        }
    }
}