import { Fragment, FC, ChangeEvent } from "react";
import RadioBtn from "../../../shared/RadioBtn";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./../../../store/actions";
import Switch from "../../../shared/Switch";
import Select, { MultiValue } from "react-select";
import months from "../../utils/months";
import { optionTypes } from "../../../types/selectTypes";
import { RootState } from "../../../types/reducers";

const StepTwo: FC = () => {
  // Redux state and dispatch
  const {
    processingType,
    prorate,
    payFreq,
    status,
    selectedMonths,
    startDate,
    endDate,
    error,
  } = useSelector((state: RootState) => state.createElementReducer);
  const dispatch = useDispatch();

  // Handler for changing processing type
  const handleProcessingType = (payload: string) => {
    dispatch({
      type: Actions.CHANGE_PROCESSING_TYPE,
      payload,
    });
  };

  // Handler for changing pay frequency
  const handlePayFreq = (payload: string) => {
    dispatch({
      type: Actions.CHANGE_PAY_FREQ,
      payload,
    });
  };

  // Handler for changing prorate
  const handleProrate = (payload: boolean) => {
    dispatch({
      type: Actions.CHANGE_PRORATE,
      payload,
    });
  };

  // Handler for changing selected months
  const handleSelect = (selected: MultiValue<optionTypes>) => {
    dispatch({
      type: Actions.CHANGE_SELECTED_MONTHS,
      payload: selected,
    });
  };

  // Handler for input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    dispatch({
      type,
      payload: e.target.value,
    });
  };

  return (
    <Fragment>
      {/* Start Date Input */}
      <div className="create-element__input">
        <label>Effective Start Date</label>
        <input
          type="date"
          placeholder="Select Date"
          value={startDate}
          onChange={(e) => handleChange(e, Actions.CHANGE_STARTDATE)}
        />
        {error && !startDate && (
          <span className="create-element__input--error">
            Start date is required
          </span>
        )}
      </div>

      {/* End Date Input */}
      <div className="create-element__input">
        <label>Effective End Date</label>
        <input
          type="date"
          placeholder="Select Date"
          value={endDate}
          onChange={(e) => handleChange(e, Actions.CHANGE_ENDDATE)}
        />
        {error && !endDate && (
          <span className="create-element__input--error">
            End Date is required
          </span>
        )}
      </div>

      {/* Processing Type Radio Buttons */}
      <div className="create-element__input">
        <label>Processing Type Frequency</label>
        <div className="create-element__select">
          <span className="create-element__select--container">
            <RadioBtn
              active={processingType == "open"}
              onToggle={() => handleProcessingType("open")}
            />
            <span className="create-element__select--text">Open</span>
          </span>
          <span className="create-element__select--container">
            <RadioBtn
              active={processingType === "close"}
              onToggle={() => handleProcessingType("close")}
            />
            <span className="create-element__select--text">Closed</span>
          </span>
        </div>
      </div>

      {/* Pay Frequency Radio Buttons */}
      <div className="create-element__input">
        <label>Pay Frequency</label>
        <div className="create-element__select">
          <span className="create-element__select--container">
            <RadioBtn
              active={payFreq === "monthly"}
              onToggle={() => handlePayFreq("monthly")}
            />
            <span className="create-element__select--text">Monthly</span>
          </span>
          <span className="create-element__select--container">
            <RadioBtn
              active={payFreq === "selected"}
              onToggle={() => handlePayFreq("selected")}
            />
            <span className="create-element__select--text">
              Selected Months
            </span>
          </span>
        </div>
      </div>

      {/* Selected Pay Months (conditional rendering based on Pay Frequency) */}
      {payFreq === "monthly" && (
        <div className="create-element__input full-grid ">
          <label>Selected Pay Months</label>
          <div className="create-element__select input-disable"></div>
        </div>
      )}
      {payFreq === "selected" && (
        <div className="create-element__input full-grid">
          <label>Selected Pay Months</label>
          <Select
            isMulti
            options={months}
            onChange={handleSelect}
            value={selectedMonths}
          />
          {error && selectedMonths.length === 0 && (
            <span className="create-element__input--error">
              You have to select months or choose monthly instead
            </span>
          )}
        </div>
      )}

      {/* Prorate Radio Buttons */}
      <div className="create-element__input">
        <label>Prorate</label>
        <div className="create-element__select">
          <span className="create-element__select--container">
            <RadioBtn active={!!prorate} onToggle={() => handleProrate(true)} />
            <span className="create-element__select--text">Yes</span>
          </span>
          <span className="create-element__select--container">
            <RadioBtn active={!prorate} onToggle={() => handleProrate(false)} />
            <span className="create-element__select--text">No</span>
          </span>
        </div>
      </div>

      {/* Status Switch */}
      <div className="create-element__input">
        <label>Status</label>
        <div className="create-element__select">
          <span className="create-element__select--container">
            <Switch
              active={status}
              onToggle={() => dispatch({ type: Actions.CHANGE_STATUS })}
            />
            <span className="create-element__select--text">
              {status ? "Active" : "Inactive"}
            </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default StepTwo;
