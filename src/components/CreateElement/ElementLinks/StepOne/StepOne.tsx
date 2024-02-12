import { ChangeEvent, FC, Fragment } from "react";
import "./../../_create-element.scss";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./../../../../store/actions";
import { RootState } from "../../../../types/reducers";

interface categoryType {
  label: string;
  value: string;
}

const StepOne: FC = () => {
  const { name, error } = useSelector(
    (state: RootState) => state.createElLinks
  );
  const dispatch = useDispatch();
  const category: categoryType[] = [
    {
      label: "Deduction",
      value: "Deduction",
    },
  ];

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    dispatch({
      type,
      payload: e.target.value,
    });
  };

  return (
    <Fragment>
      <div className="create-element__input full-grid">
        <label>Element Link Name</label>
        <input
          type="text"
          placeholder="Input Name"
          onChange={(e) => handleChange(e, Actions.CHANGE_ELEMENT_NAME)}
          value={name}
        />
        {error && !name && (
          <span className="create-element__input--error">
            Element name is required
          </span>
        )}
      </div>

      <div className="create-element__input">
        <label>Suborganization</label>
        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input">
        <label>Department</label>
        <Select options={category} defaultValue={category[0]} />
      </div>

      <div className="create-element__input">
        <label>Job Title</label>
        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input">
        <label>Location</label>
        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input">
        <label>Employee Type</label>
        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input">
        <label>Employee Category</label>
        <Select options={category} defaultValue={category[0]} />
      </div>
    </Fragment>
  );
};

export default StepOne;
