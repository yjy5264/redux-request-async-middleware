# redux-request-async-middleware
With this package, you can use react-redux without action, actionType, reducer, and so on.

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
| requestAll | request(subjectModelArray, next), next is a optional param |
| clear | clear(subject), you can clear this subject in the store |
## Usage
### Provider
```javascript
import React from 'react'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {initReduxRequest, reduxRequest, requests} from 'redux-request-async-middleware'

export default class extends React.Component {
    render() {
        const rootReducer = combineReducers({requests}); //you can add other reducers
        const store = createStore(rootReducer, applyMiddleware(reduxRequest));
        initReduxRequest(store);
        return <Provider store={store}>{this.props.children}</Provider>
    }
}
```
### model
```javascript
import fetch from '../../libs/http/fetch'

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
}
```
### Component
```javascript
import React from 'react'
import model from './model'
import {connect} from "react-redux"
import {subject} from './subject'
import {request, requestAll, clear} from 'redux-request-async-middleware'

class YourComponent extends React.Component {
	componentDidMount() {
		this.func();
	}
	
	componentWillUnmount() {
		clear(subject.yourSubject4);
	}

	func() {
		request(subject.yourSubject1, () => model.yourModel1(param));
		const next = res => yourNext()
		request(subject.yourSubject2, () => model.yourModel2(param), next);
		let subjectModelArray = [
            {subject: subject.yourSubject3, model: model.yourModel3(param)},
            {subject: subject.yourSubject4, model: model.yourModel4(param)},
        ];
        requestAll(subjectModelArray);
	}
	
	componentWillReceiveProps(props) {
        this.loading = false;
        this.loading = (props.yourSubject1 && props.yourSubject1.isFetching) ||
        	(props.yourSubject2 && props.yourSubject2.isFetching) ||
        	(props.yourSubject3 && props.yourSubject3.isFetching) ||
            (props.yourSubject4 && props.yourSubject4.isFetching);

        if (props.yourSubject1 && props.yourSubject1.response) {
            this.yourdata1 = props.yourSubject1.response;
        }
        if (props.yourSubject2 && props.yourSubject2.response) {
            this.yourdata2 = props.yourSubject2.response;
        }
        if (props.yourSubject3 && props.yourSubject3.response) {
            
        }
        if (props.yourSubject4 && props.yourSubject4.response) {
            
        }
    }

	render() {
		return(
			<OtherComponent data1={this.yourdata1} data2={this.yourdata2} loading={this.loading} />
		)
	}
}

const select = state => {
    return {
        yourSubject1: state.requests[subject.yourSubject1],
        yourSubject2: state.requests[subject.yourSubject2],
        yourSubject3: state.requests[subject.yourSubject3],
        yourSubject4: state.requests[subject.yourSubject4],
    }
};

export default connect(select)(YourComponent)
```