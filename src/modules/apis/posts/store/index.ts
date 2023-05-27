import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";
import {IPost} from "../interface/IPost";
import {config} from "../../../config";

/**
 * @description post trading accounts
 * @returns trading accounts post response
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 * @param identifier
 */

export const store = async (
  endpoint?: string, identifier?:any
): Promise<IPost> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.posts), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
