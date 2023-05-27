/**
 * @description delete a framework
 * @returns a framework delete res
 * @default  endpoint is /my/trading/frameworks/id
 * @param endpoint
 * @param id
 */
import {IDelete} from "../../../interface/IDelete";
import {useHeaders, useUrl} from "../../../../core";
import {config} from "../../../config";
import responseHandeling from "../../../../core/responseHandeling";

export const destroy = async (
  endpoint?: string,id?:string
): Promise<IDelete> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.frameworks+id), useHeaders("DELETE")).then(async (response) => {
    return await responseHandeling(response);
  });
};
