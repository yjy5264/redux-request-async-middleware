'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestAll = exports.request = exports.clear = exports.initReduxRequest = undefined;

var _action = require('../reducer/action');

var _dispatch;

var initReduxRequest = exports.initReduxRequest = function initReduxRequest(store) {
    _dispatch = store.dispatch;
};

var clear = exports.clear = function clear(subject) {
    _dispatch((0, _action.fetchPostsClear)(subject));
};

var request = exports.request = function request(subject, model, next) {
    _dispatch((0, _action.fetchPostsRequest)(subject, model, next));
};

var requestAll = exports.requestAll = function requestAll(subjectModelArray, next) {
    // subjectModelArray = [{subject, model}, ...]
    _dispatch((0, _action.fetchPostsRequestAll)(subjectModelArray, next));
};