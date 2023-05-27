import type { ITradingSingleAccountResponse } from "./types/singleTradingAccount.type"
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description single trading account
 * @param token: authorization token thath should be set on header
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 */

export const getSingleTradingAccount= async (
  endpoint?: string,id?:string
): Promise<ITradingSingleAccountResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : `/my/trading/accounts/${id}`), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
