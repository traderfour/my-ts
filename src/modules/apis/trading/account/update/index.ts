import type { IUpdateTradingAccountResponse } from "./types/updateTradingAccounts.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description update a trading account
 * @param token: authorization token thath should be set on header
 * @returns a trading account update response
 * @default  endpoint is /my/trading/accounts/id
 */

export const UpdateTradingAccounts = async (
  endpoint?: string, identifier?:any,id?:any
): Promise<IUpdateTradingAccountResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : `/my/trading/accounts/${id}`), useHeaders(identifier,"PUT")).then(async (response) => {
    return await responseHandeling(response);
  });
};
