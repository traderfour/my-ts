/**
 * @description post trading bridge check
 * @returns trading bridge check post response
 * @default  endpoint is /my/trading/bridge/check
 * @param endpoint
 * @param identifier
 */
import {ICheck} from "./interface/ICheck";
import {useHeaders, useUrl} from "../../../../core";
import {config} from "../../../config";
import responseHandeling from "../../../../core/responseHandeling";

export const check = async (
  endpoint?: string, identifier?:any
): Promise<ICheck> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.bridge.check), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
