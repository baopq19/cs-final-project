/* eslint-disable no-useless-constructor */
import { GROUP_ID } from "../util/settings/Constant";
import { BaseService } from "./BaseService";


class UserService extends BaseService {
    BASE_ENDPOINT = '/QuanLyNguoiDung';

    constructor() {
        super();
    }

    searchUser = (keyWord, page, itemsPerPage) => {
        let paramsString = `MaNhom=${GROUP_ID}&`;
        if (keyWord !== '') {
            paramsString += `tuKhoa=${keyWord}&`;
        }
        paramsString += `soTrang=${page}&soPhanTuTrenTrang=${itemsPerPage}`;

        return this.get(`${this.BASE_ENDPOINT}/TimKiemNguoiDungPhanTrang?${paramsString}`);
    }

    login = (loginModel) => {
        const url = `${this.BASE_ENDPOINT}/DangNhap`;
        return this.post(url, loginModel);
    }

    register = (regisModel) => {
        const url = `${this.BASE_ENDPOINT}/DangKy`;
        return this.post(url, regisModel);
    }

    deleteUser = (taiKhoan) => {
        const url = `${this.BASE_ENDPOINT}/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
        return this.delete(url);
    }

    addUser = (userModel) => {
        const url = `${this.BASE_ENDPOINT}/ThemNguoiDung`;
        return this.post(url, userModel);
    }

    editUser = (userModel) => {
        const url = `${this.BASE_ENDPOINT}/CapNhatThongTinNguoiDung`;
        return this.put(url, userModel);
    }
}

export const userService = new UserService();