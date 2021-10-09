import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://www.share-your-universe.com/public/api/v1/user/';

export const updateInfoUser = (idUser, infoUser) => {
    return axios.put(API_URL + idUser, infoUser, { headers: authHeader() })
    .catch(err => console.log(err.response));
}

