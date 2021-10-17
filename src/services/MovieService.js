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

    searchMovie = (tenPhim, page, itemsPerPage) => {
        let paramsString = `maNhom=${GROUP_ID}&`;
        if (tenPhim !== '') {
            paramsString += `tenPhim=${tenPhim}&`
        }
        paramsString += `soTrang=${page}&soPhanTuTrenTrang=${itemsPerPage}`
        return this.get(`${this.BASE_ENDPOINT}/LayDanhSachPhimPhanTrang?${paramsString}`);
    }

    addMovie = (formData) => {
        const url = `${this.BASE_ENDPOINT}/ThemPhimUploadHinh`;

        return this.post(url, formData);
    }

    updateMovie = (formData) => {
        const url = `${this.BASE_ENDPOINT}/CapNhatPhimUpload`;

        return this.post(url, formData);
    }

    deleteMovie = (maPhim) => {
        const url = `${this.BASE_ENDPOINT}/XoaPhim?MaPhim=${maPhim}`
        return this.delete(url);
    }

    
}

export const movieService = new MovieService();