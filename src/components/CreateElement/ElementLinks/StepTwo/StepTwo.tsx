import { FC, Fragment } from "react";
import "./../../_create-element.scss";
import Select from "react-select";

interface categoryType {
  label: string;
  value: string;
}

const StepTwo: FC = () => {
  const category: categoryType[] = [
    {
      label: "Deduction",
      value: "Deduction",
    },
  ];
  return (
    <Fragment>
      <div className="create-element__input">
        <label>Grade</label>

        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input">
        <label>Grade Step Category</label>
        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input full-grid">
        <label>Union</label>
        <input type="text" />
      </div>
      <div className="create-element__additional full-grid">
        <h2>Additional Assignment Information</h2>
        <div className="create-element__form">
          <div className="create-element__input">
            <label>Pension</label>

            <Select options={category} defaultValue={category[0]} />
          </div>
          <div className="create-element__input">
            <label>Housing</label>

            <Select options={category} defaultValue={category[0]} />
          </div>
          <div className="create-element__input">
            <label>Loyalty Bonus</label>

            <Select options={category} defaultValue={category[0]} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepTwo;
