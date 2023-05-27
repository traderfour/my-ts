import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";
import {IDelete} from "../../../interface/IDelete";
import {config} from "../../../config";

/**
 * @description delete a trading account
 * @returns a trading account delete res
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */

export const destroy = async (
  endpoint?: string,id?:string
): Promise<IDelete> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.posts+id), useHeaders("DELETE")).then(async (response) => {
    return await responseHandeling(response);
  });
};
