import {requestHeader} from "../modules/config/requestHeader";
import {config} from "../modules/config";

export const useUrl = (
  endpoint = config.endpoints.trading.accounts as string
): RequestInfo | URL => {
  return config.baseURL + endpoint;
};
export const useHeaders = (identifier?:any,method = "GET" as string ) => {
  return {
    headers: {...requestHeader, ...config.headers},
    method,
    body: identifier,
  };
};
