import { ChangeEvent, FC, Fragment, useEffect } from "react";
import "./../_create-element.scss";
import Select, { SingleValue } from "react-select";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./../../../store/actions";
import { RootState } from "../../../types/reducers";
import { AppDispatch } from "../../../store";
import { optionTypes } from "../../../types/selectTypes";

interface FormatType {
  name: string;
  id: string;
}

const StepOne: FC = () => {
  const {
    name,
    classification,
    category,
    payrun,
    description,
    reportingName,
    classificationOptions,
    categoryOptions,
    payrunOptions,
    loadingCategory,
    loadingClassification,
    loadingPayrun,
    errorClassification,
    errorPayrun,
    errorCategory,
    error,
  } = useSelector((state: RootState) => state.createElementReducer);

  // Define types for payrun, classification, and category
  const payrunTyped: optionTypes = payrun as optionTypes;
  const classificationTyped: optionTypes = classification as optionTypes;
  const categoryTyped: optionTypes = category as optionTypes;

  const dispatch: AppDispatch = useDispatch();

  // Format options for Select component
  const formatOptions = (options: FormatType[]): optionTypes[] => {
    return options.map((el) => ({
      label: el.name,
      value: +el.id,
    }));
  };

  // Options for Select components
  const classifications = formatOptions(classificationOptions);
  const payruns = formatOptions(payrunOptions);
  const categories = formatOptions(categoryOptions);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    dispatch({
      type,
      payload: e.target.value,
    });
  };

  // Handle Select change
  const handleSelect = (selectedOption: optionTypes, type: string) => {
    dispatch({
      type,
      payload: selectedOption,
    });
  };

  // Fetch necessary data on component mount
  useEffect(() => {
    if (classifications.length === 0 && !loadingClassification) {
      dispatch(Actions.getElementClassification());
    }

    if (categories.length === 0 && !loadingCategory) {
      dispatch(Actions.getElementCategory());
    }

    if (payruns.length === 0 && !loadingPayrun) {
      dispatch(Actions.getElementPayrun());
    }
  }, [
    dispatch,
    classifications,
    categories,
    payruns,
    loadingCategory,
    loadingPayrun,
    loadingClassification,
  ]);

  return (
    <Fragment>
      {/* Input for Name */}
      <div className="create-element__input">
        <label>Name</label>
        <input
          type="text"
          placeholder="Input Name"
          onChange={(e) => handleChange(e, Actions.CHANGE_NAME)}
          value={name}
        />
        {error && !name && (
          <span className="create-element__input--error">
            Element name is required
          </span>
        )}
      </div>

      {/* Select for Element Classification */}
      <div className="create-element__input">
        <label>Element Classification</label>
        <Select
          options={classifications}
          isLoading={loadingClassification}
          placeholder="Select Classification"
          onChange={(option: SingleValue<optionTypes>) =>
            handleSelect(option as optionTypes, Actions.CHANGE_CLASSIFICATION)
          }
          value={classification}
        />
        {error && !classificationTyped.value && (
          <span className="create-element__input--error">
            Element classification is required
          </span>
        )}
        {errorClassification && (
          <span className="create-element__input--error">
            {errorClassification}
          </span>
        )}
      </div>

      {/* Select for Element Category */}
      <div className="create-element__input">
        <label>Element Category</label>
        <Select
          options={categories}
          placeholder="Select Category"
          isLoading={loadingCategory}
          onChange={(option) => handleSelect(option, Actions.CHANGE_CATEGORY)}
          value={category}
        />
        {error && !categoryTyped.value && (
          <span className="create-element__input--error">
            Element category is required
          </span>
        )}
        {errorCategory && (
          <span className="create-element__input--error">{errorCategory}</span>
        )}
      </div>

      {/* Select for Payrun */}
      <div className="create-element__input">
        <label>Payrun</label>
        <Select
          options={payruns}
          placeholder="Select Payrun"
          isLoading={loadingPayrun}
          onChange={(option) => handleSelect(option, Actions.CHANGE_PAYRUN)}
          value={payrun}
        />
        {error && !payrunTyped.value && (
          <span className="create-element__input--error">
            Element payrun is required
          </span>
        )}
        {errorPayrun && (
          <span className="create-element__input--error">{errorPayrun}</span>
        )}
      </div>

      {/* Input for Description */}
      <div className="create-element__input full-grid">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => handleChange(e, Actions.CHANGE_DESCRIPTION)}
        />
        {error && !description && (
          <span className="create-element__input--error">
            Element description is required
          </span>
        )}
      </div>

      {/* Input for Reporting Name */}
      <div className="create-element__input full-grid">
        <label>Reporting Name</label>
        <input
          type="text"
          placeholder="Input Name"
          value={reportingName}
          onChange={(e) => handleChange(e, Actions.CHANGE_REPORTING_NAME)}
        />
        {error && !reportingName && (
          <span className="create-element__input--error">
            Element reporting name is required
          </span>
        )}
      </div>
    </Fragment>
  );
};

export default StepOne;
