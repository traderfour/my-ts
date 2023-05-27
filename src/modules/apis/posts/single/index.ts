import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";
import {IPost} from "../interface/IPost";
import {config} from "../../../config";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */

export const single = async (
  endpoint?: string,id?:string
): Promise<IPost> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.posts+id), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
