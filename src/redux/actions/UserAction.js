import { userService } from './../../services/UserService';

export const searchUserAction = (keyWord, page, itemsPerPage) => {
    return async (dispatch) => {
        try {
            const result = await userService.searchUser(keyWord, page, itemsPerPage);

            dispatch({
                type: 'SET_SEARCH',
                arrSearch: result.data.content,
            })

            console.log('hello', result.data.content);
        } catch (error) {
            console.error('error', error);
        }
    }
}