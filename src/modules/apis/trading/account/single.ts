import {IAccount} from "./interface/IAccount";
import {useHeaders, useUrl} from "../../../../core";
import responseHandeling from "../../../../core/responseHandeling";
import {config} from "../../../config";

/**
 * @description single trading account
 * @returns a trading account
 * @default  endpoint is /my/trading/accounts/id
 * @param endpoint
 * @param id
 */

export const single= async (
  endpoint?: string,id?:string
): Promise<IAccount> => {
  return await fetch(useUrl(endpoint ? endpoint : config.endpoints.trading.accounts+id), useHeaders()).then(async (response) => {
    return await responseHandeling(response);
  });
};
