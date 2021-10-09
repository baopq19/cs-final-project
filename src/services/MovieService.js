/* eslint-disable no-useless-constructor */
import { GROUP_ID } from '../util/settings/Constant';
import { BaseService } from './BaseService';

class MovieService extends BaseService {

    BASE_ENDPOINT = '/QuanLyPhim';

    constructor() {
        super();
    }

    getBanners = () => {
        return this.get(`${this.BASE_ENDPOINT}/LayDanhSachBanner`);
    }

    getMovies = () => {
        return this.get(`${this.BASE_ENDPOINT}/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    }
}

export const movieService = new MovieService();