import { ThunkAction } from "redux-thunk";
import { RootState } from "./reducers";

export type AppDispatch = ThunkAction<void, RootState, null, any>;
