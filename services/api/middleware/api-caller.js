import Axios from "./axiosInstance";
import * as queryString from "query-string";
import { REQUEST_TYPES, BASE_URL } from "../../../utils/contants/url";

export function apiCaller({
  method = REQUEST_TYPES.GET,
  url = "",
  params = {},
  data = {},
} = {}) {
  return Axios({
    method,
    baseURL: BASE_URL,
    url,
    params,
    paramsSerializer: (queryParams) => queryString.stringify(queryParams),
    data,
    responseType: "json",
    validateStatus: (status) => status >= 200 && status < 300,
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log("error",  error);
      return error;
    });
}
