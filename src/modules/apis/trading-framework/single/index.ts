import type { ISingleTradingFrameworkResponse } from "./types/singleTradingFramework.type"
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description single framework
 * @param token: authorization token thath should be set on header
 * @returns a framework
 * @default  endpoint is /my/trading/frameworks/id
 */

export const getSingleTradingFramework= async (
  endpoint?: string,id?:string
): Promise<ISingleTradingFrameworkResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : `/my/trading/frameworks/${id}`), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
