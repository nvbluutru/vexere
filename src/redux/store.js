import rootReducer from "./reducer";
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
const composedEnhancers = composeWithDevTools();
export default createStore(rootReducer, composedEnhancers)