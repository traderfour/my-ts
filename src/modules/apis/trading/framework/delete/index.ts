import type { IDeleteTradingFrameworkResponse } from "./types/deleteFramework.type"
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description delete a framework
 * @param token: authorization token thath should be set on header
 * @returns a framework delete res
 * @default  endpoint is /my/trading/frameworks/id
 */

export const deleteTradingFramework= async (
  endpoint?: string,id?:string
): Promise<IDeleteTradingFrameworkResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : `/my/trading/frameworks/${id}`), useHeaders("DELETE")).then(async (response) => {
    return await responseHandeling(response);
  });
};
