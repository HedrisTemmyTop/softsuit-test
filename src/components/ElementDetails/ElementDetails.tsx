import { FC } from "react";
import "./_element-details.scss";
import { IoMdArrowBack } from "react-icons/io";

import history from "../utils/history";
import { ElementType } from "../../types/createElement";
import formatDateTime from "../utils/formatDate";
import { optionTypes } from "../../types/selectTypes";
interface PropTypes {
  element: ElementType;
}

const ElementDetails: FC<PropTypes> = ({ element }) => {
  const handleGoback = () => {
    history.back();
  };
  return (
    <section className="details">
      <div className="icon-back" onClick={handleGoback}>
        <IoMdArrowBack />
      </div>
      <h2 className="heading">Element Details</h2>
      <div className="details__table">
        <div className="details__table--element details__table--left ">
          <div>ELEMENT NAME</div>
          <div>{element.name}</div>
        </div>
        <div className="details__table--element details__table--right">
          <div>ELEMENT CLASSIFICATION</div>
          <div>{element.classificationValueId}</div>
        </div>
        <div className="details__table--element details__table--left ">
          <div>ELEMENT CATEGORY</div>
          <div>{element.categoryValueId}</div>
        </div>
        <div className="details__table--element details__table--right">
          <div> PAYRUN</div>
          <div>{element.payRunValueId}</div>
        </div>
        <div className="details__table--element details__table--left ">
          <div> DESCRIPTION</div>
          <div>{element.description}</div>
        </div>
        <div className="details__table--element details__table--right">
          <div> REPORTING NAME</div>
          <div>{element.reportingName}</div>
        </div>
        <div className="details__table--element details__table--left ">
          <div>EFFECTIVE START DATE</div>
          <div>{formatDateTime(element.effectiveStartDate).formattedDate}</div>
        </div>
        <div className="details__table--element details__table--right">
          <div>EFFECTIVE END DATE</div>
          <div>{formatDateTime(element.effectiveEndDate).formattedDate}</div>
        </div>
        <div className="details__table--element details__table--left ">
          <div> PROCESSING TYPE</div>
          <div>{element.processingType}</div>
        </div>
        <div className="details__table--element details__table--right">
          <div>PAY FREQUENCY</div>
          <div>{element.payFrequency}</div>
        </div>
        <div className="details__table--element details__table--left ">
          <div>PAY MONTHS</div>
          <div>
            {element.selectedMonths.map((month: optionTypes, i) => {
              return (
                <span key={month.value as string}>
                  {month.label}{" "}
                  {`${i !== element.selectedMonths.length - 1 ? ", " : ""}`}
                </span>
              );
            })}
          </div>
        </div>
        <div className="details__table--element details__table--right">
          <div>PRORATE</div>
          <div>{element.prorate ? "Yes" : "No"}</div>
        </div>
        <div className="details__table--element details__table--left ">
          <div>STATUS </div>
          <div>{element.status}</div>
        </div>
        <div className="details__table--element details__table--right">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ElementDetails;
