import { FC, useState } from "react";

import "./_element-links.scss";
import { CiSearch } from "react-icons/ci";
import ElementsTable from "./ElementsTable/ElementsTable";
import Modal from "../../Modal/Modal";
import CreateElement from "../../CreateElement/CreateElement";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../Alert/Alert";
import * as Actions from "../../../store/actions";
import { RootState } from "../../../types/reducers";
import { AppDispatch } from "../../../store";

const Elements: FC = () => {
  // State to manage the visibility of the modal and the element to delete
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteId, setDelete] = useState<string>("");

  // Redux state and dispatch
  const { step } = useSelector(
    (state: RootState) => state.createElementReducer
  );
  const { isDeleted, isDeleting } = useSelector(
    (state: RootState) => state.elementReducer
  );
  const dispatch: AppDispatch = useDispatch();

  // Handlers for modal actions
  const handleClose = () => {
    dispatch({ type: Actions.CREATE_ELEMENT_COMPLETE, payload: 0 });
    setDelete("");
    setShowModal(false);
  };

  const handleCreate = () => {
    dispatch({ type: Actions.CREATE_ELEMENT_COMPLETE, payload: 1 });
    setDelete("");
    setShowModal(true);
  };

  const handleSuccess = () => {
    dispatch(Actions.getAllElements());
    dispatch({ type: Actions.CREATE_ELEMENT_COMPLETE, payload: 0 });
    setDelete("");
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    dispatch(Actions.deleteElement(deleteId));
  };

  const handleOpen = () => {
    setDelete("");
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    setDelete(id);
    setShowModal(true);
  };

  const handleCloseDeletedModal = () => {
    setDelete("");
    setShowModal(false);
    dispatch(Actions.getAllElements());
  };

  return (
    <section className="element-links">
      <h2 className="heading">Element</h2>
      <div className="element-links__head">
        {/* Search input */}
        <div className="element-links__head--search">
          <input type="text" placeholder="Search for element link" />
          <span>
            <CiSearch />
          </span>
        </div>
        {/* Button to create a new element link */}
        <button className="element-links__btn" onClick={handleCreate}>
          <span>Create Element Link</span>
          <span>+</span>
        </button>
      </div>

      {/* Display the table of elements */}
      <ElementsTable onOpen={handleOpen} onDelete={handleDelete} />

      {/* Display the modal based on different conditions */}
      {showModal && (
        <Modal onClose={handleClose}>
          {/* Display success alert if the element is created successfully */}
          {step === 3 && (
            <Alert
              type="success"
              icon={<IoMdCheckmark />}
              message="Your element has been created successfully"
              onCancel={handleSuccess}
            />
          )}

          {/* Display create element form if step is between 0 and 3 */}
          {+step < 3 && +step > 0 && <CreateElement onClose={handleClose} />}

          {/* Display delete confirmation alert */}
          {deleteId && !isDeleted && (
            <Alert
              type="warning"
              icon={<AiOutlineDelete />}
              message="Are you sure you want to delete this element"
              onAccept={handleConfirmDelete}
              onCancel={handleCloseDeletedModal}
              isLoading={isDeleting}
            />
          )}

          {/* Display deleted alert if the element is deleted successfully */}
          {isDeleted && (
            <Alert
              type="deleted"
              icon={<AiOutlineDelete />}
              message="Your element has been deleted successfully"
              onCancel={handleCloseDeletedModal}
            />
          )}
        </Modal>
      )}
    </section>
  );
};

export default Elements;
