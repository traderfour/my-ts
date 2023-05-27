/**
 * @description post trading accounts
 * @returns trading accounts post response
 * @default  endpoint is /my/trading/accounts
 * @param endpoint
 * @param identifier
 */
import {IAccount} from "./interface/IAccount";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";


export const store = async (
  endpoint?: string, identifier?:any
): Promise<IAccount> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.accounts.store), useHeaders(identifier,"POST")).then(async (response) => {
    return await responseHandeling(response);
  });
};
