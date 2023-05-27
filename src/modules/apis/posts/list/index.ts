import responseHandeling from "../../../../core/responseHandeling";
import { useHeaders, useUrl } from "../../../../core";
import {IPostList} from "./types/IPostList.type";
import {config} from "../../../config";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 */

export const list = async (
  endpoint?: string
): Promise<IPostList> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.posts), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
