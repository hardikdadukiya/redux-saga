import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducers from "./reducer/index";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import  rootSaga  from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();  
const store = compose (applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)(reducers);
sagaMiddleware.run(rootSaga); // this will use-full to run watchAgeUp 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>  
    <App />
  </Provider>
  
);
