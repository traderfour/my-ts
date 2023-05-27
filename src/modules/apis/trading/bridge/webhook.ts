/**
 * @description post trading bridge webhook
 * @returns trading bridge webhook post response
 * @default  endpoint is /v1/my/trading/bridge/webhook
 * @param endpoint
 * @param identifier
 */
import {IWebhook} from "./interface/IWebhook";
import {useHeaders, useUrl} from "../../../../core";
import {config} from "../../../config";
import responseHandeling from "../../../../core/responseHandeling";

export const webhook = async (
  endpoint?: string, identifier?:any
): Promise<IWebhook> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.bridge.webhook), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
