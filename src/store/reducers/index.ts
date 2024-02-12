import { combineReducers } from "redux";

import createElementReducer from "./createElement";
import elementsReducer from "./elements";
import elementReducer from "./element";
import createElementLinksReducer from "./createElementLink";
const rootReducer = combineReducers({
  createElementReducer,
  elementsReducer,
  elementReducer,
  createElLinks: createElementLinksReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
