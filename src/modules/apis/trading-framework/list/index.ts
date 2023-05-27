import type { ITradingFrameworkListResponse } from "./types/tradingFramworkList.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description list of frameworks
 * @param token: authorization token thath should be set on header
 * @returns a framework list
 * @default  endpoint is /my/trading/frameworks
 */

export const getTradingFrameworkList = async (
  endpoint?: string
): Promise<ITradingFrameworkListResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : '/my/trading/frameworks'), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
