/**
 * @description update a framework
 * @param token: authorization token thath should be set on header
 * @returns a framework update response
 * @default  endpoint is /my/trading/frameworks/id
 */
import {IFramework} from "./interface/IFramework";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";

export const update = async (
  endpoint?: string, identifier?:any,id?:any
): Promise<IFramework> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.frameworks+id), useHeaders(identifier,"PUT")).then(async (response) => {
    return await responseHandeling(response);
  });
};
