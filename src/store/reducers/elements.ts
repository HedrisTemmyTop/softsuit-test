import actionType from "../../types/actionType";
import { PayloadType } from "../../types/createElement";
import * as Actions from "./../actions";

interface StateType {
  elements: PayloadType[];
  isLoading: boolean;
  error: string;
}

const initialState: StateType = {
  elements: [],
  isLoading: true,
  error: "",
};

const elementsReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case Actions.GET_ALL_ELEMENTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.GET_ALL_ELEMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: action.payload,
      };
    case Actions.GET_ALL_ELEMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default elementsReducer;
