/**
 * Created by yjy on 2017/8/21.
 */
import {
    fetchPostsRequest,
    fetchPostsClear,
    fetchPostsRequestAll,
} from '../reducer/action'

var _dispatch;

export const initReduxRequest = store => {
    _dispatch = store.dispatch;
};

export const clear = subject => {
    _dispatch(fetchPostsClear(subject));
};

export const request = (subject, model, next) => {
    _dispatch(fetchPostsRequest(subject, model, next));
};

export const requestAll = (subjectModelArray, next) => {
    // subjectModelArray = [{subject, model}, ...]
    _dispatch(fetchPostsRequestAll(subjectModelArray, next));
};