import { FC, useState } from "react";
import ElementLinksTable from "./ElementLinksTable/ElementLinksTable";
import "./_element-links.scss";
import { CiSearch } from "react-icons/ci";
import Modal from "../../Modal/Modal";
import CreateElementLinks from "../../CreateElement/CreateElementLinks";
import { useDispatch } from "react-redux";
import { CHANGE_ELEMENT_STEP } from "../../../store/actions";

const ElementLinks: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleCreate = () => {
    dispatch({
      type: CHANGE_ELEMENT_STEP,
      payload: 1,
    });
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <section className="element-links">
      <h2 className="heading">Element Links</h2>
      <div className="element-links__head">
        <div className="element-links__head--search">
          <input type="text" placeholder="Search for element link" />
          <span>
            <CiSearch />
          </span>
        </div>
        <button className="element-links__btn" onClick={handleCreate}>
          <span>Create Element Link</span>
          <span>+</span>
        </button>
      </div>
      <ElementLinksTable />

      {showModal && (
        <Modal onClose={handleClose}>
          <CreateElementLinks onClose={handleClose} />
        </Modal>
      )}
    </section>
  );
};

export default ElementLinks;
