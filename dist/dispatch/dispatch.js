'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.request = exports.clear = exports.initReduxRequest = undefined;

var _action = require('../reducer/action');

var _dispatch = void 0; /**
                         * Created by yjy on 2017/8/21.
                         */
var initReduxRequest = exports.initReduxRequest = function initReduxRequest(store) {
    _dispatch = store.dispatch;
    return true;
};

var clear = exports.clear = function clear(subject) {
    _dispatch((0, _action.fetchPostsClear)(subject));
    return true;
};

var request = exports.request = function request(subject, model, next) {
    _dispatch((0, _action.fetchPostsRequest)(subject, model, next));
    return true;
};