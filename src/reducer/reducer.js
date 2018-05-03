/**
 * Created by yjy on 2017/3/31.
 */
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_CLEAR,
} from './actionType';

export const requests = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return Object.assign({},
                state,
                {
                    [action.subject]: {
                        subject: action.subject,
                        isFetching: true,
                        response: null,
                        error: null,
                    }
                }
            );
        case FETCH_POSTS_FAILURE:
            return Object.assign({},
                state,
                {
                    [action.subject]: {
                        subject: action.subject,
                        isFetching: false,
                        response: null,
                        error: action.error,
                    }
                }
            );
        case FETCH_POSTS_SUCCESS:
            return Object.assign({},
                state,
                {
                    [action.subject]: {
                        subject: action.subject,
                        isFetching: false,
                        response: action.response,
                        error: null,
                    }
                }
            );
        case FETCH_POSTS_CLEAR:
            return Object.assign({},
                state,
                {
                    [action.subject]: {
                        subject: null,
                        isFetching: false,
                        response: null,
                        error: null,
                    }
                }
            );
        default:
            return state;
    }
};
