import createElementReducer from "../store/reducers/createElement";
import createElementLinksReducer from "../store/reducers/createElementLink";
import elementReducer from "../store/reducers/element";
import elementsReducer from "../store/reducers/elements";

export type createElementReducerState = ReturnType<typeof createElementReducer>;
export type elementsReducerState = ReturnType<typeof elementsReducer>;
export type elementReducerState = ReturnType<typeof elementReducer>;
export type createElementLinksReducerState = ReturnType<
  typeof createElementLinksReducer
>;

// Combine all reducer state types into RootState
export type RootState = {
  createElementReducer: createElementReducerState;
  elementsReducer: elementsReducerState;
  elementReducer: elementReducerState;
  createElLinks: createElementLinksReducerState;
};
