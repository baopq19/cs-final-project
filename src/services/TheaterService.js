/* eslint-disable no-useless-constructor */
import { BaseService } from "./BaseService";

class TheaterService extends BaseService {

    BASE_ENDPOINT = '/QuanLyRap';

    constructor() {
        super();
    }

    getAllBrand() {
        return this.get(`${this.BASE_ENDPOINT}/LayThongTinHeThongRap`);
    }

    getTheaterByBrand(brand) {
        return this.get(`${this.BASE_ENDPOINT}/LayThongTinCumRapTheoHeThong?maHeThongRap=${brand}`);
    }

    getShowtimesById(maPhim) {
        return this.get(`${this.BASE_ENDPOINT}/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }
}

export const theaterService = new TheaterService();