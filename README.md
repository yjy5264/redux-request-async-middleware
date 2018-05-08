# redux-request-async-middleware
With this package, you can use react-redux without action, actionType, reducer, etc.

## Install
```javascript
npm install redux-request-async-middleware --save
```
## propertys
| Property | Description |
| -------- | ----------- |
| requests | this is a reducer |
| reduxRequest | correct middleware |
| initReduxRequest | init function, initReduxRequest(store), it's required |
| request | request(subject, model, next), next is a optional param |
| clear | clear(subject), you can clear this subject in the store |
## Usage
### Provider
```javascript
import React from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {initReduxRequest, reduxRequest, requests} from 'redux-request-async-middleware';

export default class extends React.Component {
    render() {
        const rootReducer = combineReducers({requests}); // you can add other reducers
        const store = createStore(rootReducer, applyMiddleware(reduxRequest));
        initReduxRequest(store); // to make sure that request can get the store.dispatch function, so it is important 
        return <Provider store={store}>{this.props.children}</Provider>
    }
}
```
### model
```javascript
import fetch from '../../libs/http/fetch';
//fetch is your own warpped Promise，you can handle request and response inside
//you can also ues xhr, but it must be a warpped Promise

export default class model {
    static yourModel1(param) {
        return fetch('/api/yourModel1', {body: {param}, method: 'POST'});
    }
}
```
### subject
```javascript
export const subject = {
    yourSubject1: 'yourSubject1',
    yourSubject1: 'yourSubject2',
    yourSubject1: 'yourSubject3',
}
```
### Component
```javascript
import React from 'react';
import model from './model';
import { connect } from "react-redux";
import { subject } from './subject';
import { request, clear, reduxUtils } from 'redux-request-async-middleware';

@connect(state => {
    let yourSubject1State = state.requests[subject.yourSubject1];
    let yourSubject2State = state.requests[subject.yourSubject2];
    let yourSubject3State = state.requests[subject.yourSubject3];
    let loading = reduxUtils.getLoading([yourSubject1State, yourSubject2State, yourSubject3State]);
    //there you can get the loading state
    let yourSubject1 = reduxUtils.getResponse(yourSubject1State);
    let yourSubject2 = reduxUtils.getResponse(yourSubject2State);
    let yourSubject3 = reduxUtils.getResponse(yourSubject3State);
    //if you add the subject in following select, you can handle data here
    //you can add the subject in other component select to realize cross-page operation
    return { loading, yourSubject1, yourSubject2, yourSubject3 };
})
export default class YourComponent extends React.Component {
    componentDidMount() {
        this.func();
    }
    
    componentWillUnmount() {
        clear(subject.yourSubject1);
        // you can clear the subject in redux store
    }
    
    func() {
        request(subject.yourSubject1, () => model.yourModel1(param));
        //request base usage
        
        const next = res => yourNext()
        request(subject.yourSubject2, () => model.yourModel2(param), next);
        //with this, you can get the callback
    }
    
    render() {
        let { loading, yourSubject1, yourSubject2, yourSubject3 } = this.props;
        return(
            <OtherComponent 
                data1={yourSubject1} 
                data2={yourSubject2} 
                data3={yourSubject3} 
                loading={loading} 
            />
        )
    }
}
```
