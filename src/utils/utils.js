const getResponse = state =>
    state
    && state.response !== null
    && state.response;

const getLoading = (states = []) =>
    states.reduce((pre, cur) =>
        pre || (cur && cur.isFetching)
        , false)
    || false;

export const reduxUtils = { getResponse, getLoading };
