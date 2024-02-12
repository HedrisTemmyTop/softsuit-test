import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import api from "../../api/api";

export const GET_ELEMENT_LOADING = "[GET ELEMENT] LOADING";
export const GET_ELEMENT_SUCCESS = "[GET ELEMENT] SUCCESS";
export const GET_ELEMENT_ERROR = "[GET ELEMENT] ERROR";

export const getElement = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response: AxiosResponse = await api.get(`/elements/${id}`);
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: GET_ELEMENT_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: GET_ELEMENT_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      dispatch({
        type: GET_ELEMENT_ERROR,
        payload: error.message,
      });
    }
  };
};
