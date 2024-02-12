import { FC, Fragment, useState } from "react";
import "./../../_create-element.scss";
import Select from "react-select";
import RadioBtn from "../../../../shared/RadioBtn";
import Switch from "../../../../shared/Switch";

interface categoryType {
  label: string;
  value: string;
}

const StepThree: FC = () => {
  const [automate, setAutomate] = useState<boolean>(true);
  const [status, setStatus] = useState<boolean>(true);
  const category: categoryType[] = [
    {
      label: "Deduction",
      value: "Deduction",
    },
  ];
  return (
    <Fragment>
      <div className="create-element__input">
        <label>Amount Type </label>

        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input">
        <label>...</label>

        <Select options={category} defaultValue={category[0]} />
      </div>
      <div className="create-element__input">
        <label>Effective Start Date</label>
        <input type="date" placeholder="Select Date" />
      </div>
      <div className="create-element__input">
        <label>Effective End Date</label>
        <input type="date" placeholder="Select Date" />
      </div>
      <div className="create-element__input">
        <label>Automate</label>
        <div className="create-element__select">
          <span className="create-element__select--container">
            <RadioBtn active={automate} onToggle={() => setAutomate(true)} />
            <span className="create-element__select--text">Yes</span>
          </span>
          <span className="create-element__select--container">
            <RadioBtn active={!automate} onToggle={() => setAutomate(false)} />
            <span className="create-element__select--text">No</span>
          </span>
        </div>
      </div>
      <div className="create-element__input">
        <label>Status</label>
        <div className="create-element__select">
          <span className="create-element__select--container">
            <Switch
              active={status}
              onToggle={() => setStatus((prev) => !prev)}
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

export default StepThree;
