import { CURRENT_USER, TOKEN } from "../../util/settings/Constant";
import { SET_EDIT_USER, SET_LOGIN, SET_LOGOUT, SET_SEARCH, UNSET_EDIT_USER } from "../types/UserType";

const stateDefault = {
  currentUser: {
  },
  arrSearch: {
    "currentPage": 1,
    "count": 1,
    "totalPages": 240,
    "totalCount": 239,
    "items": [
      {
        "taiKhoan": "0941234234",
        "matKhau": "0941234234",
        "email": "asdfqwe@gmail.com",
        "soDt": "0941234234",
        "maNhom": null,
        "maLoaiNguoiDung": "KhachHang",
        "hoTen": "09412342342"
      },
    ],
  },
  edit: {
    editing: false,
    editUser: {

    },
  },
}

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case SET_SEARCH:
        state.arrSearch = action.arrSearch;
        return { ...state };
      case SET_LOGIN:
        state.currentUser = action.currentUser;
        localStorage.setItem(CURRENT_USER, JSON.stringify(action.currentUser));
        localStorage.setItem(TOKEN, JSON.stringify(action.currentUser.accessToken));
        return { ...state };
      case SET_LOGOUT:
        state.currentUser = {};
        localStorage.removeItem(CURRENT_USER);
        localStorage.removeItem(TOKEN);
        return { ...state };
      case SET_EDIT_USER:
        state.edit.editing = true;
        state.edit.editUser = action.editUser;
        return { ...state };
      case UNSET_EDIT_USER:
        state.edit.editing = false;
        state.edit.editUser = {};
        return { ...state };

      default:
          return { ...state };
    }
}