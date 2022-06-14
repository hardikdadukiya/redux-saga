import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import  watchAgeUp  from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();  
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp); // this will use-full to run watchAgeUp 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  
    <App />
  </Provider>,
  
);
