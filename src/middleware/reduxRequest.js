/**
 * Created by yjy on 2017/8/21.
 */
import {
    fetchPostsFailure,
    fetchPostsSuccess,
} from '../reducer/action'
import {
    FETCH_POSTS_REQUEST,
} from '../reducer/actionType'

export const reduxRequest = store => next => action => {
    let result = next(action);
    let { type, subject, model } = action;
    let _next = action.next;
    if(type === FETCH_POSTS_REQUEST) {
        model().then(response => {
            _next && _next(response);
            store.dispatch(fetchPostsSuccess(subject, response));
        }).catch(error => {
            console.error(error);
            store.dispatch(fetchPostsFailure(subject, error));
        });
    }
    return result
};