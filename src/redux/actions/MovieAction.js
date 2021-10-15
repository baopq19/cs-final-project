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

export const searchMovieAction = (tenPhim, page, itemsPerPage) => {

    return async (dispatch) => {
        try {
            const result = await movieService.searchMovie(tenPhim, page, itemsPerPage);

            dispatch({
                type: 'SET_SEARCH',
                arrSearch: result.data.content,
            });

            console.log(result);

        } catch (error) {
            console.error('error', error);
        }
    }
    
}