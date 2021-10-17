import { userService } from './../../services/UserService';
import { history } from '../../App';
import { SET_EDIT_USER, SET_LOGIN, SET_LOGOUT, SET_SEARCH, UNSET_EDIT_USER } from '../types/UserType';
import { UNSET_EDIT } from '../types/MovieType';
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

export const addUserAction = (userModel) => {
    return async (dispatch) => {
        try {
            const result = await userService.addUser(userModel);
            if (result.status === 200) {
                alert('Thêm người dùng thành công');
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data.content);
            }
            console.error('ERROR', error.response);
        }
    }
}

export const deleteUserAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await userService.deleteUser(taiKhoan);
            console.log(result);
            if (result.status === 200) {
                alert('Xoá thành công');
            }
        } catch (error) {
            console.error('ERROR', error);
        }
    }
}

export const editUserAction = (userModel) => {
    return async (dispatch) => {
        try {
            const result = await userService.editUser(userModel);
            if (result.status === 200) {
                alert('Chỉnh sửa người dùng thành công');
                dispatch({
                    type: UNSET_EDIT_USER,
                })
            }
        } catch (error) {
            alert(error);
            console.error('ERROR', error.response);
        }
    }
}

export const enableEditUserAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await userService.searchUser(taiKhoan, 1, 1);
            dispatch({
                type: SET_EDIT_USER,
                editUser: result.data.content.items[0],
            })
        } catch (error) {
            console.error('ERROR', error);
        }
    }
}

export const disableEditUserAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: UNSET_EDIT_USER,
            })
        } catch (error) {
            console.error('ERROR', error);
        }
    }
}