import actionType from "../../types/actionType";
import * as Actions from "./../actions";

const initialState = {
  element: {},
  isLoading: true,
  error: "",
  isDeleting: false,
  deleteError: "",
  isDeleted: false,
};

const elementReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case Actions.DELETE_ELEMENT_ERROR:
      return {
        ...state,
        isDeleting: false,
        deleteError: action.payload,
      };
    case Actions.DELETE_ELEMENT_LOADING:
      return {
        ...state,
        isDeleting: true,
      };
    case Actions.DELETE_ELEMENT_SUCCESS:
      return {
        ...state,
        isDeleted: true,
        isDeleting: false,
        deleteError: "",
      };
    case Actions.GET_ELEMENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case Actions.GET_ELEMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        element: action.payload,
      };
    case Actions.GET_ELEMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default elementReducer;
