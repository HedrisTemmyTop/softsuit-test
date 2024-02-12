import { FC } from "react";
import "./_index.scss";
interface PropTypes {
  color?: string;
}

const Spinner: FC<PropTypes> = ({ color = "#fff" }) => {
  const styles = {
    border: `3px solid ${color}`,
    borderBottomColor: "transparent",
  };
  return <span className="loader" style={styles}></span>;
};

export default Spinner;
