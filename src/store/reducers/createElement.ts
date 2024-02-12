import actionType from "../../types/actionType";
// import { createElTypes } from "../../types/createElement";
import * as Actions from "./../actions";

const initialState = {
  name: "",
  type: "Create",
  classification: {
    label: "",
    value: "",
  },
  category: {
    label: "",
    value: "",
  },
  payrun: {
    label: "",
    value: "",
  },
  description: "",
  reportingName: "",
  startDate: "",
  endDate: "",
  processingType: "open",
  payFreq: "monthly",
  selectedMonths: [],
  prorate: true,
  status: true,
  step: 0,
  error: false,
  classificationOptions: [],
  loadingClassification: false,
  errorClassification: "",
  categoryOptions: [],
  loadingCategory: false,
  errorCategory: "",

  payrunOptions: [],
  loadingPayrun: false,
  errorPayrun: "",
  errorMessage: "",
  loading: true,
  isSubmitting: false,
  submitError: "",
  lookupId: "",
};

const createElementReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case Actions.GET_ELEMENT_PAYRUN_ERROR:
      return {
        ...state,
        loadingPayrun: false,
        errorPayrun: action.payload,
      };

    case Actions.GET_ELEMENT_PAYRUN_SUCCESS:
      return {
        ...state,
        loadingPayrun: false,
        errorPayrun: "",
        payrunOptions: action.payload,
      };
    case Actions.GET_ELEMENT_PAYRUN_LOADING:
      return {
        ...state,
        loadingPayrun: true,
      };

    case Actions.GET_ELEMENT_CLASSIFICATION_ERROR:
      return {
        ...state,
        loadingClassification: false,
        errorClassification: action.payload,
      };

    case Actions.GET_ELEMENT_CLASSIFICATION_SUCCESS:
      return {
        ...state,
        loadingClassification: false,
        errorClassification: "",
        classificationOptions: action.payload,
      };

    case Actions.GET_ELEMENT_CLASSIFICATION_LOADING:
      return {
        ...state,

        loadingClassification: true,
      };
    case Actions.GET_ELEMENT_CATEGORY_SUCCESS:
      return {
        ...state,
        loadingCategory: false,
        categoryError: "",
        categoryOptions: action.payload,
      };
    case Actions.GET_ELEMENT_CATEGORY_ERROR:
      return {
        ...state,
        loadingCategory: false,
        categoryError: action.payload,
      };
    case Actions.GET_ELEMENT_CATEGORY_LOADING:
      return {
        ...state,

        loadingCategory: true,
      };
    case Actions.CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case Actions.CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case Actions.CHANGE_SELECTED_MONTHS:
      return {
        ...state,
        selectedMonths: action.payload,
      };
    case Actions.CHANGE_CLASSIFICATION:
      return {
        ...state,
        loading: true,
        classification: action.payload,
      };
    case Actions.CHANGE_CATEGORY:
      return {
        ...state,
        loading: true,
        category: action.payload,
      };
    case Actions.CHANGE_PAYRUN:
      return {
        ...state,
        payrun: action.payload,
      };
    case Actions.CHANGE_STARTDATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case Actions.CHANGE_ENDDATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case Actions.CHANGE_PROCESSING_TYPE:
      return {
        ...state,
        processingType: action.payload,
      };
    case Actions.CHANGE_PAY_FREQ:
      return {
        ...state,
        payFreq: action.payload,
      };
    case Actions.CHANGE_REPORTING_NAME:
      return {
        ...state,
        reportingName: action.payload,
      };
    case Actions.CHANGE_PRORATE:
      return {
        ...state,
        prorate: action.payload,
      };
    case Actions.CHANGE_STATUS:
      return {
        ...state,
        status: !state.status,
      };
    case Actions.CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };

    case Actions.VALIDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Actions.CREATE_ELEMENT_LOADING:
      return {
        ...state,
        isSubmitting: true,
      };
    case Actions.CREATE_ELEMENT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        step: 3,
      };
    case Actions.CREATE_ELEMENT_ERROR:
      return {
        ...state,
        isSubmitting: false,
        submitError: action.payload,
      };
    case Actions.CREATE_ELEMENT_COMPLETE:
      return {
        ...initialState,
        step: action.payload,
      };
    case Actions.EDIT_ELEMENT:
      return {
        ...state,
        step: 1,
        type: "Edit",
        lookupId: action.payload.id,

        processingType: action.payload.processingType,
        name: action.payload.name,
        reportingName: action.payload.reportingName,
        description: action.payload.description,
        startDate: action.payload.effectiveStartDate,
        endDate: action.payload.effectiveEndDate,
        payFreq: action.payload.payFrequency,
        status: action.payload.status === "Active" ? true : false,
        selectedMonths: action.payload.selectedMonths,
        classification: {
          value: action.payload.classificationId,
          label: action.payload.classificationValueId,
        },
        payrun: {
          value: action.payload.payrunId,
          label: action.payload.payRunValueId,
        },
        category: {
          value: action.payload.categoryId,
          label: action.payload.categoryValueId,
        },
      };
    default:
      return state;
  }
};

export default createElementReducer;
