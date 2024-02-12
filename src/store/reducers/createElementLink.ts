import actionType from "../../types/actionType";
import * as Actions from "./../actions";

const initialState = {
  name: "",
  type: "Create",
  union: "",
  department: {
    label: "",
    value: "",
  },
  subOrganization: {
    label: "",
    value: "",
  },
  jobTitle: {
    label: "",
    value: "",
  },
  location: {
    label: "",
    value: "",
  },
  employeeType: {
    label: "",
    value: "",
  },
  employeeCategory: {
    label: "",
    value: "",
  },
  grade: {
    label: "",
    value: "",
  },
  gradeCategory: {
    label: "",
    value: "",
  },
  pension: {
    label: "",
    value: "",
  },
  housing: {
    label: "",
    value: "",
  },
  loyaltyBonus: {
    label: "",
    value: "",
  },
  amountTypeBonus: {
    label: "",
    value: "",
  },
  departmentOptions: [],
  subOrganizationOptions: [],
  jobTitleOptions: [],
  locationOptions: [],
  employeeTypeOptions: [],
  employeeCategoryOptions: [],
  gradeOptions: [],
  pensionOptions: [],
  gradeCategoryOptions: [],
  amountTypeOptions: [],
  loadingDepartment: false,
  loadingGrade: false,
  loadingPension: false,
  loadingHousing: false,
  loadingLoyaltyBonus: false,
  loadingGradeCategory: false,

  loadingSubOrg: false,
  loadingAmountType: false,
  loadingJobTitle: false,
  loadingLocation: false,
  loadingEmployeeType: false,
  loadingEmployeeCategory: false,
  errorDepartment: "",
  errorSubOrg: "",
  errorJobTitle: "",
  errorLocation: "",
  errorEmployeeType: "",
  errorEmployeeCategory: "",
  errorGrade: false,
  errorPension: false,
  errorHousing: false,
  errorLoyaltyBonus: false,
  errorAmountType: false,
  automate: true,
  status: true,
  effectiveStartDate: "",
  effectiveEndDate: "",
  error: "",
  step: 0,
};

const createElementLinksReducer = (
  state = initialState,
  action: actionType
) => {
  switch (action.type) {
    case Actions.CHANGE_ELEMENT_STEP: {
      return {
        ...state,
        step: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_AMONT: {
      return {
        ...state,
        amountTypeBonus: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_DEPARTMENT: {
      return {
        ...state,
        department: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_SUBORG: {
      return {
        ...state,
        subOrganization: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_JOBTITILE: {
      return {
        ...state,
        jobTitle: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_LOYALTY: {
      return {
        ...state,
        loyaltyBonus: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_HOUSING: {
      return {
        ...state,
        housing: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_PENSION: {
      return {
        ...state,
        pension: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_GRADE_CATEGORY: {
      return {
        ...state,
        gradeCategory: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_GRADE: {
      return {
        ...state,
        grade: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_EMPLOYEE_CATEGORY: {
      return {
        ...state,
        employeeCategory: action.payload,
      };
    }
    case Actions.CHANGE_ELEMENT_LOCATION: {
      return {
        ...state,
        location: action.payload,
      };
    }
    case Actions.VALIDATE_ELLINKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createElementLinksReducer;
