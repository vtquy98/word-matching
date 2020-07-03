import { createStore, applyMiddleware } from "redux";
//import { middleware as apiMiddleware } from "redux-api-call";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
