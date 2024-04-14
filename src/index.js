import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import { createStore } from "redux"; 
import reducers from './reducers';

const store = createStore(reducers); // reducers 경로에 있는 index.js의 data 를 store로 지정
 
const listener = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.subscribe(listener);
listener();