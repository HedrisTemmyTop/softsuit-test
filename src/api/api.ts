import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

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

interface ApiResponse<T> {
  data: T;
}

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

const api = <T>(
  method: AxiosRequestConfig["method"],
  url: string,
  variables?: Record<string, unknown>
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
        resolve(response); // Extracting data from ApiResponse
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

export default {
  get: <T>(url: string, variables?: Record<string, unknown>) =>
    api<T>("get", url, variables),
  post: <T>(url: string, variables?: Record<string, unknown>) =>
    api<T>("post", url, variables),
  put: <T>(url: string, variables?: Record<string, unknown>) =>
    api<T>("put", url, variables),
  patch: <T>(url: string, variables?: Record<string, unknown>) =>
    api<T>("patch", url, variables),
  delete: <T>(url: string, variables?: Record<string, unknown>) =>
    api<T>("delete", url, variables),
};
