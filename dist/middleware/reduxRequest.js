'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduxRequest = undefined;

var _action = require('../reducer/action');

var _actionType = require('../reducer/actionType');

var reduxRequest = exports.reduxRequest = function reduxRequest(store) {
    return function (next) {
        return function (action) {
            var result = next(action);
            var type = action.type,
                subject = action.subject,
                model = action.model,
                subjectModelArray = action.subjectModelArray;

            var _next = action.next;
            if (type === _actionType.FETCH_POSTS_REQUEST) {
                model().then(function (response) {
                    store.dispatch((0, _action.fetchPostsSuccess)(subject, response));
                    _next && _next(response);
                }).catch(function (error) {
                    store.dispatch((0, _action.fetchPostsFailure)(subject, error));
                });
            }
            if (type === _actionType.FETCH_POSTS_REQUEST_ALL) {
                var subjectArray = [];
                var modelArray = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = subjectModelArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var x = _step.value;

                        subjectArray.push(x.subject);
                        modelArray.push(x.model);
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

                Promise.all(modelArray).then(function (responseArray) {
                    store.dispatch((0, _action.fetchPostsSuccessAll)(subjectArray, responseArray));
                    _next && _next(responseArray);
                }).catch(function (e) {
                    store.dispatch((0, _action.fetchPostsFailureAll)(subjectArray, e));
                });
            }
            return result;
        };
    };
};