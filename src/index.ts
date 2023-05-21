//#region Public Routes
import { config } from "./modules/config";
import { tradingAccounts } from "./modules/apis/trading-accounts";
//#endregion
export const myTs = () => {
  return {
    config,
    tradingAccounts,
  };
};
