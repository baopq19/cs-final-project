import Axios from 'axios';
import { DOMAIN, TOKEN } from '../util/settings/Constant';


export class BaseService {
    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {'Authorization': 'Bearer' + localStorage.getItem(TOKEN)},
        })
    }

    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization': 'Bearer' + localStorage.getItem(TOKEN)},
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer' + localStorage.getItem(TOKEN)},
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {'Authorization': 'Bearer' + localStorage.getItem(TOKEN)},
        })
    }
}