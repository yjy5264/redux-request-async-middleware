'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduxRequest = undefined;

var _action = require('../reducer/action');

var _actionType = require('../reducer/actionType');

/**
 * Created by yjy on 2017/8/21.
 */
var reduxRequest = exports.reduxRequest = function reduxRequest(store) {
    return function (next) {
        return function (action) {
            var result = next(action);
            var type = action.type,
                subject = action.subject,
                model = action.model;

            var _next = action.next;
            if (type === _actionType.FETCH_POSTS_REQUEST) {
                model().then(function (response) {
                    _next && _next(response);
                    store.dispatch((0, _action.fetchPostsSuccess)(subject, response));
                }).catch(function (error) {
                    console.error(error);
                    store.dispatch((0, _action.fetchPostsFailure)(subject, error));
                });
            }
            return result;
        };
    };
};