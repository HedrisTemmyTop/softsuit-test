// Importing necessary styles and components
import "./_index.scss";
import ElementLinks from "./../components/Main/ElementLinks/ElementLinks";
import ElementDetails from "../components/ElementDetails/ElementDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getElement } from "../store/actions";
import Spinner from "../shared/Spinner";
import { RootState } from "../types/reducers";
import { AppDispatch } from "../store/index.js";
import { ElementType } from "../types/createElement";

const ElementLinksPage = () => {
  //  'id' from the route parameters
  const { id } = useParams();

  // Accessing the Redux store and defining dispatch
  const dispatch: AppDispatch = useDispatch();

  // Selecting relevant data from the Redux store
  const { isLoading, element, error } = useSelector(
    (state: RootState) => state.elementReducer
  );

  // Type assertion for the 'element' variable
  const elementTyped: ElementType = element as ElementType;

  // Effect hook to fetch element data when the component mounts
  useEffect(() => {
    dispatch(getElement(id as string));
  }, [id, dispatch]);

  // Rendering the main content of the component
  return (
    <main className="main-app">
      <div className="main-app__container">
        {/* Displaying a spinner if data is still loading */}
        {isLoading && (
          <div className="container">
            <Spinner color={"#4baa79"} />
          </div>
        )}

        {/* Displaying ElementDetails and ElementLinks if data is loaded successfully */}
        {!isLoading && !error && element && (
          <>
            <ElementDetails element={elementTyped} />
            <ElementLinks />
          </>
        )}

        {/* Displaying an error message if there is an error */}
        {!isLoading && error && <div className="container">{error}</div>}
      </div>
    </main>
  );
};

// Exporting the component as the default export
export default ElementLinksPage;
