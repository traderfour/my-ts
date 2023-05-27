import { requestHeader } from "../modules/config/requestHeader";
import { config } from "../modules/config";

export const useUrl = (
  endpoint = config.defaultValues.defaultEndpoints.tradingAccountsList as string
): RequestInfo | URL => {
  const url = config.baseURL + endpoint;
  return url;
};
export const useHeaders = (identifier?:any,method = "GET" as string ) => {
  const headersConfig = {
    headers: { ...requestHeader, ...config.headers },
    method,
    body:identifier,
  };
  return headersConfig;
};
