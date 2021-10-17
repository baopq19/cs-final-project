import { userService } from './../../services/UserService';
import { history } from '../../App';
import { Redirect } from 'react-router';
export const loginAction = (loginModel) => {
    return async (dispatch) => {
        try {
            const result = await userService.login(loginModel);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: 'SET_LOGIN',
                    currentUser: result.data.content,
                })
                history.goBack();
            }
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
                <Redirect to='/login' />
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
                type: 'SET_SEARCH',
                arrSearch: result.data.content,
            })

        } catch (error) {
            console.error('error', error);
        }
    }
}