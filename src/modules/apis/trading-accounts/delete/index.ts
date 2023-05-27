import type { IDeleteTradingAccountResponse } from "./types/deleteTradingAccounts.type"
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description delete a trading account
 * @param token: authorization token thath should be set on header
 * @returns a trading account delete res
 * @default  endpoint is /my/trading/accounts/id
 */

export const deleteTradingAccount= async (
  endpoint?: string,id?:string
): Promise<IDeleteTradingAccountResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : `/my/trading/accounts/${id}`), useHeaders("DELETE")).then(async (response) => {
    return await responseHandeling(response);
  });
};
