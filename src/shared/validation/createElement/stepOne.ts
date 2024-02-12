import * as yup from "yup";

export const stepOneSchema = yup.object().shape({
  name: yup.string().required("Element name is required"),
  classification: yup.string().required("Element Classification is required"),
  category: yup.string().required("Element category is required"),
  payrun: yup.string().required("Element payrun is required"),
  description: yup.string().required("Element description is required"),
  reportingName: yup.string().required("Element reporting name is required"),
  startDate: yup.string().required("Element start date is required"),
  endDate: yup.string().required("Element end date is required"),
  processingType: yup.string().required("Element processing type is required"),
  payFreq: yup.string().required("Element pay frequency is required"),
  prorate: yup.string().required("Element prorate is required"),
  status: yup.string().required("Element status is required"),
});
