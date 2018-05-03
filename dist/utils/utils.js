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