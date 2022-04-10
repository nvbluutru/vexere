import rootReducer from "./reducers/rootReducer";
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
const composedEnhancers = composeWithDevTools();
export default createStore(rootReducer, composedEnhancers)