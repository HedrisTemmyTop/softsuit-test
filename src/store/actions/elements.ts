import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import api from "../../api/api";

export const GET_ALL_ELEMENTS_LOADING = "[GET ALL ELEMENTS] LOADING";
export const GET_ALL_ELEMENTS_SUCCESS = "[GET ALL ELEMENTS] SUCCESS";
export const GET_ALL_ELEMENTS_ERROR = "[GET ALL ELEMENTS] ERROR";

export const getAllElements = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_ALL_ELEMENTS_LOADING });
      const response: AxiosResponse = await api.get("/elements");
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: GET_ALL_ELEMENTS_SUCCESS,
          payload: response.data.data.content,
        });
      } else {
        dispatch({
          type: GET_ALL_ELEMENTS_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      dispatch({
        type: GET_ALL_ELEMENTS_ERROR,
        payload: error.message,
      });
    }
  };
};
