//#region Public Routes
import { config } from "./modules/config";
import { tradingAccounts } from "./modules/trading-accounts";
//#endregion
export const myTs = () => {
  return {
    config,
    tradingAccounts,
  };
};
