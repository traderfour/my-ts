import {config} from "../../../config";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {IFramework} from "./interface/IFramework";

/**
 * @description single framework
 * @returns a framework
 * @default  endpoint is /my/trading/frameworks/id
 * @param endpoint
 * @param id
 */

export const single= async (
  endpoint?: string,id?:string
): Promise<IFramework> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.frameworks+id), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
