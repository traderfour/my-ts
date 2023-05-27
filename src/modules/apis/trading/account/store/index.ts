import type { ITradingAccountStoreResponse } from "./types/tradingAccountsStore.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description post trading accounts
 * @param token: authorization token thath should be set on header
 * @returns trading accounts post response
 * @default  endpoint is /my/trading/accounts
 */

export const postTradingAccounts = async (
  endpoint?: string, identifier?:any
): Promise<ITradingAccountStoreResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : '/my/trading/accounts'), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
