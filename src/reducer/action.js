/**
 * Created by yjy on 2017/3/31.
 */
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_CLEAR,
} from './actionType';

export const fetchPostsRequest = (subject, model, next) => {
    return {
        type: FETCH_POSTS_REQUEST,
        subject,
        model,
        next,
    }
};

export const fetchPostsSuccess = (subject, response) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        subject,
        response,
    }
};

export const fetchPostsFailure = (subject, error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        subject,
        error,
    }
};

export const fetchPostsClear = (subject) => {
    return {
        type: FETCH_POSTS_CLEAR,
        subject
    }
};
