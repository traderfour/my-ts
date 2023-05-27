import {useHeaders, useUrl} from "../../../../../core";
import responseHandeling from "../../../../../core/responseHandeling";
import {IAccountList} from "./types/IAccountList.type";
import {config} from "../../../../config";

/**
 * @description list of trading accounts
 * @returns a trading accounts list
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 */

export const list = async (
  endpoint?: string
): Promise<IAccountList> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.accounts), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
