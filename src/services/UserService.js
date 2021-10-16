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
}

export const userService = new UserService();