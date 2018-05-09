/**
 * Created by yjy on 2017/8/21.
 */
import {
    fetchPostsRequest,
    fetchPostsClear,
} from '../reducer/action'

let _dispatch;

export const initReduxRequest = store => {
    _dispatch = store.dispatch;
    return true;
};

export const clear = subject => {
    _dispatch(fetchPostsClear(subject));
    return true;
};

export const request = (subject, model, next) => {
    _dispatch(fetchPostsRequest(subject, model, next));
    return true;
};
