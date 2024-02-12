import { FC } from "react";

import "./_index.scss";

interface RadioProp {
  active: boolean;
  onToggle: () => void;
}

const RadioBtn: FC<RadioProp> = ({ active, onToggle }) => {
  return (
    <div className="radio" onClick={onToggle}>
      <input type="radio" />
      <span className={`radio__${active ? "active" : "inactive"}`}>
        <span className={`radio__active--${active && "inner"}`}></span>
      </span>
    </div>
  );
};

export default RadioBtn;
