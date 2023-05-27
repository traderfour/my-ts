/**
 * @description list of frameworks
 * @param token: authorization token thath should be set on header
 * @returns a framework list
 * @default  endpoint is /my/trading/frameworks
 */
import {config} from "../../../config";
import responseHandeling from "../../../../core/responseHandeling";
import {useHeaders, useUrl} from "../../../../core";
import {IFrameworkList} from "./interface/IFrameworkList";

export const list = async (
  endpoint?: string
): Promise<IFrameworkList> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.frameworks), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
