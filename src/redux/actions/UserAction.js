import { userService } from './../../services/UserService';
import { history } from '../../App';
import { SET_LOGIN, SET_LOGOUT, SET_SEARCH } from '../types/UserType';
export const loginAction = (loginModel) => {
    return async (dispatch) => {
        try {
            const result = await userService.login(loginModel);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_LOGIN,
                    currentUser: result.data.content,
                })
                history.goBack();
            }
        } catch (error) {
            console.error('error', error.response.data.content);
        }
    }
}

export const logoutAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_LOGOUT,
            })
        } catch (error) {
            console.error('error', error.response.data.content);
        }
    }
}

export const registerAction = (regisModel) => {
    return async (dispatch) => {
        try {
            const result = await userService.register(regisModel);

            if (result.data.statusCode === 200) {
                alert('Đăng ký thành công');
            }
        } catch (error) {
            alert(error.response.data.content);
            console.error('error', error.response.data.content);
        }
    }
}

export const searchUserAction = (keyWord, page, itemsPerPage) => {
    return async (dispatch) => {
        try {
            const result = await userService.searchUser(keyWord, page, itemsPerPage);

            dispatch({
                type: SET_SEARCH,
                arrSearch: result.data.content,
            })

        } catch (error) {
            console.error('error', error);
        }
    }
}