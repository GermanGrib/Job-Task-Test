import axios from "axios";

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

interface RequestOptions {
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export const wrapper = (
  method: "post" | "get" | "put" | "delete",
  url: string,
  data?: any,
  options?: RequestOptions,
) => {
  return axios
    .request({
      method,
      url,
      data,
      params: options?.params,
      headers: options?.headers,
    })
    .then(checkResponse)
    .catch(catchError);
};
