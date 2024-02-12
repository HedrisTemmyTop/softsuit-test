import { FC } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Select, { SingleValue } from "react-select";
import { optionTypes } from "../../../types/selectTypes";
interface PropTypes {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: optionTypes) => void;
  rowsPerPageOptions: optionTypes[];
  rowsPerPage: optionTypes;
}

const Pagination: FC<PropTypes> = ({
  currentPage,
  totalPages,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions,
  rowsPerPage,
}) => {
  // Function to generate an array of page numbers with a maximum of 3 buttons
  const generatePageNumbers = () => {
    const pages = [];
    const maxButtons = 3; // Adjust this value based on your requirement
    const halfMaxButtons = Math.floor(maxButtons / 2);

    // Calculate the start and end page numbers based on the current page
    let startPage = Math.max(1, currentPage - halfMaxButtons);
    const endPage = Math.min(startPage + maxButtons - 1, totalPages);

    // Adjust the start page if we're at the end of the pagination
    startPage = Math.max(1, endPage - maxButtons + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };
  return (
    <div className="table__footer">
      <span className="table__footer--left">
        <span>Showing</span>
        <span>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={rowsPerPageOptions[0]}
            options={rowsPerPageOptions}
            onChange={(selected: SingleValue<optionTypes>) =>
              onRowsPerPageChange(selected as optionTypes)
            }
            value={rowsPerPage}
          />
        </span>
        <span>Out of 10</span>
      </span>
      <span className="table__footer--btns">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GrFormPrevious />
        </button>
        {generatePageNumbers().map((page) => (
          <button
            className={`${
              currentPage === page && "table__footer--btns-active"
            }`}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
          >
            <span>{page}</span>
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <GrFormNext />
        </button>
      </span>
    </div>
  );
};

export default Pagination;
