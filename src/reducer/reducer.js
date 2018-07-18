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
                        isFetching: true,
                        state: 'loading',
                        subject: action.subject,
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
                        isFetching: false,
                        state: 'error',
                        subject: action.subject,
                        response: state[action.subject].response,
                        error: action.error,
                    }
                }
            );
        case FETCH_POSTS_SUCCESS:
            return assign({},
                state,
                {
                    [action.subject]: {
                        isFetching: false,
                        state: 'success',
                        subject: action.subject,
                        response: action.response,
                    }
                }
            );
        case FETCH_POSTS_CLEAR:
            return assign({},
                state,
                {
                    [action.subject]: {
                        isFetching: false,
                        state: 'cleared',
                        subject: null,
                        response: null,
                        error: null,
                    }
                }
            );
        default:
            return state;
    }
};
