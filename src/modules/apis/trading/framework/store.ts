/**
 * @description post framework
 * @param token: authorization token thath should be set on header
 * @returns framework post response
 * @default  endpoint is /my/trading/frameworks
 */
import {IFramework} from "./interface/IFramework";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";

export const store = async (
  endpoint?: string, identifier?:any
): Promise<IFramework> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.frameworks), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
