import type { ITradingFrameworkStoreResponse } from "./types/TradingFrameworksStore.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description post framework
 * @param token: authorization token thath should be set on header
 * @returns framework post response
 * @default  endpoint is  /my/trading/frameworks
 */

export const postTradingFramework = async (
  endpoint?: string, identifier?:any
): Promise<ITradingFrameworkStoreResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : '/my/trading/frameworks'), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
