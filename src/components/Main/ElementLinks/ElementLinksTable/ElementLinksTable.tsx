import { FC } from "react";
import "./_elements-table.scss";
import { BiSortAlt2 } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Select from "react-select";

const header: string[] = [
  "Name",
  "Sub-Organization",
  "Department",
  "Employee Category",
  "Amount",
  "Details",
  "Action",
];

const ElementLinksTable: FC = () => {
  const rowsPerPage = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 50, label: 50 },
  ];
  const last = header.length - 1;
  const secondToLast = header.length - 2;
  return (
    <div className="table">
      <div className="table__head grid">
        {header.map((el, i) => {
          return (
            <span className="table__head--element" key={i}>
              <span>{el} </span>
              {i !== last && i !== secondToLast && <BiSortAlt2 />}
            </span>
          );
        })}
      </div>
      <div className="table__content ">
        {["", "", ""].map((_, i) => (
          <div className="table__content-element grid" key={i}>
            <span>ABC Corporation</span>
            <span>Solutions Delivery</span>
            <span>Software Development</span>
            <span>Junior Staff</span>
            <span>NGN 10,000.00</span>
            <span className="table__content--view">View Details</span>
            <span>
              <span className="edit action-icon">
                <CiEdit />
              </span>
              <span className="delete action-icon">
                <AiOutlineDelete />
              </span>
            </span>
          </div>
        ))}
        <div className="table__footer">
          <span className="table__footer--left">
            <span>Showing</span>
            <span>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={rowsPerPage[0]}
                options={rowsPerPage}
              />
            </span>
            <span>Out of 10</span>
          </span>
          <span className="table__footer--btns">
            <button>
              <GrFormPrevious />
            </button>
            <button className="table__footer--btns-active">
              <span>1</span>
            </button>
            <button>
              <span>2</span>
            </button>
            <button>
              <span>3</span>
            </button>
            <button>
              <GrFormNext />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ElementLinksTable;
