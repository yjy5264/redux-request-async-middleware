'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requests = undefined;

var _actionType = require('./actionType');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by yjy on 2017/3/31.
                                                                                                                                                                                                                   */


var requests = exports.requests = function requests() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionType.FETCH_POSTS_REQUEST:
            return Object.assign({}, state, _defineProperty({}, action.subject, {
                subject: action.subject,
                isFetching: true,
                response: null,
                error: null
            }));
        case _actionType.FETCH_POSTS_FAILURE:
            return Object.assign({}, state, _defineProperty({}, action.subject, {
                subject: action.subject,
                isFetching: false,
                response: null,
                error: action.error
            }));
        case _actionType.FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, _defineProperty({}, action.subject, {
                subject: action.subject,
                isFetching: false,
                response: action.response,
                error: null
            }));
        case _actionType.FETCH_POSTS_CLEAR:
            return Object.assign({}, state, _defineProperty({}, action.subject, {
                subject: null,
                isFetching: false,
                response: null,
                error: null
            }));
        default:
            return state;
    }
};