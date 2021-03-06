import { movieService } from "../../services/MovieService"
import { SET_EDIT, SET_MOVIE, SET_SEARCH, UNSET_EDIT } from "../types/MovieType";


export const getMovies = () => {

    return async (dispatch) => {
        try {
            const result = await movieService.getMovies();

            dispatch({
                type: SET_MOVIE,
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
                type: SET_SEARCH,
                arrSearch: result.data.content,
            });
        } catch (error) {
            console.error('error', error);
        }
    }
    
}

export const addMovieAction = (formData) => {

    return async (dispatch) => {
        try {
            const result = await movieService.addMovie(formData);
            if (result.status === 200) {
                alert('Thêm phim thành công');
                dispatch(searchMovieAction(formData.get('tenPhim'), 1, 5));
                return true;
            }
        } catch (error) {
            alert(error.response?.data?.content);
            console.error('error', error.response.data);
            return false;
        }
    }
    
}

export const deleteMovieAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await movieService.deleteMovie(maPhim);
            if (result.status === 200) {
                alert('Xoá thành công');
                return true;
            }
        } catch (error) {
            console.error('Error', error.response.data);
            return false;
        }
    }
}

export const enableEditMovieAction = (tenPhim) => {
    return async (dispatch) => {
        try {
            const result = await movieService.searchMovie(tenPhim, 1, 1);
            if (result.status === 200) {
                dispatch({
                    type: SET_EDIT,
                    editMovie: result.data.content.items[0],
                })
            }
        } catch (error) {
            console.error('error', error);
        }
    }
}

export const disableEditMovieAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: UNSET_EDIT,
            })
        } catch (error) {
            console.error('error', error);
        }
    }
}

export const editMovieAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await movieService.updateMovie(formData);
            if (result.status === 200) {
                alert('Cập nhật phim thành công');
                dispatch({
                    type: UNSET_EDIT,
                })
                dispatch(searchMovieAction(formData.get('tenPhim'), 1, 5));
            }
        } catch (error) {
            alert(error);
            console.error('error', error);
        }
    }
}