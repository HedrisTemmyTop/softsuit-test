import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import api from "../../api/api";
import { PayloadType } from "../../types/createElement";

export const GET_ELEMENT_CLASSIFICATION_SUCCESS =
  "[CREATE ELEMENT] CHANGE CLASSIFICATION SUCCESS";
export const GET_ELEMENT_CLASSIFICATION_LOADING =
  "[CREATE ELEMENT] CHANGE CLASSIFICATION LOADING";
export const GET_ELEMENT_CLASSIFICATION_ERROR =
  "[CREATE ELEMENT] CHANGE CLASSIFICATION ERROR";
export const GET_ELEMENT_CATEGORY_ERROR =
  "[CREATE ELEMENT] CHANGE CATEGORY ERROR";
export const GET_ELEMENT_CATEGORY_SUCCESS =
  "[CREATE ELEMENT] CHANGE CATEGORY SUCCESS";
export const GET_ELEMENT_CATEGORY_LOADING =
  "[CREATE ELEMENT] CHANGE CATEGORY LOADING";
export const GET_ELEMENT_PAYRUN_ERROR = "[CREATE ELEMENT] CHANGE PAYRUN ERROR";
export const GET_ELEMENT_PAYRUN_SUCCESS =
  "[CREATE ELEMENT] CHANGE PAYRUN SUCCESS";
export const GET_ELEMENT_PAYRUN_LOADING =
  "[CREATE ELEMENT] CHANGE PAYRUN LOADING";
export const CHANGE_PAYRUN = "[CREATE ELEMENT] CHANGE PAYRUN";
export const CHANGE_REPORTING_NAME = "[CREATE ELEMENT] CHANGE REPORTING_NAME";
export const CHANGE_STARTDATE = "[CREATE ELEMENT] CHANGE STARTDATE";
export const CHANGE_ENDDATE = "[CREATE ELEMENT] CHANGE ENDDATE";
export const CHANGE_PROCESSING_TYPE = "[CREATE ELEMENT] CHANGE PROCESSING_TYPE";
export const CHANGE_PAY_FREQ = "[CREATE ELEMENT] CHANGE PAY_FREQ";
export const CHANGE_PRORATE = "[CREATE ELEMENT] CHANGE PRORATE";
export const CHANGE_STATUS = "[CREATE ELEMENT] CHANGE STATUS";
export const CHANGE_STEP = "[CREATE ELEMENT] CHANGE STEP";
export const VALIDATE_ERROR = "[CREATE ELEMENT] VALIDATE ERROR";

export const CHANGE_NAME = "[CREATE ELEMENT] CHANGE NAME";
export const CHANGE_DESCRIPTION = "[CREATE ELEMENT] CHANGE DESCRIPTION";
export const CHANGE_CLASSIFICATION = "[CREATE ELEMENT] CHANGE CLASSIFICATION";
export const CHANGE_CATEGORY = "[CREATE ELEMENT] CHANGE CATEGORY";
export const CHANGE_SELECTED_MONTHS = "[CREATE ELEMENT] CHANGE SELECTED MONTHS";

export const CREATE_ELEMENT_LOADING = "[CREATE ELEMENT] CREATE ELEMENT LOADING";
export const CREATE_ELEMENT_SUCCESS = "[CREATE ELEMENT] CREATE ELEMENT SUCCESS";
export const CREATE_ELEMENT_ERROR = "[CREATE ELEMENT] CREATE ELEMENT ERROR";
export const CREATE_ELEMENT_COMPLETE =
  "[CREATE ELEMENT] CREATE ELEMENT COMPLETE";

export const EDIT_ELEMENT = "[EDIT ELEMENT]";
export const DELETE_ELEMENT_SUCCESS = "[DELETE ELEMENT] SUCCESS";
export const DELETE_ELEMENT_LOADING = "[DELETE ELEMENT] LOADING";
export const DELETE_ELEMENT_ERROR = "[DELETE ELEMENT] ERROR";

export const getElementClassification = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: GET_ELEMENT_CLASSIFICATION_LOADING,
      });
      const response: AxiosResponse = await api.get("/lookups/2/lookupvalues");
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: GET_ELEMENT_CLASSIFICATION_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_ELEMENT_CLASSIFICATION_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: GET_ELEMENT_CLASSIFICATION_ERROR,
        payload: error.message,
      });
    }
  };
};
export const getElementCategory = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_ELEMENT_CATEGORY_LOADING });
      const response: AxiosResponse = await api.get(`/lookups/1/lookupvalues`);
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: GET_ELEMENT_CATEGORY_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_ELEMENT_CATEGORY_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: GET_ELEMENT_CATEGORY_ERROR,
        payload: error.message,
      });
    }
  };
};
export const getElementPayrun = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: GET_ELEMENT_PAYRUN_LOADING,
      });
      const response: AxiosResponse = await api.get(`/lookups/5/lookupvalues`);
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: GET_ELEMENT_PAYRUN_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: GET_ELEMENT_PAYRUN_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: GET_ELEMENT_PAYRUN_ERROR,
        payload: error.message,
      });
    }
  };
};

export const submitElementHandler = (payload: PayloadType) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CREATE_ELEMENT_LOADING });
      const response: AxiosResponse = await api.post("/elements", payload);
      console.log(response);
      if (response.status === 201) {
        dispatch({
          type: CREATE_ELEMENT_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: CREATE_ELEMENT_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      dispatch({
        type: CREATE_ELEMENT_ERROR,
        payload: error.message,
      });
    }
  };
};
export const editElementHandler = (payload: PayloadType, id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CREATE_ELEMENT_LOADING });
      const response: AxiosResponse = await api.put(`/elements/${id}`, payload);
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: CREATE_ELEMENT_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: CREATE_ELEMENT_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      dispatch({
        type: CREATE_ELEMENT_ERROR,
        payload: error.message,
      });
    }
  };
};
export const deleteElement = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETE_ELEMENT_LOADING });
    try {
      const response: AxiosResponse = await api.delete(`/elements/${id}`);
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: DELETE_ELEMENT_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: DELETE_ELEMENT_ERROR,
          payload: response.data.message,
        });
      }
    } catch (error: any) {
      dispatch({
        type: DELETE_ELEMENT_ERROR,
        payload: error.message,
      });
    }
  };
};
