'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduxRequest = undefined;

var _action = require('../reducer/action');

var _actionType = require('../reducer/actionType');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by yjy on 2017/8/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var reduxRequest = exports.reduxRequest = function reduxRequest(store) {
    return function (next) {
        return function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(action) {
                var result, type, subject, model, subjectModelArray, _next, response, subjectArray, modelArray, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                result = next(action);
                                type = action.type, subject = action.subject, model = action.model, subjectModelArray = action.subjectModelArray;
                                _next = action.next;

                                if (!(type === _actionType.FETCH_POSTS_REQUEST)) {
                                    _context.next = 15;
                                    break;
                                }

                                _context.prev = 4;
                                _context.next = 7;
                                return model();

                            case 7:
                                response = _context.sent;

                                store.dispatch((0, _action.fetchPostsSuccess)(subject, response));
                                _next && _next(response);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](4);

                                store.dispatch((0, _action.fetchPostsFailure)(subject, _context.t0));

                            case 15:
                                if (!(type === _actionType.FETCH_POSTS_REQUEST_ALL)) {
                                    _context.next = 38;
                                    break;
                                }

                                subjectArray = [];
                                modelArray = [];
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context.prev = 21;

                                for (_iterator = subjectModelArray[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    x = _step.value;

                                    subjectArray.push(x.subject);
                                    modelArray.push(x.model);
                                }
                                _context.next = 29;
                                break;

                            case 25:
                                _context.prev = 25;
                                _context.t1 = _context['catch'](21);
                                _didIteratorError = true;
                                _iteratorError = _context.t1;

                            case 29:
                                _context.prev = 29;
                                _context.prev = 30;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 32:
                                _context.prev = 32;

                                if (!_didIteratorError) {
                                    _context.next = 35;
                                    break;
                                }

                                throw _iteratorError;

                            case 35:
                                return _context.finish(32);

                            case 36:
                                return _context.finish(29);

                            case 37:
                                Promise.all(modelArray).then(function (responseArray) {
                                    store.dispatch((0, _action.fetchPostsSuccessAll)(subjectArray, responseArray));
                                    _next && _next(responseArray);
                                }).catch(function (e) {
                                    store.dispatch((0, _action.fetchPostsFailureAll)(subjectArray, e));
                                });

                            case 38:
                                return _context.abrupt('return', result);

                            case 39:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[4, 12], [21, 25, 29, 37], [30,, 32, 36]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();
    };
};