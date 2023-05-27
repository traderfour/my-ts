import type { IBridgeCheckStoreResponse } from "./types/postTradingBridgeCheck.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description post trading bridge check
 * @param token: authorization token thath should be set on header
 * @returns trading bridge check post response
 * @default  endpoint is /my/trading/bridge/check
 */

export const postTradingBridgeCheck = async (
  endpoint?: string, identifier?:any
): Promise<IBridgeCheckStoreResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : '/my/trading/bridge/check'), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
