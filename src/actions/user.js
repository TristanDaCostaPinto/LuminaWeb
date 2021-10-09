import {
    INFO_USER_FAIL,
    INFO_USER_SUCCESS,
    SET_MESSAGE,
} from './types';

import { updateInfoUser } from '../services/user.service';

export const updateUserInfo = (idUser, infoUser) => (dispatch) => {
    return updateInfoUser(idUser, infoUser).then(
        (response) => {
            dispatch({
                type: INFO_USER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

                dispatch({
                    type: INFO_USER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
        }
    );
};
