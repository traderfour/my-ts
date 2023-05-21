import { requestHeader } from "../../../config/requestHeader";
import { config } from "../../../config/index";
import type { ITradingAccountListResponse } from "./types/TradingAccounts.type";
/**
 * @description list of trading accounts
 * @param token: authorization token thath should be set on header
 * @returns a trading accounts list
 * @default /api/v1/login
 */
export const getTradingAccounts = async (
  endpoint?: string
): Promise<ITradingAccountListResponse> => {
  return await fetch(
    config.baseURL +
      (endpoint
        ? endpoint
        : config.defaultValues.defaultEndpoints.tradingAccountsList),
    {
      headers: { ...requestHeader, ...config.headers },
      method: "get",
    }
  ).then(async (response) => {
    if (response.ok) {
      return (await response.json()) as ITradingAccountListResponse;
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  });
};
