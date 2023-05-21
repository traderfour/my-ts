import { requestHeader } from "../../../config/requestHeader";
import { config } from "../../../config/index";
import type { ITradingAccountListResponse } from "./types/TradingAccounts.type";
import responseHandeling from "../../../../core/responseHandeling";
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
    return await responseHandeling(response);
  });
};
