/**
 * Created by yjy on 2017/3/31.
 */
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_CLEAR,
} from './actionType';
import assign from 'object-assign';

export const requests = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return assign({},
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
            return assign({},
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
            return assign({},
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
            return assign({},
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
