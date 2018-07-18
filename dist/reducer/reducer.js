'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requests = undefined;

var _actionType = require('./actionType');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by yjy on 2017/3/31.
                                                                                                                                                                                                                   */


var requests = exports.requests = function requests() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionType.FETCH_POSTS_REQUEST:
            return (0, _objectAssign2.default)({}, state, _defineProperty({}, action.subject, {
                isFetching: true,
                state: 'loading',
                subject: action.subject,
                response: null,
                error: null
            }));
        case _actionType.FETCH_POSTS_FAILURE:
            return (0, _objectAssign2.default)({}, state, _defineProperty({}, action.subject, {
                isFetching: false,
                state: 'error',
                subject: action.subject,
                response: state[action.subject].response,
                error: action.error
            }));
        case _actionType.FETCH_POSTS_SUCCESS:
            return (0, _objectAssign2.default)({}, state, _defineProperty({}, action.subject, {
                isFetching: false,
                state: 'success',
                subject: action.subject,
                response: action.response
            }));
        case _actionType.FETCH_POSTS_CLEAR:
            return (0, _objectAssign2.default)({}, state, _defineProperty({}, action.subject, {
                isFetching: false,
                state: 'cleared',
                subject: null,
                response: null,
                error: null
            }));
        default:
            return state;
    }
};