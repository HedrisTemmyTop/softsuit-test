// import { RootState } from './../../types/reducers';
import createElementReducer from "./createElement";
import elementsReducer from "./elements";
import elementReducer from "./element";
import createElementLinksReducer from "./createElementLink";
import { Reducer, combineReducers } from "redux";

const rootReducer: Reducer<any, any> = combineReducers<any>({
  createElementReducer,
  elementsReducer,
  elementReducer,
  createElLinks: createElementLinksReducer,
});

export default rootReducer;
