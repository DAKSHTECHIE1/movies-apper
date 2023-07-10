import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";
//okkkk
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("ACTION TYPE = ", action.type);
    }
    next(action);//bcoz being used as M.W.
  };//ok

const store = createStore(rootReducer, applyMiddleware(logger, thunk));//okkkkk//okkkkk
//okkkk holiiii
export const StoreContext = createContext();
console.log('SC',StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;//okkkkk
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
        {/* okkkkk */}
      </StoreContext.Provider>
    );
  }
}//okkk

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  //okkk
  document.getElementById("root")//okkkk
);//okkk
//ok
//ok
//ok