import {
    INFO_USER_SUCCESS,
    INFO_USER_FAIL,
} from '../actions/types';

const initialState = { error: false }

export default function UserReducers(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case INFO_USER_SUCCESS:
            return {
                ...state,
                error: true,
            };
        case INFO_USER_FAIL:
            return {
                ...state,
                error: false,
            }
        default:
            return state;
    }
}