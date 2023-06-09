import {config} from "../../../config";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {IAccount} from "./interface/IAccount";

/**
 * @description update a trading account
 * @returns a trading account update response
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param identifier
 * @param id
 */

export const update = async (
  endpoint?: string, identifier?:any,id?:any
): Promise<IAccount> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.accounts+id), useHeaders(identifier,"PUT")).then(async (response) => {
    return await responseHandeling(response);
  });
};
