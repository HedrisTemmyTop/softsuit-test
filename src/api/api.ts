import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Interface defining the default configuration
interface Defaults {
  baseURL: string;
  headers: () => Record<string, string>;
  error: {
    code: string;
    message: string;
    status: number;
    data: Record<string, unknown>;
  };
}

// Interface defining the structure of API responses
export interface ApiResponse<T> {
  data: T;
}

// Default configuration values
const defaults: Defaults = {
  baseURL: "https://650af6bedfd73d1fab094cf7.mockapi.io",
  headers: () => ({
    "Content-Type": "application/json",
  }),
  error: {
    code: "INTERNAL_ERROR",
    message: "Something went wrong. Please check your internet connection",
    status: 503,
    data: {},
  },
};

// Function to make API requests
const api = <T>(
  method: AxiosRequestConfig["method"],
  url: string,
  variables?: T
): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
    }).then(
      (response: AxiosResponse<ApiResponse<T>>) => {
        resolve(response as T); // Extracting data from ApiResponse
      },
      (error) => {
        console.log(error);
        if (error.response) {
          reject(error.response);
        } else {
          reject(defaults.error);
        }
      }
    );
  });

// Exporting functions for common HTTP methods
const apiService = {
  get: <T>(url: string, variables?: T) => api<T>("get", url, variables),
  post: <T>(url: string, variables?: T) => api<T>("post", url, variables),
  put: <T>(url: string, variables?: T) => api<T>("put", url, variables),
  patch: <T>(url: string, variables?: T) => api<T>("patch", url, variables),
  delete: <T>(url: string, variables?: T) => api<T>("delete", url, variables),
};

export default apiService;
