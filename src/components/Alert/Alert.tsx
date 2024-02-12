import { ReactNode, FC } from "react";
import "./_alert.scss";
import Spinner from "../../shared/Spinner";
interface PropTypes {
  message: string;
  icon: ReactNode;
  type: "warning" | "success" | "deleted";
  onCancel: () => void;
  onAccept?: () => void;
  isLoading?: boolean;
}

const Alert: FC<PropTypes> = ({
  message,
  icon,
  type,
  onCancel,
  onAccept,
  isLoading,
}) => {
  console.log(isLoading);
  const styles =
    type !== "success"
      ? {
          backgroundColor: "#FCEEEE",
          color: "#E05453",
        }
      : { backgroundColor: "#93CCAF", color: "#4BAA79" };

  return (
    <div className="alert">
      <div className="alert__icon" style={styles}>
        <span>{icon}</span>
      </div>
      <div className="alert__message">{message}</div>
      {type === "warning" && (
        <div className="alert__warning">This action cannot be reversed</div>
      )}
      <div className="alert__btns">
        {type === "warning" ? (
          <>
            <button className="alert__btns--cancel" onClick={onCancel}>
              <span>Cancel</span>
            </button>
            {isLoading ? (
              <Spinner color={"#E05453"} />
            ) : (
              <button className="alert__btns--delete" onClick={onAccept}>
                <span>Yes, Delete</span>
              </button>
            )}
          </>
        ) : (
          <button className="alert__btns--success" onClick={onCancel}>
            <span>Close to continue</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
