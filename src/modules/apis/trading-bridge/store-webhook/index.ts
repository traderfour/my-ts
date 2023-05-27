import type { IBridgeWebhookStoreResponse } from "./types/postTradingBridgeWebhook.type";
import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";

/**
 * @description post trading bridge webhook
 * @param token: authorization token thath should be set on header
 * @returns trading bridge webhook post response
 * @default  endpoint is /v1/my/trading/bridge/webhook
 */

export const postTradingBridgeWebhook = async (
  endpoint?: string, identifier?:any
): Promise<IBridgeWebhookStoreResponse> => {
  return await fetch(useUrl(endpoint ? endpoint : '/v1/my/trading/bridge/webhook'), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
