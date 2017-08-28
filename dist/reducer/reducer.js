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
                isFetching: true,
                response: null,
                error: null
            }));
        case _actionType.FETCH_POSTS_FAILURE:
            return Object.assign({}, state, _defineProperty({}, action.subject, {
                isFetching: false,
                error: action.error
            }));
        case _actionType.FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, _defineProperty({}, action.subject, {
                isFetching: false,
                response: action.response
            }));
        case _actionType.FETCH_POSTS_CLEAR:
            return Object.assign({}, state, _defineProperty({}, action.subject, {
                isFetching: false
            }));
        case _actionType.FETCH_POSTS_REQUEST_ALL:
            {
                var subjectArray = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = action.subjectModelArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var x = _step.value;

                        subjectArray.push(x.subject);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _json = {};
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = subjectArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _x2 = _step2.value;

                        _json[_x2] = {
                            isFetching: true,
                            response: null,
                            error: null
                        };
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return Object.assign({}, state, _json);
            }
        case _actionType.FETCH_POSTS_SUCCESS_ALL:
            {
                var _json2 = {};
                for (var i in action.subjectArray) {
                    _json2[action.subjectArray[i]] = {
                        isFetching: false,
                        response: action.responseArray[i]
                    };
                }
                return Object.assign({}, state, _json2);
            }
        case _actionType.FETCH_POSTS_FAILURE_ALL:
            {
                var _json3 = {};
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = action.subjectArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _x3 = _step3.value;

                        _json3[_x3] = {
                            isFetching: false,
                            error: action.error
                        };
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                return Object.assign({}, state, _json3);
            }
        default:
            return state;
    }
};