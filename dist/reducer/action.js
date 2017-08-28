'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPostsFailureAll = exports.fetchPostsSuccessAll = exports.fetchPostsRequestAll = exports.fetchPostsClear = exports.fetchPostsFailure = exports.fetchPostsSuccess = exports.fetchPostsRequest = undefined;

var _actionType = require('./actionType');

var fetchPostsRequest = exports.fetchPostsRequest = function fetchPostsRequest(subject, model, next) {
    return {
        type: _actionType.FETCH_POSTS_REQUEST,
        subject: subject,
        model: model,
        next: next
    };
};

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

var fetchPostsRequestAll = exports.fetchPostsRequestAll = function fetchPostsRequestAll(subjectModelArray, next) {
    return {
        type: _actionType.FETCH_POSTS_REQUEST_ALL,
        subjectModelArray: subjectModelArray,
        next: next
    };
};

var fetchPostsSuccessAll = exports.fetchPostsSuccessAll = function fetchPostsSuccessAll(subjectArray, responseArray) {
    return {
        type: _actionType.FETCH_POSTS_SUCCESS_ALL,
        subjectArray: subjectArray,
        responseArray: responseArray
    };
};

var fetchPostsFailureAll = exports.fetchPostsFailureAll = function fetchPostsFailureAll(subjectArray, error) {
    return {
        type: _actionType.FETCH_POSTS_FAILURE_ALL,
        subjectArray: subjectArray,
        error: error
    };
};