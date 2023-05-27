import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";
import {IPost} from "../interface/IPost";

/**
 * @description update a trading account
 * @returns a trading account update response
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param identifier
 * @param id
 */

export const UpdateTradingAccounts = async (
  endpoint?: string, identifier?:any,id?:any
): Promise<IPost> => {
  return await fetch(useUrl(endpoint ? endpoint : `/my/posts/${id}`), useHeaders(identifier,"PUT")).then(async (response) => {
    return await responseHandeling(response);
  });
};
