//#region Public Routes
import { config } from "./modules/config";
import { tradingAccounts } from "./modules/apis/trading-accounts";
import { ITradingAccountListResponse } from "./modules/apis/trading-accounts/list/types/TradingAccounts.type";
//#endregion
export interface IMyTs {
  config: typeof config;
  tradingAccounts: {
    getTradingAccounts: (
      endpoint?: string | undefined
    ) => Promise<ITradingAccountListResponse>;
  };
}
// add IMyTs type to myTs function

export const myTs = (): IMyTs => {
  return {
    config,
    tradingAccounts: tradingAccounts(),
  };
};
