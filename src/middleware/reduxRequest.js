/**
 * Created by yjy on 2017/8/21.
 */
import {
    fetchPostsFailure,
    fetchPostsSuccess,
    fetchPostsSuccessAll,
    fetchPostsFailureAll,
} from '../reducer/action'
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_REQUEST_ALL,
} from '../reducer/actionType'

export const reduxRequest = store => next => action => {
    let result = next(action);
    let { type, subject, model, subjectModelArray } = action;
    let _next = action.next;
    if(type === FETCH_POSTS_REQUEST) {
        model().then(response => {
            _next && _next(response);
            store.dispatch(fetchPostsSuccess(subject, response));
        }).catch(error => {
            store.dispatch(fetchPostsFailure(subject, error));
        });
    }
    if(type === FETCH_POSTS_REQUEST_ALL) {
        let subjectArray = [];
        let modelArray = [];
        for(let x of subjectModelArray) {
            subjectArray.push(x.subject);
            modelArray.push(x.model);
        }
        Promise.all(modelArray).then(responseArray => {
            _next && _next(responseArray);
            store.dispatch(fetchPostsSuccessAll(subjectArray, responseArray));
        }).catch(e => {
            store.dispatch(fetchPostsFailureAll(subjectArray, e));
        })
    }
    return result
};