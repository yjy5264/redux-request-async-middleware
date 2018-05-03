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
};

var clear = exports.clear = function clear(subject) {
    _dispatch((0, _action.fetchPostsClear)(subject));
};

var request = exports.request = function request(subject, model, next) {
    _dispatch((0, _action.fetchPostsRequest)(subject, model, next));
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduxUtils = exports.reduxRequest = exports.initReduxRequest = exports.clear = exports.request = exports.requests = undefined;

var _reducer = require('./reducer/reducer');

var _dispatch = require('./dispatch/dispatch');

var _reduxRequest = require('./middleware/reduxRequest');

var _utils = require('./utils/utils');

/**
 * Created by yjy on 2017/8/21.
 */
exports.requests = _reducer.requests;
exports.request = _dispatch.request;
exports.clear = _dispatch.clear;
exports.initReduxRequest = _dispatch.initReduxRequest;
exports.reduxRequest = _reduxRequest.reduxRequest;
exports.reduxUtils = _utils.reduxUtils;
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by yjy on 2017/3/31.
 */
var FETCH_POSTS_REQUEST = exports.FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
var FETCH_POSTS_FAILURE = exports.FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
var FETCH_POSTS_SUCCESS = exports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
var FETCH_POSTS_CLEAR = exports.FETCH_POSTS_CLEAR = 'FETCH_POSTS_CLEAR';
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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getResponse = function getResponse(state) {
    return state && state.response !== null && state.response;
};

var getLoading = function getLoading() {
    var states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return states.reduce(function (pre, cur) {
        return pre || cur && cur.isFetching;
    }, false) || false;
};

var reduxUtils = exports.reduxUtils = { getResponse: getResponse, getLoading: getLoading };
