import { getTradingAccounts } from "./list";
import { postTradingAccounts } from "./store";
import { getSingleTradingAccount } from "./single";
import { deleteTradingAccount } from "./delete";
import { UpdateTradingAccounts } from "./update";
export const tradingAccounts = () => {
  return {
    getTradingAccounts,
    postTradingAccounts,
    getSingleTradingAccount,
    deleteTradingAccount,
    UpdateTradingAccounts,
  };
};
