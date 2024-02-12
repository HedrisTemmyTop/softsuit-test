import { FC } from "react";
import "./_index.scss";

interface SwitchProps {
  active: boolean;
  onToggle: () => void;
}

const Switch: FC<SwitchProps> = ({ active, onToggle }) => {
  return (
    <span
      className={`switch  switch-${active ? "active" : "inactive"}`}
      onClick={onToggle}
    >
      <span
        className={`switch__inner switch__inner-${
          active ? "active" : "inactive"
        }`}
      ></span>
    </span>
  );
};

export default Switch;
