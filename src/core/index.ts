import { requestHeader } from "../modules/config/requestHeader";
import { config } from "../modules/config";

// TODO need test
export const useUrl = (endpoint?: any): RequestInfo | URL => {
  const apiURL =
    config.baseURL +
    config.apiVersion +
    (config.baseEndpoint ? config.baseEndpoint : "") +
    endpoint
      ? endpoint
      : config.endpoints[endpoint];
  return apiURL;
};

export const useHeaders = (
  payload?: any,
  method = "GET" as string,
  extraHeaders?: any
) => {
  return {
    headers: {
      ...requestHeader,
      ...config.headers,
      [config.authorization]: config.token,
      extraHeaders,
    },
    method,
    body: payload,
  };
};
