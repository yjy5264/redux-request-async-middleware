'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPostsClear = exports.fetchPostsFailure = exports.fetchPostsSuccess = exports.fetchPostsRequest = undefined;

var _actionType = require('./actionType');

var fetchPostsRequest = exports.fetchPostsRequest = function fetchPostsRequest(subject, model, next) {
    return {
        type: _actionType.FETCH_POSTS_REQUEST,
        subject: subject,
        model: model,
        next: next
    };
}; /**
    * Created by yjy on 2017/3/31.
    */
var fetchPostsSuccess = exports.fetchPostsSuccess = function fetchPostsSuccess(subject, response) {
    return {
        type: _actionType.FETCH_POSTS_SUCCESS,
        subject: subject,
        response: response
    };
};

var fetchPostsFailure = exports.fetchPostsFailure = function fetchPostsFailure(subject, error) {
    return {
        type: _actionType.FETCH_POSTS_FAILURE,
        subject: subject,
        error: error
    };
};

var fetchPostsClear = exports.fetchPostsClear = function fetchPostsClear(subject) {
    return {
        type: _actionType.FETCH_POSTS_CLEAR,
        subject: subject
    };
};