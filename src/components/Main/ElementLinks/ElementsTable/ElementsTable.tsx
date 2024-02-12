import { FC, useEffect, useMemo, useState } from "react";
import "./../ElementLinksTable/_elements-table.scss";
import { BiSortAlt2 } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import { EDIT_ELEMENT, getAllElements } from "../../../../store/actions";
import Spinner from "../../../../shared/Spinner";
import formatDateTime from "../../../utils/formatDate";
import { Link } from "react-router-dom";
import { ElementType } from "../../../../types/createElement";
import { RootState } from "../../../../types/reducers";
import { AppDispatch } from "../../../../store";
import Pagination from "../../../CreateElement/Pagination/Pagination";
import { optionTypes } from "../../../../types/selectTypes";

const header: string[] = [
  "Name",
  "Element Category",
  "Element Classification",
  "Status",
  "Date & Time Modified",
  "Details",
  "Action",
];
interface PropTypes {
  onOpen: () => void;
  onDelete: (id: string) => void;
}

const ElementsTable: FC<PropTypes> = ({ onOpen, onDelete }) => {
  //  state to manage the visibility of action buttons
  const [showAction, setShowAction] = useState<number>(-1);

  // state to manage pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<optionTypes>({
    label: 1,
    value: 1,
  }); // Set your desired default value // Destructure values from Redux state
  const { isLoading, error, elements } = useSelector(
    (state: RootState) => state.elementsReducer
  );
  const elementsTyped: ElementType[] = elements as ElementType[];

  const totalItems = elementsTyped.length; // Replace with the length of your data array

  // Calculate the total number of pages
  const totalPages = useMemo(
    () => Math.ceil(totalItems / +rowsPerPage.value),
    [totalItems, rowsPerPage]
  );

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * +rowsPerPage.value;
  const endIndex = Math.min(
    startIndex + +rowsPerPage.value - 1,
    totalItems - 1
  );

  // Slice the data array to get the items for the current page
  const currentItems = useMemo(
    () => elementsTyped.slice(startIndex, endIndex + 1),
    [elementsTyped, startIndex, endIndex]
  );
  console.log(currentItems);
  // Define options for rows per page in the table
  const rowsPerPageOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
  ];
  const last = header.length - 1;

  const dispatch: AppDispatch = useDispatch();

  // Handle edit action
  const handleEdit = (element: ElementType) => {
    console.log(element);
    dispatch({ type: EDIT_ELEMENT, payload: element });
    onOpen();
  };

  // Handle delete action
  const handleDelete = (id: string) => {
    onDelete(id);
  };

  // Function to handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Function to handle rows per page change
  const handleRowsPerPageChange = (newRowsPerPage: optionTypes) => {
    console.log(newRowsPerPage);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to the first page when changing rows per page
  };

  // Fetch elements on component mount
  useEffect(() => {
    if (elementsTyped.length === 0) {
      dispatch(getAllElements());
    }
  }, [dispatch, elementsTyped]);

  let content = null;
  if (isLoading) {
    content = (
      <div className="spinner-container">
        <Spinner color={"#4baa79"} />
      </div>
    );
  }
  if (!isLoading && elementsTyped.length === 0 && !error) {
    content = <div>Empty el</div>;
  }
  if (!isLoading && elementsTyped.length > 0 && !error) {
    content = (
      <>
        {" "}
        <div className="table__head grid">
          {header.map((el, i) => {
            return (
              <span className="table__head--element" key={i}>
                <span>{el} </span>
                {i !== last && <BiSortAlt2 />}
              </span>
            );
          })}
        </div>
        <div className="table__content ">
          {currentItems.map((element: ElementType, i: number) => (
            <div className="table__content-element grid" key={i}>
              <span>{element.name}</span>
              <span>{element.categoryValueId}</span>
              <span>{element.classificationValueId}</span>
              <span
                className={`status status__${element.status.toLowerCase()}`}
              >
                {element.status}
              </span>
              <span>
                {formatDateTime(element.createdAt).formattedDate} ||{" "}
                {formatDateTime(element.createdAt).formattedTime}
              </span>
              <span>{element.modifiedBy}</span>

              <span className="action-btn" onClick={() => setShowAction(i)}>
                <span className="action-btn__dot"></span>
                <span className="action-btn__dot"></span>
                <span className="action-btn__dot"></span>
                {i === showAction && (
                  <div className="action-btn__actions">
                    <Link to={`${element.id}`}>
                      <IoEyeOutline />
                      <span>View Element Links</span>
                    </Link>
                    <div onClick={() => handleEdit(element)}>
                      <CiEdit />
                      <span>Edit Element</span>
                    </div>
                    <div
                      className="action-btn__actions--delete"
                      onClick={() => handleDelete(element.id)}
                    >
                      <AiOutlineDelete />
                      <span>Delete Element</span>
                    </div>
                  </div>
                )}
              </span>
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            rowsPerPageOptions={rowsPerPageOptions}
            rowsPerPage={rowsPerPage}
          />
        </div>
      </>
    );
  }

  if (!isLoading && error) {
    content = <div>{error}</div>;
  }
  return <div className="table">{content}</div>;
};

export default ElementsTable;
