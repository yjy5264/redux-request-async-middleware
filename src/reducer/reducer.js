/**
 * Created by yjy on 2017/3/31.
 */
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_CLEAR,
    FETCH_POSTS_REQUEST_ALL,
    FETCH_POSTS_SUCCESS_ALL,
    FETCH_POSTS_FAILURE_ALL
} from './actionType';

export const requests = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return Object.assign({},
                state,
                {
                    [action.subject]: {
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
                        isFetching: false,
                        response: null,
                        error: null,
                    }
                }
            );
        case FETCH_POSTS_REQUEST_ALL: {
            let subjectArray = [];
            for(let x of action.subjectModelArray) {
                subjectArray.push(x.subject);
            }
            let _json = {};
            for (let x of subjectArray) {
                _json[x] = {
                    isFetching: true,
                    response: null,
                    error: null,
                }
            }
            return Object.assign({},
                state,
                _json,
            );
        }
        case FETCH_POSTS_SUCCESS_ALL: {
            let _json = {};
            for (let i in action.subjectArray) {
                _json[action.subjectArray[i]] = {
                    isFetching: false,
                    response: action.responseArray[i],
                }
            }
            return Object.assign({},
                state,
                _json
            );
        }
        case FETCH_POSTS_FAILURE_ALL: {
            let _json = {};
            for (let x of action.subjectArray) {
                _json[x] = {
                    isFetching: false,
                    error: action.error,
                }
            }
            return Object.assign({},
                state,
                _json
            );
        }
        default:
            return state;
    }
};
