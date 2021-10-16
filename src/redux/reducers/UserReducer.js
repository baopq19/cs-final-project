const stateDefault = {
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
}

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            state.arrSearch = action.arrSearch;
            return { ...state };
    
        default:
            return { ...state };
    }
}