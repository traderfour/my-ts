import type { IUpdateTradingFrameworkResponse } from "./types/updateTradingFramework.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description update a framework
 * @param token: authorization token thath should be set on header
 * @returns a framework update response
 * @default  endpoint is /my/trading/frameworks/id
 */

export const updateTradingFramework = async (
  endpoint?: string, identifier?:any,id?:any
): Promise<IUpdateTradingFrameworkResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : `/my/trading/frameworks/${id}`), useHeaders(identifier,"PUT")).then(async (response) => {
    return await responseHandeling(response);
  });
};
