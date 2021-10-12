import { movieService } from "../../services/MovieService";

export const getBanner = () => {

    return async (dispatch) => {
        try {
            const result = await movieService.getBanners();
            
            dispatch({
                type: 'SET_BANNER',
                arrBanner: result.data.content,
            });
        } catch (error) {
            console.error('error', error); 
        }
    }

}