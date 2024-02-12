import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
} from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { RootState } from "../types/reducers";

const store: Store<RootState, any> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch;

export default store;
