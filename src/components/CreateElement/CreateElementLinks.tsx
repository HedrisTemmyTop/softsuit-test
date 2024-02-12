import { FC, FormEvent } from "react";
import "./_create-element.scss";
import StepOne from "./ElementLinks/StepOne/StepOne";
import StepTwo from "./ElementLinks/StepTwo/StepTwo";
import StepThree from "./ElementLinks/StepThree/StepThree";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/reducers";
import { IoMdCheckmark } from "react-icons/io";
import * as Actions from "../../store/actions";
import { AppDispatch } from "../../store";
interface PropTypes {
  onClose: () => void;
}

const CreateElementLinks: FC<PropTypes> = ({ onClose }) => {
  const { step, name } = useSelector((state: RootState) => state.createElLinks);

  const dispatch: AppDispatch = useDispatch();

  // Function to proceed to the  step 2
  const proceed = () => {
    dispatch({
      type: Actions.CHANGE_ELEMENT_STEP,
      payload: step + 1,
    });
  };

  // Validate step one form inputs
  const validateStepOne = () => {
    if (!name) {
      dispatch({ type: Actions.VALIDATE_ELLINKS_ERROR, payload: true });
      return false;
    } else {
      dispatch({ type: Actions.VALIDATE_ELLINKS_ERROR, payload: false });
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

    if (step === 2) {
      proceed();
    }
  };

  const handleGoback = (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      onClose();
    } else {
      dispatch({
        type: Actions.CHANGE_ELEMENT_STEP,
        payload: step - 1,
      });
    }
  };

  return (
    <div className="create-container">
      <div className="create-element">
        <h2 className="create-element__heading">Create Element Link</h2>
        <div className="create-element__progress create-element__progress-links">
          <span className="create-element__progress--line create-element__progress--line-active"></span>

          <div className="create-element__progress--btn create-element__progress--btn-active">
            {step >= 2 ? <IoMdCheckmark /> : "1"}
          </div>
          <span
            className={`create-element__progress--line
             ${step >= 2 && "create-element__progress--line-active"}`}
          ></span>

          <div
            className={`create-element__progress--btn   ${
              step >= 2 && "create-element__progress--btn-active"
            }`}
          >
            {step >= 3 ? <IoMdCheckmark /> : "2"}
          </div>
          <span
            className={`create-element__progress--line
             ${step === 3 && "create-element__progress--line-active"}`}
          ></span>
          <div
            className={`create-element__progress--btn   ${
              step === 3 && "create-element__progress--btn-active"
            }`}
          >
            3
          </div>
          <span className="create-element__progress--line"></span>
        </div>
        <form className="create-element__form">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}

          <button
            className="create-element__form--btns create-element__form--btns-cancel"
            onClick={handleGoback}
          >
            <span>{step === 1 ? "Cancel" : "Back"}</span>
          </button>
          <button
            className="create-element__form--btns create-element__form--btns-next"
            onClick={handleNext}
          >
            <span>Next</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateElementLinks;
