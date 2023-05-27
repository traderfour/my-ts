import type { ITradingAccountListResponse } from "./types/TradingAccounts.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description list of trading accounts
 * @param token: authorization token thath should be set on header
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 */

export const getTradingAccounts = async (
  endpoint?: string
): Promise<ITradingAccountListResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : '/my/trading/accounts'), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
