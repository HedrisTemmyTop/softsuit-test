import { optionTypes } from "./selectTypes";

export interface createElTypes {
  name: string;
  type: "Create" | "Edit";
  classification: optionTypes;
  category: optionTypes;
  payrun: optionTypes;
  description: string;
  reportingName: string;
  startDate: string;
  endDate: string;
  processingType: string;
  payFreq: string;
  selectedMonths: optionTypes[];
  prorate: boolean;
  status: boolean;
  step: number;
  error: boolean;
  classificationOptions: optionTypes[];
  loadingClassification: boolean;
  errorClassification: string;
  categoryOptions: optionTypes[];
  loadingCategory: boolean;
  errorCategory: string;

  payrunOptions: optionTypes[];
  loadingPayrun: boolean;
  errorPayrun: string;
  errorMessage: string;
  loading: boolean;
  isSubmitting: boolean;
  submitError: string;
  lookupId: string;
}

export interface payloadTypes {
  name: string;
  description: string;
  payRunId: number;
  payRunValueId: number;
  classificationId: number;
  classificationValueId: number;
  categoryId: number;
  categoryValueId: number;
  reportingName: string;
  processingType: string;
  status: string;
  prorate: string;
  effectiveStartDate: string;
  effectiveEndDate: string;
  selectedMonths: string[];
  payFrequency: string;
  modifiedBy: string;
  id?: string;
  createdAt?: string;
}
export interface PayloadType {
  name: string;
  description: string;
  payRunId: number;
  payRunValueId: string | number;
  classificationId: number;
  classificationValueId: string | number;
  categoryId: number;
  categoryValueId: string | number;
  reportingName: string;
  processingType: string;
  status: "Active" | "Inactive";
  prorate: boolean;
  effectiveStartDate: string; // Update the type if it's not a string
  effectiveEndDate: string; // Update the type if it's not a string
  selectedMonths: optionTypes[]; // Update the type if it's not a string array
  payFrequency: string;
  modifiedBy: string;
}

export interface ElementType extends PayloadType {
  createdAt: string;
  id: string;
}
