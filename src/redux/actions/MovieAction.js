import { movieService } from "../../services/MovieService"


export const getMovies = () => {

    return async (dispatch) => {
        try {
            const result = await movieService.getMovies();

            dispatch({
                type: 'SET_MOVIE',
                arrMovie: result.data.content,
            });

        } catch (error) {
            console.error('error', error);
        }
    }
    
}