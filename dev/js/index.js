import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import ToggleReducer from './reducers/toggle-reducer';

let store = createStore(ToggleReducer);

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>
  ,
    document.getElementById('root')
);
