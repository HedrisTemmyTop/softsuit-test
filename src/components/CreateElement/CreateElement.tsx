import { FC, FormEvent } from "react";
import "./_create-element.scss";
import StepOne from "./StepOne/StepOne";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCheckmark } from "react-icons/io";

import StepTwo from "./StepTwo/StepTwo";
import * as Actions from "../../store/actions";
import months from "../utils/months";
import Spinner from "../../shared/Spinner";
import { AppDispatch } from "../../store";
import { RootState } from "../../types/reducers";
import { PayloadType } from "../../types/createElement";
import { optionTypes } from "../../types/selectTypes";

interface PropTypes {
  onClose: () => void;
}

const CreateElement: FC<PropTypes> = ({ onClose }) => {
  const {
    step,
    name,
    classification,
    category,
    payrun,
    description,
    reportingName,
    startDate,
    processingType,
    endDate,
    payFreq,
    status,
    prorate,
    isSubmitting,
    submitError,
    selectedMonths,
    type,
    lookupId,
  } = useSelector((state: RootState) => state.createElementReducer);

  const dispatch: AppDispatch = useDispatch();

  // Function to proceed to the  step 2
  const proceed = () => {
    dispatch({
      type: Actions.CHANGE_STEP,
      payload: 2,
    });
  };

  // Validate step one form inputs
  const validateStepOne = () => {
    if (
      !name ||
      !name ||
      !classification ||
      !category ||
      !payrun ||
      !description ||
      !reportingName
    ) {
      dispatch({ type: Actions.VALIDATE_ERROR, payload: true });
      return false;
    } else {
      dispatch({ type: Actions.VALIDATE_ERROR, payload: false });
      return true;
    }
  };

  // Validate step two form inputs
  const validateStepTwo = () => {
    if (
      !startDate ||
      !endDate ||
      (payFreq === "selected" && selectedMonths.length === 0)
    ) {
      dispatch({ type: Actions.VALIDATE_ERROR, payload: true });
      return false;
    } else {
      dispatch({ type: Actions.VALIDATE_ERROR, payload: false });
      return true;
    }
  };

  // Handle the "Next" button click
  const handleNext = (e: FormEvent) => {
    e.preventDefault();

    // if you're in step 1 validate before going to step 2
    if (step === 1) {
      if (validateStepOne()) {
        proceed();
      } else {
        return false;
      }
    }

    // if step 2 then valdate before submit
    if (step === 2) {
      if (validateStepTwo()) {
        //  define types for payrun, classification, and category
        const payrunTyped: optionTypes = payrun as optionTypes;
        const classificationTyped: optionTypes = classification as optionTypes;
        const categoryTyped: optionTypes = category as optionTypes;

        // your pay load
        const payload: PayloadType = {
          name,
          description,
          payRunId: +payrunTyped.value,
          payRunValueId: payrunTyped.label,
          classificationId: +classificationTyped.value,
          classificationValueId: classificationTyped.label,
          categoryId: +categoryTyped.value,
          categoryValueId: categoryTyped.label,
          reportingName,
          processingType,
          status: status ? "Active" : "Inactive",
          prorate: !!prorate, // Convert prorate to boolean
          effectiveStartDate: startDate,
          effectiveEndDate: endDate,
          selectedMonths: payFreq === "monthly" ? months : selectedMonths,
          payFrequency: payFreq,
          modifiedBy: "Idris Babalola",
        };
        console.log(classification);
        if (type === "Create") {
          dispatch(Actions.submitElementHandler(payload));
        }
        if (type === "Edit") {
          dispatch(Actions.editElementHandler(payload, lookupId));
        }
        // dispatch()
      } else {
        return false;
      }
    }
  };

  // Handle the "Back" button click
  const handleBack = (e: FormEvent) => {
    e.preventDefault();

    // if it's step one, close the modal, else go back
    if (step === 1) {
      onClose();
    }
    dispatch({
      type: Actions.CHANGE_STEP,
      payload: 1,
    });
  };
  return (
    <div className="create-container">
      <div className="create-element">
        <h2 className="create-element__heading">{type} Element</h2>
        <div className="create-element__progress create-element__progress-element">
          <span className="create-element__progress--line create-element__progress--line-active"></span>
          <span className="create-element__progress--title">
            <div className="create-element__progress--title-text">
              Element Details
            </div>

            <div className="create-element__progress--btn create-element__progress--btn-active">
              {step === 1 ? "1" : <IoMdCheckmark />}
            </div>
          </span>
          <span
            className={`create-element__progress--line
             ${step === 2 && "create-element__progress--line-active"}`}
          ></span>
          <span className="create-element__progress--title">
            <div className="create-element__progress--title-text">
              Additional Details
            </div>

            <div
              className={`create-element__progress--btn ${
                step === 2 && "create-element__progress--btn-active"
              }`}
            >
              2
            </div>
          </span>
          <span className="create-element__progress--line"></span>
        </div>
        <form className="create-element__form">
          {step === 1 && <StepOne />}

          {step === 2 && <StepTwo />}

          <button
            className="create-element__form--btns create-element__form--btns-cancel"
            onClick={handleBack}
          >
            <span>{step === 1 ? "Cancel" : "Back"}</span>
          </button>
          <button
            className="create-element__form--btns create-element__form--btns-next"
            onClick={handleNext}
            style={isSubmitting ? { opacity: "0.5" } : {}}
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : <span>Next</span>}
          </button>
          {submitError && (
            <span className="create-element__input--error">{submitError}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateElement;
